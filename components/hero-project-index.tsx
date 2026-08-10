"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PROJECT_CYCLE_MS = 5000;

type HeroProjectIndexItem = {
  accolade?: string;
  description: string;
  href: string;
  image: {
    alt: string;
    src: string;
  };
  title: string;
};

export function HeroProjectIndex({ projects }: { projects: HeroProjectIndexItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || projects.length < 2) return;

    const cycleTimer = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length);
    }, PROJECT_CYCLE_MS);

    return () => window.clearTimeout(cycleTimer);
  }, [activeIndex, isPaused, projects.length]);

  return (
    <div className="hero-project-index">
      <div className="hero-project-index__header">
        <span>Selected projects</span>
        <span>01—{String(projects.length).padStart(2, "0")}</span>
      </div>

      <div className="hero-project-index__preview" aria-live="polite">
        {projects.map((project, index) => (
          <Image
            alt={index === activeIndex ? project.image.alt : ""}
            aria-hidden={index !== activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            fill
            key={project.title}
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
            sizes="(max-width: 720px) 88vw, (max-width: 980px) 18rem, 30vw"
            src={project.image.src}
          />
        ))}
        <div className="hero-project-index__caption">
          <span>{projects[activeIndex].accolade ?? "Selected work"}</span>
          <p>{projects[activeIndex].description}</p>
        </div>
      </div>

      <div
        className="hero-project-index__list"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
        }}
        onPointerLeave={() => setIsPaused(false)}
      >
        {projects.map((project, index) => (
          <a
            aria-current={index === activeIndex ? "true" : undefined}
            className={index === activeIndex ? "is-active" : ""}
            href={project.href}
            key={project.title}
            onFocus={() => {
              setIsPaused(true);
              setActiveIndex(index);
            }}
            onPointerEnter={() => {
              setIsPaused(true);
              setActiveIndex(index);
            }}
          >
            <span className="hero-project-index__number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong>{project.title}</strong>
            <span aria-hidden="true" className="hero-project-index__arrow">
              ↘
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
