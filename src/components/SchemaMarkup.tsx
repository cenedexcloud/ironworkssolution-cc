import Script from 'next/script'

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Iron Works Solution",
    "image": "https://ironworkssolution.net/logo.png",
    "@id": "https://ironworkssolution.net",
    "url": "https://ironworkssolution.net",
    "telephone": "(XXX) XXX-XXXX",
    "email": "info@ironworkssolution.net",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Iron Street",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ironworkssolution",
      "https://www.instagram.com/ironworkssolution",
      "https://www.youtube.com/ironworkssolution"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "150"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Iron Fencing & Metal Fabrication",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Iron Works Solution"
    },
    "areaServed": {
      "@type": "State",
      "name": "California"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Iron Works Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Iron Fencing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial & HOA Ironworks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Fabrication & Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gates & Automation"
          }
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
