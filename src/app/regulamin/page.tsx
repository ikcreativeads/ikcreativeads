import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Regulamin świadczenia usług przez IK Creative Ads.",
  robots: { index: false, follow: false },
};

export default function RegulaminsPage() {
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
          <h1 className="text-3xl font-extrabold text-white mb-2">Regulamin</h1>
          <p className="text-white/40 text-sm mb-10">Wersja z dnia 1 października 2026 r.</p>

          <Section title="§1. Postanowienia ogólne">
            <p>Niniejszy Regulamin określa zasady świadczenia usług marketingowych przez <strong>IK Creative Ads</strong> z siedzibą w Dębicy (Podkarpacie), zwany dalej „Usługodawcą".</p>
            <p>Dane kontaktowe: <a href="mailto:ikcreativeads@gmail.com">ikcreativeads@gmail.com</a>, tel. <a href="tel:+48513818919">+48 513 818 919</a>.</p>
            <p>Korzystanie z usług oznacza akceptację niniejszego Regulaminu.</p>
          </Section>

          <Section title="§2. Zakres usług">
            <p>Usługodawca świadczy usługi w zakresie:</p>
            <ul>
              <li>produkcji i montażu rolek reklamowych (Reels, TikTok, Shorts),</li>
              <li>prowadzenia profili w mediach społecznościowych,</li>
              <li>projektowania i wdrażania stron internetowych,</li>
              <li>prowadzenia kampanii reklamowych Meta Ads (Facebook, Instagram),</li>
              <li>fotografii produktowej i wizerunkowej.</li>
            </ul>
            <p>Szczegółowy zakres i warunki konkretnej usługi określa indywidualna umowa lub oferta zaakceptowana przez Klienta.</p>
          </Section>

          <Section title="§3. Zawarcie umowy">
            <p>Umowa dochodzi do skutku z chwilą:</p>
            <ul>
              <li>pisemnego (mailowego) potwierdzenia przyjęcia oferty przez Klienta, lub</li>
              <li>wpłaty zaliczki zgodnie z wystawioną fakturą pro-forma.</li>
            </ul>
            <p>Usługodawca zastrzega sobie prawo do odmowy realizacji usługi bez podania przyczyny.</p>
          </Section>

          <Section title="§4. Płatności">
            <p>Wynagrodzenie za usługi określone jest w indywidualnej ofercie lub cenniku dostępnym na stronie ikcreativeads.pl.</p>
            <p>Płatności realizowane są przelewem bankowym na podstawie faktury VAT lub w formie uzgodnionej z Klientem.</p>
            <p>W przypadku pakietów miesięcznych płatność należna jest z góry do 5. dnia każdego miesiąca. Brak płatności w terminie może skutkować wstrzymaniem realizacji usług.</p>
          </Section>

          <Section title="§5. Realizacja usług i terminy">
            <p>Terminy realizacji poszczególnych usług uzgadniane są indywidualnie i potwierdzane mailowo.</p>
            <p>Standardowy czas realizacji rolki reklamowej wynosi do 48 godzin od dnia sesji nagraniowej, chyba że strony uzgodniły inaczej.</p>
            <p>Klient zobowiązuje się dostarczyć niezbędne materiały (logo, zdjęcia, wytyczne) w uzgodnionym terminie. Opóźnienie ze strony Klienta może wydłużyć czas realizacji.</p>
          </Section>

          <Section title="§6. Poprawki i reklamacje">
            <p>W ramach każdego zlecenia Klientowi przysługują poprawki do skutku w zakresie uzgodnionym w ofercie.</p>
            <p>Reklamacje należy zgłaszać mailowo na adres ikcreativeads@gmail.com w ciągu 7 dni od odbioru materiału. Usługodawca rozpatruje reklamację w ciągu 14 dni roboczych.</p>
          </Section>

          <Section title="§7. Prawa autorskie">
            <p>Z chwilą uregulowania płatności Klient nabywa licencję niewyłączną na korzystanie z dostarczonych materiałów na polach eksploatacji: Internet (social media, strona WWW), materiały reklamowe.</p>
            <p>Usługodawca zastrzega sobie prawo do wykorzystania zrealizowanych materiałów w celach portfolio i promocji własnej działalności, chyba że Klient wyrazi sprzeciw na piśmie.</p>
            <p>Materiały źródłowe (pliki projektowe, surowe nagrania) pozostają własnością Usługodawcy, chyba że umowa stanowi inaczej.</p>
          </Section>

          <Section title="§8. Odpowiedzialność">
            <p>Usługodawca nie ponosi odpowiedzialności za efekty marketingowe (zasięgi, konwersje, sprzedaż) będące wynikiem korzystania z dostarczonych materiałów — są one uzależnione od czynników zewnętrznych niezależnych od Usługodawcy.</p>
            <p>Usługodawca nie odpowiada za czasowe przerwy w działaniu platform zewnętrznych (Meta, TikTok, Google).</p>
          </Section>

          <Section title="§9. Rozwiązanie umowy">
            <p>Każda ze stron może rozwiązać umowę z zachowaniem 30-dniowego okresu wypowiedzenia, składanego mailowo.</p>
            <p>W przypadku pakietów miesięcznych wypowiedzenie skutkuje rozwiązaniem umowy z końcem opłaconego okresu rozliczeniowego.</p>
          </Section>

          <Section title="§10. Postanowienia końcowe">
            <p>W sprawach nieuregulowanych niniejszym Regulaminem stosuje się przepisy Kodeksu cywilnego oraz innych powszechnie obowiązujących przepisów prawa polskiego.</p>
            <p>Wszelkie spory strony będą starały się rozwiązać polubownie. W razie braku porozumienia właściwy jest sąd powszechny miejsca siedziby Usługodawcy.</p>
            <p>Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O zmianach Klienci zostaną poinformowani mailowo z co najmniej 14-dniowym wyprzedzeniem.</p>
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
