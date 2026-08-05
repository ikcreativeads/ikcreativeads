import {
  TrendingUp,
  Users,
  Sparkles,
  MessageSquareText,
  FileText,
  Video,
  Rocket,
  Clapperboard,
  Building2,
  Scissors,
  Megaphone,
  Globe,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";
import { InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcons";

export const NAV_LINKS = [
  { label: "Usługi", href: "/#uslugi" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Strony WWW", href: "/strony-internetowe" },
  { label: "Cennik", href: "/cennik" },
  { label: "Opinie", href: "/#opinie" },
  { label: "FAQ", href: "/#faq" },
];

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BENEFITS: Benefit[] = [
  {
    icon: TrendingUp,
    title: "Więcej zasięgów",
    description:
      "Docieraj do nowych odbiorców dzięki skutecznym rolkom dopasowanym do algorytmów social media.",
  },
  {
    icon: Users,
    title: "Więcej klientów",
    description:
      "Zamieniaj wyświetlenia na realne zapytania i zwiększaj sprzedaż dzięki przemyślanym kreacjom video.",
  },
  {
    icon: Sparkles,
    title: "Profesjonalny wizerunek",
    description:
      "Buduj markę, która wyróżnia się na tle konkurencji jakością i spójnością contentu.",
  },
];

export interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Konsultacja",
    description:
      "Poznajemy Twoją markę, cele i grupę docelową, by zaplanować skuteczną strategię video.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Scenariusz",
    description:
      "Tworzymy koncepcję i scenariusz rolek dopasowany do Twojej oferty i platformy.",
  },
  {
    number: "03",
    icon: Video,
    title: "Nagranie",
    description:
      "Realizujemy profesjonalną sesję zdjęciową na miejscu lub w studiu, z pełnym wsparciem produkcyjnym.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Publikacja i wyniki",
    description:
      "Montujemy, optymalizujemy pod social media i analizujemy wyniki kampanii.",
  },
];

export interface ServiceItem {
  icon: LucideIcon | ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  details: {
    tagline: string;
    bullets: string[];
    cta: string;
  };
}

export const SERVICES: ServiceItem[] = [
  {
    icon: Clapperboard,
    title: "Rolki reklamowe",
    description:
      "Krótkie, dynamiczne formy video zaprojektowane, by zatrzymać uwagę i przekuć ją w sprzedaż.",
    details: {
      tagline: "Rolki, które sprzedają od pierwszej sekundy",
      bullets: [
        "Format 9:16 zoptymalizowany pod każdą platformę",
        "Hook przyciągający uwagę w ciągu 3 sekund",
        "Profesjonalna muzyka i napisy zgodne z trendami",
        "Montaż dynamiczny — kolor, efekty i przejścia premium",
        "Gotowe do publikacji na FB, IG, TikTok i YouTube",
      ],
      cta: "Zamów rolki reklamowe",
    },
  },
  {
    icon: InstagramIcon,
    title: "Reels Instagram",
    description:
      "Materiały dopasowane do formatu i algorytmu Instagrama, budujące zasięg organiczny i płatny.",
    details: {
      tagline: "Algorytm Instagrama nagrodzi Twoje Reels",
      bullets: [
        "Scenariusze pisane pod trendy Instagrama",
        "Optymalny czas trwania 15–30 sekund",
        "Grafiki i napisy zgodne z identyfikacją marki",
        "Strategia hashtagów zwiększająca zasięg organiczny",
        "Wersje pod reklamy płatne (Meta Ads)",
      ],
      cta: "Zacznij budować zasięg",
    },
  },
  {
    icon: TikTokIcon,
    title: "TikTok Ads",
    description:
      "Kreacje natywne dla TikToka — autentyczne, angażujące i skuteczne w kampaniach płatnych.",
    details: {
      tagline: "Reklamy, które wyglądają jak organic content",
      bullets: [
        "Styl nagrań dopasowany do kultury TikToka",
        "Formaty: TopView, In-Feed Ads, Spark Ads",
        "A/B testy kreacji dla najlepszego ROAS",
        "Hook i CTA pisane pod platformę TikTok",
        "Analiza wyników i optymalizacja kampanii",
      ],
      cta: "Uruchom kampanię TikTok",
    },
  },
  {
    icon: Building2,
    title: "Video dla firm",
    description:
      "Profesjonalne materiały korporacyjne, prezentujące zespół, produkty i wartości marki.",
    details: {
      tagline: "Pokaż firmę od jej najlepszej strony",
      bullets: [
        "Filmy wizerunkowe i employer branding",
        "Prezentacje produktów i usług",
        "Materiały na stronę www i LinkedIn",
        "Nagrania z wydarzeń i targów branżowych",
        "Wywiady z ekspertami i liderami firmy",
      ],
      cta: "Zamów video firmowe",
    },
  },
  {
    icon: Scissors,
    title: "Montaż video",
    description:
      "Postprodukcja na najwyższym poziomie — kolor, dźwięk, napisy i efekty dopasowane do marki.",
    details: {
      tagline: "Twoje nagrania → gotowy materiał premium",
      bullets: [
        "Color grading i korekcja kolorów",
        "Napisy animowane i grafiki motion",
        "Korekta dźwięku i dobór muzyki",
        "Efekty specjalne i przejścia premium",
        "Eksport w formatach pod każdą platformę",
      ],
      cta: "Wyślij materiał do montażu",
    },
  },
  {
    icon: Megaphone,
    title: "Content marketing",
    description:
      "Spójna strategia contentowa, która buduje rozpoznawalność i lojalność klientów w czasie.",
    details: {
      tagline: "Strategia, która pracuje na markę miesiącami",
      bullets: [
        "Audyt obecnych kanałów social media",
        "Kalendarz publikacji na 30/60/90 dni",
        "Pakiety rolek — 4, 8 lub 12 materiałów miesięcznie",
        "Analiza konkurencji i trendów branżowych",
        "Raportowanie wyników co miesiąc",
      ],
      cta: "Umów strategię contentową",
    },
  },
  {
    icon: Globe,
    title: "Strony internetowe",
    description:
      "Projektujemy i budujemy strony od zera — responsywne, szybkie i zoptymalizowane pod Google.",
    details: {
      tagline: "Strona, która sprzedaje przez całą dobę",
      bullets: [
        "Landing page od 699 zł, strona firmowa od 1299 zł",
        "Projekt graficzny dopasowany do Twojej marki",
        "Responsywna na telefon, tablet i komputer",
        "SEO, SSL i szybkość ładowania w standardzie",
        "Panel do samodzielnej edycji treści",
      ],
      cta: "Zobacz ofertę stron WWW",
    },
  },
];

export interface PortfolioItem {
  id: string;
  title: string;
  industry: string;
  result: string;
  thumbnail: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "fitness-club",
    title: "Kampania video dla klubu fitness",
    industry: "Fitness & Wellness",
    result: "+180% wyświetleń w 30 dni",
    thumbnail:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "restauracja",
    title: "Seria rolek dla restauracji premium",
    industry: "Gastronomia",
    result: "+65 nowych rezerwacji / mies.",
    thumbnail:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "kosmetyki",
    title: "Promocja linii kosmetyków naturalnych",
    industry: "Beauty & Cosmetics",
    result: "+220% zasięgu organicznego",
    thumbnail:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "nieruchomosci",
    title: "Prezentacje inwestycji deweloperskich",
    industry: "Nieruchomości",
    result: "120 leadów z jednej kampanii",
    thumbnail:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ecommerce",
    title: "Rolki produktowe dla sklepu online",
    industry: "E-commerce",
    result: "+38% konwersji ze Stories",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "salon-urody",
    title: "Budowanie marki osobistej salonu urody",
    industry: "Beauty Salon",
    result: "+4 200 nowych obserwujących",
    thumbnail:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop",
  },
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  { value: 30, suffix: "+", label: "wykonanych materiałów video" },
  { value: 15, suffix: "+", label: "zadowolonych klientów" },
  { value: 500, suffix: "K+", label: "wyświetleń wygenerowanych dla klientów" },
  { value: 98, suffix: "%", label: "klientów poleca naszą współpracę" },
];

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Magdalena Kowalska",
    role: "Właścicielka studia kosmetycznego",
    content:
      "Współpraca z IK Creative Ads to najlepsza inwestycja marketingowa, jaką podjęłam w tym roku. Rolki, które dla nas nagrali, realnie zwiększyły liczbę zapytań o zabiegi.",
    rating: 5,
  },
  {
    name: "Tomasz Nowak",
    role: "Manager sieci restauracji",
    content:
      "Profesjonalizm na każdym etapie — od scenariusza po montaż. Klienci sami pytają, gdzie widzieli nasze video. Zdecydowanie polecam każdej firmie z branży gastronomicznej.",
    rating: 5,
  },
  {
    name: "Anna Wiśniewska",
    role: "Dyrektor marketingu, sieć fitness klubów",
    content:
      "Zespół IK Creative Ads rozumie social media lepiej niż niejedna agencja. Wyniki kampanii przeszły nasze oczekiwania, a sam proces współpracy był bardzo sprawny.",
    rating: 5,
  },
  {
    name: "Piotr Zieliński",
    role: "CEO, firma deweloperska",
    content:
      "Materiały video podniosły jakość naszej komunikacji o klasę wyżej. Otrzymaliśmy konkretne leady jeszcze w pierwszym tygodniu kampanii.",
    rating: 5,
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Ile kosztuje rolka reklamowa?",
    answer:
      "Rolka jednorazowa to koszt 200 zł (nagranie + montaż), a rolka z dronem 250 zł. Jeśli zależy Ci na regularnym contencie, mamy pakiety miesięczne: Widoczność (4 rolki) za 699 zł, Wzrost (8 rolek) za 1199 zł i Partner (12 rolek + 2 sesje zdjęciowe) za 1799 zł. Pełny cennik znajdziesz na stronie /cennik.",
  },
  {
    question: "Ile kosztuje sesja zdjęciowa?",
    answer:
      "Zdjęcia lokalu lub pracowników to 120 zł za sesję (do 20 zdjęć po obróbce). Zdjęcia produktów — 150 zł. Zdjęcia zewnętrzne firmy — 100 zł. Zdjęcia z drona — 100 zł. Retusz i obróbka są zawsze w cenie.",
  },
  {
    question: "Jak długo trwa realizacja?",
    answer:
      "Gotowy materiał dostarczamy w ciągu 48 godzin od sesji nagraniowej. W pakietach miesięcznych ustalamy stały termin co tydzień, dzięki czemu masz pewność regularnego contentu.",
  },
  {
    question: "Czy nagrywacie na miejscu?",
    answer:
      "Tak, przyjeżdżamy do Twojej firmy — biura, lokalu, magazynu czy pleneru. Działamy na terenie całej Polski.",
  },
  {
    question: "Czy robicie też strony internetowe?",
    answer:
      "Tak! Projektujemy i budujemy strony od zera — landing page od 699 zł, strona firmowa od 1299 zł, sklep internetowy od 2499 zł. Każda strona jest responsywna, szybka i zoptymalizowana pod Google. Szczegóły znajdziesz w zakładce Strony WWW.",
  },
  {
    question: "Jak długo trwa zrobienie strony internetowej?",
    answer:
      "Landing page robimy do 7 dni roboczych, stronę firmową do 14 dni, sklep internetowy do 21 dni. Przed startem pokazujemy projekt graficzny do akceptacji — kodujemy dopiero po Twoim ok.",
  },
];
