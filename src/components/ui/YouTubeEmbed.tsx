"use client";

import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    YT: { Player: new (el: HTMLElement, opts: object) => any };
    onYouTubeIframeAPIReady: () => void;
    _ytCbs: Array<() => void>;
  }
}

function loadYTApi(cb: () => void) {
  if (typeof window === "undefined") return;
  if (window.YT?.Player) { cb(); return; }
  if (!window._ytCbs) window._ytCbs = [];
  window._ytCbs.push(cb);
  if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(s);
    window.onYouTubeIframeAPIReady = () => {
      window._ytCbs.forEach((f) => f());
      window._ytCbs = [];
    };
  }
}

export default function YouTubeEmbed({
  videoId,
  className,
}: {
  videoId: string;
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  const init = useCallback(() => {
    if (!divRef.current || playerRef.current) return;
    playerRef.current = new window.YT.Player(divRef.current, {
      videoId,
      playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
      events: {
        onReady: (e: any) => {
          e.target.setPlaybackQuality("hd1080");
          e.target.playVideo();
        },
      },
    });
  }, [videoId]);

  useEffect(() => {
    loadYTApi(init);
    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [init]);

  return <div ref={divRef} className={className} />;
}
