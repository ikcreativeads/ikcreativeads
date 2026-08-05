import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Polityka Prywatności | IK Creative Ads",
  description: "Polityka prywatności IK Creative Ads — informacje o przetwarzaniu danych osobowych.",
  robots: { index: false, follow: false },
};

export default function PolitykaPrywatnosci() {
  return (
    <main className="min-h-screen bg-dark-blue py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Polityka Prywatności
          </h1>
          <p className="mt-4 text-sm text-white/40">Ostatnia aktualizacja: sierpień 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/70">
            <section>
              <h2 className="mb-3 text-base font-semibold text-white">1. Administrator danych</h2>
              <p>
                Administratorem Twoich danych osobowych jest IK Creative Ads, prowadzony przez Karola Jaźwińskiego,
                z siedzibą w Dębicy. Kontakt: ikcreativeads@gmail.com, tel. +48 513 818 919.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">2. Jakie dane zbieramy</h2>
              <p>
                Zbieramy dane, które dobrowolnie podajesz w formularzu kontaktowym: imię i nazwisko,
                numer telefonu oraz treść wiadomości. Dane są wykorzystywane wyłącznie w celu odpowiedzi
                na Twoje zapytanie.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">3. Podstawa prawna</h2>
              <p>
                Przetwarzamy dane na podstawie Twojej zgody (art. 6 ust. 1 lit. a RODO), wyrażonej
                poprzez zaznaczenie checkboxa w formularzu kontaktowym.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">4. Okres przechowywania</h2>
              <p>
                Dane przechowujemy przez czas niezbędny do obsługi zapytania, nie dłużej niż 12 miesięcy
                od ostatniego kontaktu.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">5. Twoje prawa</h2>
              <p>
                Masz prawo do dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania
                oraz cofnięcia zgody w dowolnym momencie. W celu realizacji praw skontaktuj się z nami
                mailowo: ikcreativeads@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">6. Pliki cookie</h2>
              <p>
                Strona może używać technicznych plików cookie niezbędnych do jej działania.
                Nie używamy plików cookie do celów reklamowych ani śledzących.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">7. Kontakt</h2>
              <p>
                W sprawach związanych z ochroną danych osobowych możesz skontaktować się z nami
                pod adresem: ikcreativeads@gmail.com.
              </p>
            </section>
          </div>

          <div className="mt-12">
            <a
              href="/"
              className="text-sm text-[#D4A94B] hover:text-[#F6D98C] transition-colors"
            >
              ← Wróć na stronę główną
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
