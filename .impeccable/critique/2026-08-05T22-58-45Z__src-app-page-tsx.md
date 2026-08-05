---
target: src/app/page.tsx
total_score: 21
p0_count: 1
p1_count: 2
timestamp: 2026-08-05T22-58-45Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Brak indykatora ładowania video, brak orientacji w długiej stronie, auto-scroll testimonials bez pauzy |
| 2 | Match System / Real World | 2 | Jargon agencyjny w modalach usług (ROAS, Spark Ads, employer branding) dla właścicieli zakładów fryzjerskich |
| 3 | User Control and Freedom | 2 | Testimonials auto-advance bez pauzy, X modala video poza kadrem (-top-12) na małych ekranach |
| 4 | Consistency and Standards | 3 | CTA mówi "Darmowa konsultacja", form mówi "Umów bezpłatną konsultację" — ten sam krok, dwa różne słowa |
| 5 | Error Prevention | 2 | Brak checkboxa RODO przy formularzu zbierającym numer telefonu; Polityka prywatności i Regulamin linkują do "#" |
| 6 | Recognition Rather Than Recall | 3 | Dobre — nawigacja zawsze dostępna. Słabe: mobile ukrywa CTA gdy header znika |
| 7 | Flexibility and Efficiency | 1 | Brak WhatsApp/click-to-call. Numer telefonu tylko w stopce. Polskie MŚP konwertują przez telefon, nie formularz |
| 8 | Aesthetic and Minimalist Design | 2 | 10 sekcji przed stopką, gradient text na każdym nagłówku, glow orbs wszędzie, Stats powtarza liczby z Hero |
| 9 | Error Recovery | 2 | "Odezwiemy się w ciągu 24 godzin" — za mgliste. Brak potwierdzenia e-mail, brak alternatywnego kroku |
| 10 | Help and Documentation | 2 | FAQ z prawdziwymi cenami jest w sekcji 9/10 — sceptyczny właściciel odpada zanim tam dotrze |
| **Total** | | **21/40** | **Acceptable — znaczące poprawki potrzebne** |

---

## Anti-Patterns Verdict

**LLM assessment**: Strona wygląda jak AI-generated template. Każda z 10 sekcji otwiera się identycznie: złoty eyebrow pill → nagłówek z `text-gold-gradient` spanem → szary subtext. SectionHeading component jest architektoniczną przyczyną — jego API wymusza tę uniformność. Dodatkowo: floating metric cards w hero (+180% zasięgu, 120 leadów / kampania) bez źródłowania; Stats section powtarza dosłownie te same liczby co hero; testimoniale to cztery generyczne polskie nazwiska z korporacyjnych ról (CEO firmy deweloperskiej, dyrektor marketingu) dla lokalnej agencji z Dębicy.

**Deterministic scan (exit code 2, 4 findings):**
- `gradient-text` — `src/app/globals.css:74` (`.text-gold-gradient` z `background-clip: text`) + użyty w każdym komponencie section heading
- `layout-transition` x3 — `CustomCursor.tsx:72,91` (width/height/margin), `ScrollProgress.tsx:27` (width)

ScrollProgress.tsx to false positive — animacja `width` jest funkcjonalnie wymagana dla paska postępu (brak ekwiwalentu transform). CustomCursor.tsx to prawdziwy finding (powinno być transform:scale).

**Manual scan extras:** eyebrow na każdej z 8+ sekcji (`text-xs font-semibold uppercase tracking-[0.2em]`), numbered markers `01-04` w HowWeWork, hero-metric template (3 statystyki), identyczne card grids (7 Services + 3 Benefits), glassmorphism jako domyślny styl kart (`.glass`/`.glass-strong`).

---

## Overall Impression

Portfolio działa — masz jeden lokalny dowód (Bunkier Barber — Dębica) z prawdziwym filmem i cennik z prawdziwymi cyframi, które budują zaufanie szybciej niż cokolwiek innego. To fundament. Problem: **cały ten fundament jest pochowany pod warstwą AI template booilerplate'u**, który wysyła sygnał "ta strona nie jest zrobiona z myślą o mnie" każdemu sceptycznemu właścicielowi z Podkarpacia. Jeden prawdziwy klient z nazwy i zdjęciem, video na górze zamiast na dole, WhatsApp button — trzy rzeczy które zmienią konwersję bardziej niż jakikolwiek redesign.

---

## What's Working

