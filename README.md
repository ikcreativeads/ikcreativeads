# IK Creative Ads — strona internetowa

Premium strona internetowa dla agencji tworzącej rolki reklamowe (Reels, TikTok, Shorts).

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (paleta marki: navy / charcoal blue / złoto)
- Framer Motion (animacje, parallax, licznik statystyk)
- Lucide Icons

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja wystartuje na `http://localhost:3000`.

## Build produkcyjny

```bash
npm run build
npm run start
```

## Struktura projektu

```
src/
  app/
    layout.tsx       — meta SEO, fonty, globalny layout
    page.tsx          — składa wszystkie sekcje strony
    globals.css       — kolory marki, glassmorphism, animacje
  components/
    Header.tsx        — sticky nawigacja (glass) + menu mobilne
    Hero.tsx          — sekcja hero z animowaną grafiką aparatu
    Benefits.tsx      — 3 kafelki korzyści
    HowWeWork.tsx     — 4 kroki procesu
    Services.tsx      — karty usług z hover effects
    Portfolio.tsx     — masonry grid realizacji
    Stats.tsx         — animowane liczniki statystyk
    Testimonials.tsx  — slider opinii klientów
    FAQ.tsx           — akordeon pytań
    CTA.tsx           — baner ze złotym gradientem
    Footer.tsx        — stopka z danymi kontaktowymi
    ui/               — wspólne komponenty (Container, SectionHeading, Logo, GlowOrb, AnimatedCounter)
  lib/
    data.ts           — treści sekcji (usługi, portfolio, opinie, FAQ, statystyki)
```

## Co warto podmienić przed publikacją

- `src/lib/data.ts` — przykładowe realizacje portfolio, opinie i statystyki na rzeczywiste dane.
- `src/components/Footer.tsx` i `CTA.tsx` — adres e-mail, telefon i linki social media.
- `src/app/layout.tsx` — domena w `metadataBase`/`siteUrl` na docelową.
- Miniatury portfolio (`PORTFOLIO_ITEMS[].thumbnail`) — podmień na realne kadry z produkcji wideo (najlepiej dodać też pliki wideo/GIF jako podgląd po hover).
- Logo — obecnie odtworzone w `ui/Logo.tsx` jako kod (krąg + „IK" + aparat/żarówka); można podmienić na właściwy plik graficzny przez `next/image`.
