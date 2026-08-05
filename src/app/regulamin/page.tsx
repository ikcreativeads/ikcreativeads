import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Regulamin | IK Creative Ads",
  description: "Regulamin świadczenia usług IK Creative Ads.",
  robots: { index: false, follow: false },
};

export default function Regulamin() {
  return (
    <main className="min-h-screen bg-dark-blue py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Regulamin
          </h1>
          <p className="mt-4 text-sm text-white/40">Ostatnia aktualizacja: sierpień 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/70">
            <section>
              <h2 className="mb-3 text-base font-semibold text-white">1. Postanowienia ogólne</h2>
              <p>
                Niniejszy regulamin określa zasady współpracy z IK Creative Ads, prowadzonym przez
                Karola Jaźwińskiego. Kontakt: ikcreativeads@gmail.com, tel. +48 513 818 919.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">2. Zakres usług</h2>
              <p>
                IK Creative Ads świadczy usługi w zakresie produkcji materiałów video, rolek
                reklamowych na social media (Instagram Reels, TikTok, YouTube Shorts), fotografii
                biznesowej oraz prowadzenia kampanii reklamowych Meta Ads.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">3. Zamówienia i płatności</h2>
              <p>
                Każde zamówienie jest poprzedzone bezpłatną konsultacją i indywidualną wyceną.
                Realizacja usługi rozpoczyna się po zaakceptowaniu wyceny przez Klienta i wpłacie
                zaliczki w ustalonej wysokości. Szczegółowe warunki są każdorazowo uzgadniane
                indywidualnie.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">4. Realizacja i poprawki</h2>
              <p>
                Standardowy czas realizacji rolki reklamowej wynosi do 48h od sesji nagraniowej.
                Każde zlecenie obejmuje poprawki do skutku w zakresie ustalonym przy zamówieniu.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">5. Prawa autorskie</h2>
              <p>
                Po opłaceniu usługi Klient otrzymuje pełne prawa do korzystania z wyprodukowanych
                materiałów na wskazanych platformach. IK Creative Ads zastrzega prawo do
                publikacji zrealizowanych prac w portfolio, chyba że Klient wyrazi sprzeciw.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">6. Reklamacje</h2>
              <p>
                Reklamacje przyjmujemy mailowo na adres ikcreativeads@gmail.com w terminie 14 dni
                od daty dostarczenia materiałów. Rozpatrujemy je w ciągu 7 dni roboczych.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-base font-semibold text-white">7. Postanowienia końcowe</h2>
              <p>
                W sprawach nieuregulowanych niniejszym regulaminem stosuje się przepisy prawa
                polskiego. Wszelkie spory rozstrzygane będą przez sąd właściwy dla siedziby
                IK Creative Ads.
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