1. **Prawdziwy lokalny dowód** — "Bunkier Barber — Dębica" z embedem YouTube to jedyna rzecz na stronie, która robi co powinna. Lokalność + weryfikowalność + konkretna branża = zaufanie. To jedyna treść, którą sceptyczny przedsiębiorca zaakceptuje jako dowód.
2. **Transparentny cennik** — konkretne ceny (200 zł, 699 zł, 1199 zł), obliczone oszczędności, menu dodatków. Użytkownik może się samodzielnie zakwalifikować bez rozmowy sprzedażowej. Rzadkie i wartościowe.
3. **Stan formularza kontaktowego** — loading, success, error z fallback adresem email, walidacja pól, 24-godzinne zobowiązanie. Technicznie poprawny i kompletny.

---

## Priority Issues

**[P0] Testimoniale bez lokalnej wiarygodności**
- **Dlaczego**: "Dyrektor marketingu, sieć fitness klubów", "CEO, firma deweloperska" — właściciel zakładu fryzjerskiego z Dębicy czyta to i myśli "ta agencja nie jest dla mnie". Zero zdjęć, zero nazw firm, zero linków do Google Review. Stat "98% poleca" przy "15+ klientów" brzmi jak wymyślona liczba — 14,7 z 15 klientów.
- **Fix**: 2-3 prawdziwe cytaty z imieniem i nazwiskiem klienta, typem biznesu, opcjonalnie linkiem do Google. Jeden "Barber Jan, właściciel Bunkier Barber, Dębica" jest wart więcej niż cztery korporacyjne persony. Usuń stat 98%.
- **Command**: `/impeccable harden Testimonials`

**[P1] Portfolio za daleko — "proof desert" między Hero a dowodem**
- **Dlaczego**: Kolejność: Hero → Benefits → HowWeWork → Services → Portfolio. Sceptyczny właściciel, który potrzebuje zobaczyć prawdziwą pracę, musi przescrollować 3 pełne sekcje wyjaśnień. Duży odpływ w tej "pustyni wyjaśnień".
- **Fix**: Przenieś Portfolio na pozycję 2 (bezpośrednio po Hero). Nowa kolejność: Hero → Portfolio → Services → Pricing → Testimonials → FAQ → CTA. Benefits i HowWeWork skróć do kompaktowego paska wplecionego w inną sekcję.
- **Command**: `/impeccable layout strona główna — przenieś Portfolio na pozycję 2 zaraz po Hero`

**[P1] SectionHeading eyebrow na wszystkich 10 sekcjach = scroll blindness**
- **Dlaczego**: Po 3 sekcjach użytkownik przestaje czytać otwierające sekcje — wzorzec jest w 100% przewidywalny. Sekcje zlewają się. SectionHeading component jest architektonicznym korzeniem problemu — jego API wymusza uniformność.
- **Fix**: Usuń eyebrow z co najmniej 4 sekcji (Stats, Benefits, HowWeWork, FAQ). Zróżnicuj wejście każdej sekcji: Stats otwiera się od cyfr, HowWeWork od numbered step, Portfolio od thumbnailem video. Eyebrow tylko dla Hero, Services, CTA.
- **Command**: `/impeccable typeset — usuń eyebrow z Benefits/Stats/HowWeWork/FAQ, zdywersyfikuj wejścia sekcji`

**[P2] Brak WhatsApp/click-to-call — główny kanał konwersji polskich MŚP jest niewidoczny**
- **Dlaczego**: Właściciele małych firm (fryzjerzy, mechanicy, beauty) wolą WhatsApp lub telefon od formularzy. Numer +48 513 818 919 jest tylko w stopce. Brak floating WhatsApp button, brak click-to-call w hero.
- **Fix**: Floating WhatsApp button (prawy dolny róg, mobile) linkujący do `wa.me/48513818919` z prefill "Cześć, chciałbym zapytać o rolki reklamowe". Dodaj "Zadzwoń" z numerem jako trzecie CTA w hero na mobile.
- **Command**: `/impeccable harden CTA — dodaj WhatsApp floating button mobile + click-to-call w hero`

**[P2] Hero visual to logo w kółku — agencja video nie pokazuje video w hero**
- **Dlaczego**: Centralna grafika hero to statyczne logo. Dla firmy sprzedającej jakość produkcji video, brak video w hero jest sprzecznością. Floating cards (+180% zasięgu) to niezweryfikowane mikro-dane.
- **Fix**: Zastąp logo-w-kółku mockupem telefonu pokazującym real reel (muted autoplay 15-30s) lub statycznym kadrem z play button otwierającym najlepsze portfolio video.
- **Command**: `/impeccable craft hero — zastąp prawą kolumnę hero phone-frame mockupem z real reel`

