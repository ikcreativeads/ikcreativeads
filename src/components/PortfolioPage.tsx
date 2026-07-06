"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, TrendingUp, ArrowLeft, VideoOff } from "lucide-react";
import Container from "./ui/Container";

/* ─── Kategorie ─── */
const CATEGORIES = [
  { id: "wszystkie",   label: "Wszystkie" },
  { id: "barber",      label: "Barber" },
  { id: "beauty",      label: "Beauty" },
  { id: "paznokcie",   label: "Paznokcie" },
  { id: "medycyna",    label: "Med. estetyczna" },
  { id: "stomatologia",label: "Stomatologia" },
  { id: "fitness",     label: "Fitness" },
  { id: "restauracja", label: "Restauracja" },
  { id: "eventy",      label: "Eventy" },
  { id: "detailing",   label: "Detailing" },
  { id: "mechanik",    label: "Mechanik" },
  { id: "fotograf",    label: "Fotograf" },
  { id: "hotel",       label: "Hotel" },
  { id: "jubiler",     label: "Jubiler" },
  { id: "wnetrza",     label: "Wnętrza" },
  { id: "szkola",      label: "Szkoła jazdy" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

/* ─── Typy elementów ─── */
type Industry = Exclude<CategoryId, "wszystkie">;

type YoutubeItem = {
  id: string;
  type: "youtube";
  videoId: string;
  title: string;
  industry: Industry;
  client?: string;
  result: string;
};

type VideoItem = {
  id: string;
  type: "video";
  src: string;
  poster: string;
  title: string;
  industry: Industry;
  client?: string;
  result: string;
};

type PortfolioItem = YoutubeItem | VideoItem;

/* ─── Dane portfolio — dodawaj tu kolejne realizacje ─── */
const ALL_ITEMS: PortfolioItem[] = [
  {
    id: "bunkier-barber",
    type: "video",
    src: "/bunkier-barber.mp4",
    poster: "/bunkier-thumb.webp",
    title: "Bunkier Barber — Dębica",
    industry: "barber",
    client: "@bunkierbarber",
    result: "94 polubienia · Instagram",
  },
  {
    id: "rolka-1",
    type: "youtube",
    videoId: "5wOorJQudec",
    title: "Rolka reklamowa #1",
    industry: "beauty",
    result: "Realizacja IK Creative Ads",
  },
  {
    id: "rolka-2",
    type: "youtube",
    videoId: "wSRmpmSvSyQ",
    title: "Rolka reklamowa #2",
    industry: "mechanik",
    result: "Realizacja IK Creative Ads",
  },
];

/* ─── Typ embeda w modalu ─── */
type ActiveEmbed =
  | { kind: "iframe"; src: string }
  | { kind: "video"; src: string; poster: string };

/* ─── Etykiety branż ─── */
const INDUSTRY_LABELS: Record<Industry, string> = {
  barber:       "Barber",
  beauty:       "Beauty",
  paznokcie:    "Paznokcie",
  medycyna:     "Med. estetyczna",
  stomatologia: "Stomatologia",
  fitness:      "Fitness",
  restauracja:  "Restauracja",
  eventy:       "Eventy",
  detailing:    "Detailing",
  mechanik:     "Mechanik",
  fotograf:     "Fotograf",
  hotel:        "Hotel",
  jubiler:      "Jubiler",
  wnetrza:      "Wnętrza",
  szkola:       "Szkoła jazdy",
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryId>("wszystkie");
  const [activeEmbed, setActiveEmbed] = useState<ActiveEmbed | null>(null);

  const filtered =
    activeFilter === "wszystkie"
      ? ALL_ITEMS
      : ALL_ITEMS.filter((item) => item.industry === activeFilter);

  const openEmbed = (item: PortfolioItem) => {
    if (item.type === "youtube") {
      setActiveEmbed({
        kind: "iframe",
        src: `https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`,
      });
    } else {
      setActiveEmbed({ kind: "video", src: item.src, poster: item.poster });
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        {/* Tło glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#D4A94B]/8 blur-[120px]" />
          <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-[#4B6ED4]/6 blur-[100px]" />
        </div>

        <Container className="relative">
          <a
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-[#D4A94B]"
          >
            <ArrowLeft className="h-4 w-4" />
            Strona główna
          </a>

          <div className="anim-fade-up">
            <span className="mb-4 inline-block rounded-full border border-[#D4A94B]/30 bg-[#D4A94B]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#D4A94B]">
              Nasze realizacje
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl mt-3">
              Portfolio{" "}
              <span className="text-gold-gradient">video</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/55 leading-relaxed">
              Realizacje dla firm z różnych branż — barbershopy, salony beauty, mechanicy i detailery. Każda rolka dopasowana do charakteru marki.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Filtry ── */}
      <section className="sticky top-20 z-30 border-b border-white/6 bg-[#0e1624]/90 backdrop-blur-xl">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const count =
                cat.id === "wszystkie"
                  ? ALL_ITEMS.length
                  : ALL_ITEMS.filter((i) => i.industry === cat.id).length;
              const isActive = activeFilter === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] text-[#0e1624] shadow-[0_0_20px_rgba(212,169,75,0.35)]"
                      : "border border-white/10 text-white/60 hover:border-[#D4A94B]/40 hover:text-white"
                  }`}
                >
                  {cat.label}
                  {count > 0 && (
                    <span
                      className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                        isActive ? "bg-[#0e1624]/20 text-[#0e1624]" : "bg-white/10 text-white/50"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Grid ── */}
      <section className="section-padding">
        <Container>
          {filtered.length === 0 ? (
            /* Stan pusty */
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-28 text-center"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <VideoOff className="h-8 w-8 text-white/30" />
              </div>
              <h3 className="text-xl font-bold text-white/70">
                Realizacje w przygotowaniu
              </h3>
              <p className="mt-2 text-sm text-white/40">
                Wkrótce pojawią się tutaj nowe materiały z tej branży.
              </p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-charcoal-blue/30"
                    onClick={() => openEmbed(item)}
                  >
                    <div className="relative aspect-[9/16] w-full overflow-hidden">
                      {/* Thumbnail */}
                      {item.type === "youtube" ? (
                        <img
                          src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;
                          }}
                        />
                      ) : (
                        <img
                          src={item.poster}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1624] via-[#0e1624]/25 to-transparent" />

                      {/* Play */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] shadow-[0_0_30px_rgba(212,169,75,0.5)] transition-transform duration-300 group-hover:scale-110">
                          <Play className="ml-1 h-6 w-6 fill-[#0e1624] text-[#0e1624]" />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <span className="mb-2 inline-block rounded-full border border-[#D4A94B]/30 bg-[#0e1624]/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#E0B95C] backdrop-blur-sm">
                          {INDUSTRY_LABELS[item.industry]}
                        </span>
                        <h3 className="font-bold text-white text-base leading-snug">
                          {item.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#F6D98C]">
                          <TrendingUp className="h-4 w-4 shrink-0" />
                          {item.result}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </Container>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {activeEmbed && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveEmbed(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="relative w-full max-w-sm pointer-events-auto">
                <button
                  onClick={() => setActiveEmbed(null)}
                  className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:text-[#D4A94B] z-10"
                >
                  <X size={18} />
                </button>
                <div
                  className="relative w-full overflow-hidden rounded-2xl border border-[#D4A94B]/20 shadow-[0_0_60px_rgba(212,169,75,0.2)]"
                  style={{ aspectRatio: "9/16" }}
                >
                  {activeEmbed.kind === "video" ? (
                    <video
                      src={activeEmbed.src}
                      poster={activeEmbed.poster}
                      autoPlay
                      muted
                      controls
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <iframe
                      src={activeEmbed.src}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
