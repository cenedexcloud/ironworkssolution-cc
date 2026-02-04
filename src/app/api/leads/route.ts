import { NextResponse } from 'next/server';
import { getLeads, getLeadStats, deleteLead } from '@/lib/lead-storage';

export async function GET() {
  try {
    const leads = getLeads();
    const stats = getLeadStats();

    return NextResponse.json({
      success: true,
      leads,
      stats,
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Lead ID is required' },
        { status: 400 }
      );
    }

    const success = deleteLead(id);

    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to delete lead' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error deleting lead:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete lead' },
      { status: 500 }
    );
  }
}
