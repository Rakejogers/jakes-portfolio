"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const trophyDescription =
  "A floating two-times winner trophy representing Jake's two CatHacks first-place finishes";

export function HeroTrophy() {
  const modelRef = useRef<HTMLElement>(null);
  const [modelState, setModelState] = useState<"loading" | "ready" | "error">("loading");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(motionQuery.matches);

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => motionQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    let active = true;
    const model = modelRef.current;
    const handleLoad = () => setModelState("ready");
    const handleError = () => setModelState("error");

    import("@google/model-viewer")
      .then(() => {
        if (!active || !model) return;

        model.addEventListener("load", handleLoad);
        model.addEventListener("error", handleError);

        if ((model as HTMLElement & { loaded?: boolean }).loaded) {
          handleLoad();
        }
      })
      .catch(handleError);

    return () => {
      active = false;
      model?.removeEventListener("load", handleLoad);
      model?.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <figure
      aria-label={trophyDescription}
      className={`hero-trophy hero-trophy--${modelState}`}
      role="img"
    >
      <div className="hero-trophy__float">
        <Image
          alt=""
          aria-hidden="true"
          className="hero-trophy__poster"
          fill
          priority
          sizes="(max-width: 720px) 84vw, (max-width: 980px) 18rem, 34vw"
          src="/cathacks-2x-trophy-poster.webp"
        />
        <model-viewer
          ref={modelRef}
          alt={trophyDescription}
          aria-hidden="true"
          auto-rotate={!reduceMotion}
          camera-controls
          camera-orbit="0deg 90deg 106%"
          disable-pan
          disable-zoom
          environment-image="neutral"
          exposure="0.9"
          interaction-prompt="none"
          loading="eager"
          rotation-per-second="7deg"
          shadow-intensity="0"
          shadow-softness="1"
          src="/cathacks-2x-trophy-draco.glb"
          tone-mapping="commerce"
        />
      </div>
    </figure>
  );
}
