"use client";

import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration and ensure scroll to top
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";

    // Force scroll to top on page load
    window.scrollTo(0, 0);

    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="antialiased">
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </div>
  );
}
