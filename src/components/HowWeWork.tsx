import Container from "./ui/Container";
import { STEPS } from "@/lib/data";

export default function HowWeWork() {
  return (
    <section id="jak-dzialamy" className="relative py-16 sm:py-20 border-t border-white/5">
      <Container className="relative">
        <p className="mb-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
          Jak działamy
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-5 h-px w-10 bg-[#D4A94B]/50" />
              <p className="text-sm font-semibold text-white">{step.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/45">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
