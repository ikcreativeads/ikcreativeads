"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, TrendingUp, ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import YouTubeEmbed from "./ui/YouTubeEmbed";

type VideoItem = {
  id: string;
  type: "youtube";
  videoId: string;
  title: string;
  industry: string;
  result: string;
};

const VIDEO_ITEMS: VideoItem[] = [
  {
    id: "video-1",
    type: "youtube",
    videoId: "5wOorJQudec",
    title: "Rolka Paznokcie",
    industry: "Paznokcie",
    result: "Realizacja IK Creative Ads",
  },
  {
    id: "video-2",
    type: "youtube",
    videoId: "wSRmpmSvSyQ",
    title: "Rolka Mechanik",
    industry: "Mechanik",
    result: "Realizacja IK Creative Ads",
  },
  {
    id: "video-3",
    type: "youtube",
    videoId: "xMOYd-LQYSU",
    title: "Bunkier Barber — Dębica",
    industry: "Barber",
    result: "Realizacja IK Creative Ads",
  },
];

export default function Portfolio() {
  const [activeEmbed, setActiveEmbed] = useState<string | null>(null);

  const handleCardClick = (item: VideoItem) => {
    setActiveEmbed(item.videoId);
  };

  return (
    <>
      <section id="portfolio" className="relative section-padding bg-dark-blue/40">
        <Container className="relative">
          <SectionHeading
            eyebrow="Portfolio"
            title={
              <>
                Realizacje, które{" "}
                <span className="text-gold-gradient">mówią same za siebie</span>
              </>
            }
            description="Zobacz przykładowe projekty zrealizowane dla naszych klientów z różnych branż."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {VIDEO_ITEMS.map((video, index) => (
              <div
                key={video.id}
                className="reveal group relative overflow-hidden rounded-3xl border border-white/5 bg-charcoal-blue/30 cursor-pointer"
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => handleCardClick(video)}
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1624] via-[#0e1624]/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#D4A94B] to-[#F6D98C] shadow-[0_0_30px_rgba(212,169,75,0.5)] group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 fill-[#0e1624] text-[#0e1624] ml-1" />
                    </div>
                  </div>

                  {/* Info overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="mb-2 inline-block rounded-full border border-[#D4A94B]/30 bg-[#0e1624]/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#E0B95C] backdrop-blur-sm">
                      {video.industry}
                    </span>
                    <h3 className="font-bold text-white text-base">{video.title}</h3>
                    <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#F6D98C]">
                      <TrendingUp className="h-4 w-4" />
                      {video.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Zobacz więcej */}
          <div className="mt-12 text-center">
            <a
              href="/portfolio"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#D4A94B]/30 bg-[#D4A94B]/8 px-8 py-4 text-sm font-semibold text-[#D4A94B] transition-all duration-300 hover:border-[#D4A94B]/60 hover:bg-[#D4A94B]/15 hover:shadow-[0_0_24px_rgba(212,169,75,0.2)]"
            >
              Zobacz wszystkie realizacje
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </Container>
      </section>

      {/* Video Modal */}
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
                  className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:text-[#D4A94B] transition-colors z-10"
                >
                  <X size={18} />
                </button>
                <div
                  className="relative w-full overflow-hidden rounded-2xl border border-[#D4A94B]/20 shadow-[0_0_60px_rgba(212,169,75,0.2)]"
                  style={{ aspectRatio: "9/16" }}
                >
                  <YouTubeEmbed
                    videoId={activeEmbed!}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="mt-3 text-center text-[11px] text-white/35">
                  ⚙️ Dla najlepszej jakości kliknij ikonę ustawień w odtwarzaczu i wybierz <span className="text-white/55">1080p</span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
