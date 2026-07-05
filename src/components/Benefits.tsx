import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import GlowOrb from "./ui/GlowOrb";
import { BENEFITS } from "@/lib/data";

export default function Benefits() {
  return (
    <section id="korzysci" className="relative section-padding">
      <GlowOrb className="left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2" color="gold" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Dlaczego video"
          title={
            <>
              Video, które{" "}
              <span className="text-gold-gradient">pracuje na Twój biznes</span>
            </>
          }
          description="Krótkie formy video to dziś najskuteczniejszy sposób na dotarcie do klientów. My zadbamy o to, by Twoja marka wykorzystała ten potencjał w pełni."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/5 bg-card-gradient p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-card-hover">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20"
                    aria-hidden="true"
                  />
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient shadow-gold-glow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-navy" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
