import { Quote, Star } from "lucide-react";
import Container from "./ui/Container";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="opinie" className="relative section-padding">
      <Container className="relative">
        <div className="mb-14 text-center">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Co mówią{" "}
            <span className="text-[#D4A94B]">nasi klienci</span>
          </h2>
          <p className="mt-4 text-base text-white/60 sm:text-lg">
            Firmy z Podkarpacia, które zaufały IK Creative Ads.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="reveal relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#162235]/60 p-8"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote
                className="mb-5 h-8 w-8 text-gold/20"
                aria-hidden="true"
              />

              <p className="flex-1 text-sm leading-relaxed text-white/75 sm:text-base">
                &bdquo;{t.content}&rdquo;
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="font-display text-sm font-bold text-white">{t.name}</p>
                  <p className="mt-0.5 text-xs text-[#D4A94B]/80">{t.role}</p>
                </div>
                <div className="flex gap-0.5" aria-label={`Ocena: ${t.rating} na 5`}>
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-gold-warm text-gold-warm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
