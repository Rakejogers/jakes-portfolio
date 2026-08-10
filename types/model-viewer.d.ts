import type {
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";

type ModelViewerAttributes = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  alt?: string;
  "auto-rotate"?: boolean;
  "camera-controls"?: boolean;
  "camera-orbit"?: string;
  "disable-pan"?: boolean;
  "disable-zoom"?: boolean;
  "environment-image"?: string;
  exposure?: string;
  "interaction-prompt"?: "auto" | "none";
  loading?: "auto" | "eager" | "lazy";
  poster?: string;
  "rotation-per-second"?: string;
  "shadow-intensity"?: string;
  "shadow-softness"?: string;
  src: string;
  "tone-mapping"?: "auto" | "commerce" | "neutral" | "agx";
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerAttributes;
    }
  }
}
