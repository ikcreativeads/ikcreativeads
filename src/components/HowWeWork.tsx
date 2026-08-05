import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { STEPS } from "@/lib/data";

export default function HowWeWork() {
  return (
    <section
      id="jak-dzialamy"
      className="relative section-padding bg-dark-blue/40"
    >
      <Container className="relative">
        <SectionHeading
          eyebrow="Proces współpracy"
          title={
            <>
              Jak <span className="text-gold-gradient">działamy</span>
            </>
          }
          description="Prosty, sprawdzony proces — od pierwszej rozmowy aż po wymierne wyniki w Twoich kanałach social media."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="reveal group relative flex flex-col items-center text-center lg:items-start lg:text-left"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl glass-strong shadow-gold-glow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-gold-glow">
                    <Icon className="h-8 w-8 text-gold-warm" strokeWidth={1.5} />
                    <span className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient font-display text-xs font-extrabold text-navy shadow-gold-glow-sm">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
