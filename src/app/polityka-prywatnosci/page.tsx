import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności i ochrony danych osobowych IK Creative Ads.",
  robots: { index: false, follow: false },
};

export default function PolitykaPrywatnosci() {
  return (
    <main className="min-h-screen py-32 pb-24">
      <Container>
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-[#D4A94B]"
        >
          <ArrowLeft className="h-4 w-4" />
          Strona główna
        </Link>

        <div className="prose prose-invert prose-gold max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-white mb-2">Polityka prywatności</h1>
          <p className="text-white/40 text-sm mb-10">Wersja z dnia 1 października 2026 r.</p>

          <Section title="1. Administrator danych">
            <p>Administratorem Twoich danych osobowych jest <strong>IK Creative Ads</strong> z siedzibą w Dębicy (Podkarpacie), zwany dalej „Administratorem".</p>
            <p>Kontakt w sprawach ochrony danych: <a href="mailto:ikcreativeads@gmail.com">ikcreativeads@gmail.com</a>, tel. <a href="tel:+48513818919">+48 513 818 919</a>.</p>
          </Section>

          <Section title="2. Jakie dane zbieramy i w jakim celu">
            <p>Zbieramy wyłącznie dane niezbędne do świadczenia usług:</p>
            <ul>
              <li><strong>Dane kontaktowe</strong> (imię, e-mail, telefon, nazwa firmy) — w celu nawiązania i realizacji współpracy oraz komunikacji handlowej (podstawa: art. 6 ust. 1 lit. b i f RODO).</li>
              <li><strong>Dane do faktury</strong> (NIP, adres) — w celu wystawienia dokumentów rozliczeniowych i spełnienia obowiązków podatkowych (podstawa: art. 6 ust. 1 lit. c RODO).</li>
              <li><strong>Dane z formularza kontaktowego</strong> — w celu udzielenia odpowiedzi na zapytanie (podstawa: art. 6 ust. 1 lit. f RODO).</li>
              <li><strong>Dane analityczne</strong> (anonimowe statystyki odwiedzin) — w celu poprawy funkcjonowania strony (Vercel Analytics, bez plików cookie profilujących).</li>
            </ul>
          </Section>

          <Section title="3. Jak długo przechowujemy dane">
            <ul>
              <li>Dane klientów — przez czas trwania współpracy oraz 5 lat po jej zakończeniu (wymogi podatkowe).</li>
              <li>Dane z zapytań handlowych bez finalizacji umowy — do 12 miesięcy od kontaktu.</li>
              <li>Dane do celów marketingowych — do cofnięcia zgody.</li>
            </ul>
          </Section>

          <Section title="4. Komu przekazujemy dane">
            <p>Dane mogą być przekazywane wyłącznie zaufanym podmiotom przetwarzającym, z którymi Administrator zawarł stosowne umowy:</p>
            <ul>
              <li>dostawcy usług hostingowych i infrastruktury IT (Vercel Inc.),</li>
              <li>operatorzy płatności elektronicznych,</li>
              <li>biuro rachunkowe (jeśli dotyczy),</li>
              <li>Google LLC — w zakresie usług Google Workspace (poczta elektroniczna).</li>
            </ul>
            <p>Nie sprzedajemy ani nie udostępniamy danych osobowych podmiotom trzecim w celach marketingowych.</p>
          </Section>

          <Section title="5. Twoje prawa">
            <p>Na podstawie RODO przysługują Ci następujące prawa:</p>
            <ul>
              <li><strong>Prawo dostępu</strong> — możesz zażądać kopii swoich danych.</li>
              <li><strong>Prawo do sprostowania</strong> — możesz poprosić o korektę nieprawidłowych danych.</li>
              <li><strong>Prawo do usunięcia</strong> — możesz żądać usunięcia danych („prawo do bycia zapomnianym"), o ile nie stoją temu na przeszkodzie inne przepisy prawa.</li>
              <li><strong>Prawo do ograniczenia przetwarzania</strong> — możesz zażądać wstrzymania przetwarzania w określonych sytuacjach.</li>
              <li><strong>Prawo do przenoszenia danych</strong> — możesz otrzymać swoje dane w ustrukturyzowanym formacie.</li>
              <li><strong>Prawo sprzeciwu</strong> — możesz sprzeciwić się przetwarzaniu opartemu na prawnie uzasadnionym interesie.</li>
              <li><strong>Prawo do skargi</strong> — możesz wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl).</li>
            </ul>
            <p>Aby skorzystać z powyższych praw, skontaktuj się mailowo: <a href="mailto:ikcreativeads@gmail.com">ikcreativeads@gmail.com</a>. Odpowiemy w ciągu 30 dni.</p>
          </Section>

          <Section title="6. Pliki cookie">
            <p>Strona ikcreativeads.pl nie wykorzystuje plików cookie w celach śledzenia ani profilowania. Używamy jedynie technicznych mechanizmów niezbędnych do prawidłowego działania strony (sesja, bezpieczeństwo).</p>
            <p>Strona korzysta z platformy <strong>Vercel</strong> (hosting), która może gromadzić anonimowe dane techniczne (adres IP, przeglądarka) w celu zapewnienia bezpieczeństwa i wydajności. Więcej: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">polityka prywatności Vercel</a>.</p>
          </Section>

          <Section title="7. Bezpieczeństwo danych">
            <p>Stosujemy odpowiednie środki techniczne i organizacyjne chroniące dane przed nieuprawnionym dostępem, utratą lub zniszczeniem, w tym szyfrowanie połączeń (HTTPS/SSL), ograniczony dostęp do systemów oraz regularne kopie zapasowe.</p>
          </Section>

          <Section title="8. Zmiany polityki prywatności">
            <p>Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki. O istotnych zmianach poinformujemy poprzez aktualizację daty na początku dokumentu i — w stosownych przypadkach — drogą mailową.</p>
          </Section>
        </div>
      </Container>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-bold text-[#D4A94B] mb-3">{title}</h2>
      <div className="text-white/70 leading-relaxed space-y-3 [&_a]:text-[#D4A94B] [&_a:hover]:text-[#F6D98C] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-white">
        {children}
      </div>
    </div>
  );
}
