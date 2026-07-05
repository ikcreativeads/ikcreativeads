"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";

const ITEMS = [
  {
    title: "Więcej zasięgów",
    body: "Docieraj do nowych odbiorców dzięki skutecznym rolkom dopasowanym do algorytmów social media.",
  },
  {
    title: "Więcej klientów",
    body: "Zamieniaj wyświetlenia na realne zapytania i zwiększaj sprzedaż dzięki przemyślanym kreacjom video.",
  },
  {
    title: "Profesjonalny wizerunek",
    body: "Buduj markę, która wyróżnia się na tle konkurencji jakością i spójnością contentu.",
  },
];

export default function Benefits() {
  return (
    <section id="korzysci" className="relative section-padding border-t border-white/6">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24 items-start">

          {/* Left — sticky label */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A94B]/60 mb-5">Dlaczego video</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-white">
              Video, które pracuje na{" "}
              <span className="text-[#D4A94B]">Twój biznes</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/40 max-w-xs">
              Krótkie formy video to dziś najskuteczniejszy sposób na dotarcie do klientów lokalnych.
            </p>
          </div>

          {/* Right — numbered list */}
          <div className="divide-y divide-white/6">
            {ITEMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group py-9 flex items-start gap-8"
              >
                <span className="font-display text-[3rem] font-black leading-none text-white/8 group-hover:text-white/15 transition-colors select-none tabular-nums shrink-0 w-14 text-right">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/45">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
