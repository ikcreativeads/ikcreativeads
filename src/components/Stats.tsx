import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import GlowOrb from "./ui/GlowOrb";
import AnimatedCounter from "./ui/AnimatedCounter";
import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative section-padding overflow-hidden">
      <GlowOrb className="left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2" color="gold" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Liczby"
          title={
            <>
              Dlaczego{" "}
              <span className="text-gold-gradient">IK Creative Ads</span>
            </>
          }
          description="Efekty naszej pracy widać w liczbach — to one najlepiej pokazują, na co możesz liczyć przy współpracy z nami."
        />

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="reveal glass relative flex flex-col items-center rounded-3xl px-4 py-10 text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="font-display text-4xl font-extrabold text-gold-gradient sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm leading-snug text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
