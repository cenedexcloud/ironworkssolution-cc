"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileSpreadsheet } from "lucide-react";

export default function DownloadServicesPage() {
  const handleDownload = async () => {
    try {
      const response = await fetch("/api/download-services");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ironworks-services.xls";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Download Services Information
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Download our complete services catalog with pricing and details
          </p>

          <Card className="p-8">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C41E3A] to-[#8B1528] rounded-2xl flex items-center justify-center">
                <FileSpreadsheet className="w-10 h-10 text-white" />
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Services Spreadsheet
                </h2>
                <p className="text-gray-600">
                  Complete list of our iron works services, pricing, and specifications
                </p>
              </div>

              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-gradient-to-r from-[#C41E3A] to-[#8B1528] hover:from-[#8B1528] hover:to-[#C41E3A] text-white px-8"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Services (XLS)
              </Button>

              <div className="text-sm text-gray-500 text-center">
                File format: Microsoft Excel (.xls)
                <br />
                Includes all service categories and pricing information
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
