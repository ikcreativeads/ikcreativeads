"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Container from "./ui/Container";

const VIDEO_ITEMS = [
  {
    id: "video-1",
    youtubeId: "5wOorJQudec",
    title: "Rolka reklamowa #1",
    tag: "Social Media",
  },
  {
    id: "video-2",
    youtubeId: "wSRmpmSvSyQ",
    title: "Rolka reklamowa #2",
    tag: "Social Media",
  },
];

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section id="portfolio" className="relative section-padding border-t border-white/6 bg-[#0a1120]">
        <Container>
          <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-white">
              Nasze <span className="text-[#D4A94B]">realizacje</span>
            </h2>
            <p className="text-sm text-white/40 max-w-xs">
              Materiały nagrane i zmontowane przez IK Creative Ads.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
            {VIDEO_ITEMS.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 cursor-pointer bg-[#111d2e]"
                onClick={() => setActiveVideo(video.youtubeId)}
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1624]/90 via-[#0E1624]/20 to-transparent" />

                  {/* Play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4A94B] group-hover:scale-105 transition-transform duration-200">
                      <Play className="h-5 w-5 fill-[#0E1624] text-[#0E1624] ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A94B]/70">{video.tag}</span>
                    <p className="mt-1 text-sm font-bold text-white">{video.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveVideo(null)}
              className="fixed inset-0 z-50 bg-black/80"
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="relative w-full max-w-xs pointer-events-auto">
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
                <div
                  className="relative w-full overflow-hidden rounded-2xl border border-white/10"
                  style={{ aspectRatio: "9/16" }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
