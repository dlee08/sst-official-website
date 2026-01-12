export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Stuyvesant Summer Tutoring",
    "alternateName": "SST",
    "url": "https://stuyvesantsummertutoring.org",
    "logo": "https://stuyvesantsummertutoring.org/stuyvesant-logo-transparent.svg",
    "description": "Free K-9 ELA, Math & Science tutoring across NYC. Stuyvesant Summer Tutoring connects volunteer tutors with students at libraries in Manhattan, Queens, Brooklyn, and Staten Island.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "345 Chambers St",
      "addressLocality": "Manhattan",
      "addressRegion": "NY",
      "postalCode": "10282",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7169,
      "longitude": -74.0131
    },
    "sameAs": [
      "https://www.instagram.com/stuyvesantsummertutoring",
      "https://www.facebook.com/stuyvesantsummertutoring",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "225",
      "bestRating": "5"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "New York City"
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free tutoring services for K-9 students"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