**[P3] Brak checkboxa RODO i entry price zakopany w FAQ**
- **Dlaczego**: Zbieranie numeru telefonu bez zgody RODO to luka compliance w polskim prawie. Najważniejsza bariera cenowa ("200 zł za rolkę") jest pierwszą odpowiedzią w FAQ — najdalej od góry strony.
- **Fix**: Checkbox "Wyrażam zgodę na przetwarzanie danych osobowych" przy formularzu. Przenieś "od 200 zł" do hero jako trust badge przy CTA.
- **Command**: `/impeccable harden formularz kontaktowy — RODO checkbox + cena w hero`

---

## Accessibility Findings (z Assessment B)

- `Portfolio.tsx:72` — `div` z `onClick` bez `role="button"`, `tabIndex={0}`, `onKeyDown` — keyboard users nie mogą aktywować kart portfolio
- `text-white/50` na dark navy przy `text-xs` (12px) — szacowany kontrast ~3.5:1, nie spełnia WCAG AA (wymaga 4.5:1)
- `text-white/35` w `PortfolioPage.tsx:293` przy 11px — ~2.5:1, wyraźna porażka WCAG
- `text-white/40` w pustych stanach — ~2.8:1
- Testimonials auto-advance bez pauzy narusza WCAG 2.2.2

---

## Persona Red Flags

**Jordan (Confused First-Timer):**
- "Dowiedz się więcej →" na kartach Services ma opacity 60% (#D4A94B/60) — prawie niewidoczne. Jordan nie wie, że karty są klikalne.
- 7 kart Services o identycznym wyglądzie — Jordan nie wie która usługa jest główną ofertą.
- Sekcja z realnym dowodem (Portfolio) dopiero po 3 sekcjach wyjaśnień.

**Casey (Distracted Mobile User):**
- 7 zagnieżdżonych kart Services na mobile z 5 elementami każda = 35 punktów skupienia w jednej sekcji.
- Testimonials auto-advance co 7s bez pauzy — Casey wraca po przerwie na innym cytacie bez możliwości powrotu.
- Brak sticky/floating kontakt CTA na mobile — header auto-ukrywa się przy scrollu.

**Sławek (właściciel z Dębicy, sceptyczny wobec marketingu):**
- Wszystkie testimoniale z korporacyjnych ról — zero nawiązania do Dębicy, Podkarpacia, handlu.
- "Bunkier Barber — Dębica" (jedyny lokalny dowód) to 3. pozycja w sekcji 5/10.
- Polecany pakiet 1199 zł/mc przy przychodach zakładu 2000-4000 zł/mc = alarmująca proporcja.
- "98% klientów poleca" przy "15+ klientów" = 14,7 z 15 osób. Czyta jako wymyślone.
- Brak adresu fizycznego, NIP, Google Maps — brak możliwości weryfikacji legalności.

---

## Minor Observations

- `PORTFOLIO_ITEMS` array w `data.ts` (linie 234-283) zawiera 6 fałszywych wpisów z Unsplash i wymyślonymi metrykami, które nie są renderowane nigdzie — martwy kod który myli przyszłych deweloperów.
- Footer "Polityka prywatności" i "Regulamin" linkują do `#` — strona jest wymagalna prawnie jeśli zbiera dane osobowe.
- `CustomCursor.tsx` animuje `width`/`height` zamiast `transform:scale` — nieoptymalny performance.
- `.film-strip-bg` dekoracyjny pattern w hero ma tylko 32px wysokości przy 40% opacity — niewidoczny dla użytkowników szybko scrollujących.
- Marquee.tsx istnieje ale nie jest użyty — mógłby posłużyć do loga platform (Instagram, TikTok, YT, FB).

---

## Questions to Consider

1. Jeśli właściciel zakładu z Dębicy ląduje na tej stronie z reklamy TikTok o 20:00 na telefonie — ile scroll-heightów od góry jest jedyna informacja której potrzebuje, żeby zdecydować czy napisać?
2. Agencja video ma w hero logo w kółku — co zmieni się w pierwszym wrażeniu jeśli prawa kolumna pokaże 10 sekund waszej najlepszej pracy grającej bezgłośnie?
3. Każdy testimonial chwali agencję językiem korporacyjnego marketingu — kiedy ostatnio barber lub mechanik użył frazy "jakość komunikacji"?
