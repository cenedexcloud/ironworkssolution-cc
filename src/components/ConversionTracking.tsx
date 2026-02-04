"use client"

import { useEffect } from 'react'

// Declare window types for tracking
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

// Track conversion events
export function trackConversion(eventName: string, eventData?: Record<string, string | number | boolean>) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...eventData,
      timestamp: new Date().toISOString()
    })
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventData)
  }

  // Console log for debugging
  console.log('Conversion tracked:', eventName, eventData)
}

// Specific tracking functions
export const conversionEvents = {
  // Form submissions
  quoteRequest: (formData: { projectType?: string }) => {
    trackConversion('generate_lead', {
      category: 'quote_request',
      value: formData.projectType || 'unknown',
      currency: 'USD'
    })
  },

  contactFormSubmit: (formData: Record<string, string>) => {
    trackConversion('contact', {
      category: 'contact_form',
      method: 'form'
    })
  },

  bookingScheduled: (bookingData: { date: string }) => {
    trackConversion('schedule', {
      category: 'consultation_booking',
      value: bookingData.date
    })
  },

  // Phone calls
  phoneClick: () => {
    trackConversion('call_click', {
      category: 'phone_engagement',
      action: 'click_to_call'
    })
  },

  // Email clicks
  emailClick: () => {
    trackConversion('email_click', {
      category: 'email_engagement',
      action: 'click_to_email'
    })
  },

  // Chat interactions
  chatStarted: () => {
    trackConversion('chat_started', {
      category: 'chat_engagement',
      action: 'open_chat'
    })
  },

  chatMessageSent: () => {
    trackConversion('chat_message', {
      category: 'chat_engagement',
      action: 'send_message'
    })
  },

  // Gallery interactions
  galleryView: (itemTitle: string) => {
    trackConversion('view_item', {
      category: 'gallery',
      item_name: itemTitle
    })
  },

  // Video interactions
  videoPlay: (videoName: string) => {
    trackConversion('video_start', {
      category: 'video',
      video_title: videoName
    })
  },

  // Downloads
  pdfDownload: (pdfName: string) => {
    trackConversion('file_download', {
      category: 'resource',
      file_name: pdfName,
      file_type: 'pdf'
    })
  },

  // Page views
  pageView: (pageName: string) => {
    trackConversion('page_view', {
      page_title: pageName,
      page_location: window.location.href
    })
  }
}

export default function ConversionTracking() {
  useEffect(() => {
    // Track initial page view
    conversionEvents.pageView(document.title)

    // Track exit intent
    const handleExitIntent = () => {
      trackConversion('exit_intent', {
        time_on_page: Math.floor(performance.now() / 1000)
      })
    }

    document.addEventListener('mouseleave', handleExitIntent, { once: true })

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent)
    }
  }, [])

  return null // This component doesn't render anything
}
