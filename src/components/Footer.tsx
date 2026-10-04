import { Mail, Phone, MapPin } from "lucide-react";
import Container from "./ui/Container";
import Logo from "./ui/Logo";
import { InstagramIcon, TikTokIcon } from "./ui/SocialIcons";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-dark-blue/60">
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Tworzymy rolki reklamowe i materiały video dla firm, które chcą
              zwiększać zasięgi, zdobywać nowych klientów i budować
              rozpoznawalną markę w social media.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  Icon: InstagramIcon,
                  label: "Instagram",
                  href: "https://www.instagram.com/ikcreativeads/",
                },
                {
                  Icon: TikTokIcon,
                  label: "TikTok",
                  href: "https://www.tiktok.com/@ikcreativeads?is_from_webapp=1&sender_device=pc",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-gold/40 hover:text-gold-warm"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Nawigacja
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-gold-warm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Usługi
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                "Rolki reklamowe",
                "Reels Instagram",
                "TikTok Ads",
                "Video dla firm",
                "Montaż video",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#uslugi"
                    className="text-sm text-white/55 transition-colors hover:text-gold-warm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:ikcreativeads@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/55 transition-colors hover:text-gold-warm"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-warm" />
                  ikcreativeads@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+48513818919"
                  className="flex items-start gap-3 text-sm text-white/55 transition-colors hover:text-gold-warm"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-warm" />
                  +48 513 818 919
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-warm" />
                Polska — pracujemy zdalnie i na miejscu u klienta
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {year} IK Creative Ads. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <a href="/polityka-prywatnosci" className="transition-colors hover:text-gold-warm">
              Polityka prywatności
            </a>
            <a href="/regulamin" className="transition-colors hover:text-gold-warm">
              Regulamin
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
