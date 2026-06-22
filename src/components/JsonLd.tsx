// Strukturalne dane dla Google — rich results, FAQ accordion, Local Business
export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://ikcreativeads.pl/#business",
    "name": "IK Creative Ads",
    "alternateName": "IK Creative Ads Dębica",
    "description": "Agencja video premium z Dębicy. Tworzymy profesjonalne rolki reklamowe na Instagram Reels, TikTok i YouTube Shorts. Nagrania z drona, fotografia firmowa i pakiety miesięczne dla firm z całej Polski.",
    "url": "https://ikcreativeads.pl",
    "logo": "https://ikcreativeads.pl/logo-square.jpg",
    "image": "https://ikcreativeads.pl/logo-square.jpg",
    "telephone": "+48513818919",
    "email": "ikcreativeads@gmail.com",
    "priceRange": "$$",
    "currenciesAccepted": "PLN",
    "paymentAccepted": "Przelew bankowy, gotówka",
    "areaServed": [
      { "@type": "City", "name": "Dębica" },
      { "@type": "AdministrativeArea", "name": "Podkarpacie" },
      { "@type": "Country", "name": "Polska" },
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dębica",
      "addressRegion": "Podkarpackie",
      "addressCountry": "PL",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.0535,
      "longitude": 21.4083,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00",
      },
    ],
    "sameAs": [
      "https://instagram.com/ikcreativeads",
      "https://tiktok.com/@ikcreativeads",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi video i fotograficzne",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rolka reklamowa",
            "description": "Profesjonalna rolka reklamowa do 60 sekund — nagranie + montaż + napisy + muzyka. Format 9:16 pod Instagram Reels, TikTok i YouTube Shorts.",
          },
          "price": "200",
          "priceCurrency": "PLN",
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rolka reklamowa z dronem",
            "description": "Rolka reklamowa z ujęciami dronem 4K. Nagranie z powietrza i z ziemi, montaż, napisy, muzyka.",
          },
          "price": "250",
          "priceCurrency": "PLN",
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pakiet Starter",
            "description": "4 rolki reklamowe miesięcznie — nagranie, montaż, gotowe pliki do publikacji na FB, IG i TikTok.",
          },
          "price": "699",
          "priceCurrency": "PLN",
          "priceSpecification": {
            "@type": "RecurringCharge",
            "billingIncrement": 1,
            "billingDuration": "P1M",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pakiet Popularny",
            "description": "8 rolek reklamowych miesięcznie + 1 sesja zdjęciowa gratis. Priorytetowy termin realizacji.",
          },
          "price": "1199",
          "priceCurrency": "PLN",
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pakiet Premium",
            "description": "12 rolek + 2 sesje zdjęciowe miesięcznie + dron raz w miesiącu gratis. Scenariusze i pomysły na treści w cenie.",
          },
          "price": "1799",
          "priceCurrency": "PLN",
        },
      ],
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "15",
      "bestRating": "5",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ile kosztuje rolka reklamowa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rolka jednorazowa to koszt 200 zł (nagranie + montaż), a rolka z dronem 250 zł. Mamy też pakiety miesięczne: Starter (4 rolki) za 699 zł, Popularny (8 rolek) za 1199 zł i Premium (12 rolek + 2 sesje zdjęciowe) za 1799 zł.",
        },
      },
      {
        "@type": "Question",
        "name": "Ile kosztuje sesja zdjęciowa dla firmy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zdjęcia lokalu lub pracowników to 120 zł za sesję (do 20 zdjęć po obróbce). Zdjęcia produktów — 150 zł. Zdjęcia zewnętrzne firmy — 100 zł. Zdjęcia z drona — 100 zł. Retusz i obróbka są zawsze w cenie.",
        },
      },
      {
        "@type": "Question",
        "name": "Jak długo trwa realizacja rolki reklamowej?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gotowy materiał dostarczamy w ciągu 48 godzin od sesji nagraniowej. W pakietach miesięcznych ustalamy stały termin co tydzień.",
        },
      },
      {
        "@type": "Question",
        "name": "Czy nagrywacie na miejscu u klienta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, przyjeżdżamy do Twojej firmy — biura, lokalu, magazynu czy pleneru. Działamy na terenie Dębicy i całego Podkarpacia.",
        },
      },
      {
        "@type": "Question",
        "name": "Czy oferujecie nagrania dronem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, oferujemy nagrania i zdjęcia dronem 4K. Rolka z dronem to 250 zł, zdjęcia z drona — 100 zł. W pakiecie Premium dron jest wliczony raz w miesiącu gratis.",
        },
      },
      {
        "@type": "Question",
        "name": "Czy pomagacie w tworzeniu scenariusza do rolki?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak — w pakiecie Premium tworzymy pomysły i scenariusze treści. W pozostałych pakietach i realizacjach jednorazowych zawsze doradzamy jak najlepiej pokazać Twoją firmę.",
        },
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ikcreativeads.pl/#website",
    "url": "https://ikcreativeads.pl",
    "name": "IK Creative Ads",
    "description": "Agencja video premium — rolki reklamowe dla firm z Dębicy i całej Polski",
    "publisher": {
      "@id": "https://ikcreativeads.pl/#business",
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ikcreativeads.pl/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
