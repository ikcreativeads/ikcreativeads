import Container from "./ui/Container";
import { STEPS } from "@/lib/data";

export default function HowWeWork() {
  return (
    <section id="jak-dzialamy" className="relative py-16 sm:py-20 border-t border-white/5">
      <Container className="relative">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Jak działamy
        </p>

        <div className="relative">
          {/* connecting line */}
          <div
            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="reveal flex flex-col items-center text-center"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/5">
                    <Icon className="h-5 w-5 text-gold-warm" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/50">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
