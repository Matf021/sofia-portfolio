
"use client";

import Image from "next/image";
import { useState } from "react";

type LightLaboratoryProps = {
  image: string;
  title: string;
};

const DEFAULT_INTENSITY = 70;

export default function LightLaboratory({
  image,
  title,
}: LightLaboratoryProps) {
  const [intensity, setIntensity] = useState(DEFAULT_INTENSITY);

  const normalized = intensity / 100;

  return (
    <section
      aria-labelledby="light-laboratory-title"
      className="relative overflow-hidden bg-[#130E0C] px-6 py-24 text-white md:px-12 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#D6AE65]">
              EXPERIENCIA INTERACTIVA / 01
            </p>

            <h2
              id="light-laboratory-title"
              className="text-5xl font-light tracking-tight md:text-7xl"
            >
              Laboratorio de luz<span className="text-[#D6AE65]">.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Una exploración visual de la luz y su relación
            con la geometría.
          </p>
        </div>

        {/* Interactive scene */}
        <div className="relative isolate overflow-hidden rounded-sm bg-[#090706]">
          <div className="relative aspect-[4/5] md:aspect-[16/9]">
            <Image
              src={image}
              alt={`Visualización de ${title}`}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain"
            />

            {/* Dimming layer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-black motion-safe:transition-opacity motion-safe:duration-500"
              style={{
                opacity: 0.78 * (1 - normalized),
              }}
            />

            {/* Decorative ambient illumination */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 motion-safe:transition-opacity motion-safe:duration-500"
              style={{
                opacity: normalized * 0.55,
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(245,145,45,0.18), transparent 70%)",
                mixBlendMode: "screen",
              }}
            />

            {/* Scene information */}
            <div className="pointer-events-none absolute left-5 top-5 md:left-8 md:top-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                {title}
              </p>
            </div>

            <div className="pointer-events-none absolute bottom-5 right-5 md:bottom-8 md:right-8">
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                Intensidad visual / {intensity}%
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <label
                htmlFor="light-intensity"
                className="text-sm font-medium"
              >
                Intensidad de luz
              </label>

              <output
                htmlFor="light-intensity"
                className="text-sm tabular-nums text-[#D6AE65]"
              >
                {intensity}%
              </output>
            </div>

            <input
              id="light-intensity"
              type="range"
              min="0"
              max="100"
              step="1"
              value={intensity}
              onChange={(event) =>
                setIntensity(Number(event.target.value))
              }
              className="light-slider w-full cursor-pointer"
              style={{
                background: `linear-gradient(
                  to right,
                  #D6AE65 ${intensity}%,
                  rgba(255,255,255,0.2) ${intensity}%
                )`,
              }}
            />

            <div className="mt-3 flex justify-between text-xs text-white/45">
              <span>Mínima</span>
              <span>Máxima</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIntensity(DEFAULT_INTENSITY)}
            className="w-fit border border-white/30 px-6 py-3 text-sm transition-colors hover:border-[#D6AE65] hover:text-[#D6AE65] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6AE65]"
          >
            Restablecer iluminación ↺
          </button>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-white/45">
          Visualización conceptual de intensidad luminosa.
          No representa una simulación fotométrica.
        </p>
      </div>
    </section>
  );
}
