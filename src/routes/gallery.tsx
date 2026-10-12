import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { TokyoLayout } from "@/components/tokyo-layout";
import { Button } from "@/components/ui/button";
import { heritageSites } from "@/lib/heritage";
import { tokyoMeta } from "@/lib/tokyo-meta";
export const Route = createFileRoute("/gallery")({
  head: () =>
    tokyoMeta(
      "Tokyo in pictures",
      "A photographic journey through Tokyo’s heritage: historic temples, red torii gates, imperial landmarks and Japanese gardens.",
    ),
  component: Gallery,
});
function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {
    if (selected === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight")
        setSelected((i) => (i === null ? null : (i + 1) % heritageSites.length));
      if (e.key === "ArrowLeft")
        setSelected((i) =>
          i === null ? null : (i + heritageSites.length - 1) % heritageSites.length,
        );
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", key);
    };
  }, [selected]);
  const site = selected === null ? null : heritageSites[selected];
  return (
    <TokyoLayout>
      <div className="site-container">
        <div className="page-intro">
          <div className="section-kicker">A DIFFERENT PERSPECTIVE</div>
          <h1>Tokyo, through the lens</h1>
          <p>
            Vermilion gates. Golden details. Still waters. A collection of moments from the city’s
            most remarkable heritage sites.
          </p>
        </div>
        <div className="gallery-grid pb-16">
          {heritageSites.map((s, i) => (
            <Button
              variant="ghost"
              className="gallery-tile"
              key={s.slug}
              onClick={() => setSelected(i)}
              aria-label={`View photograph of ${s.name}`}
            >
              <img src={s.image} alt={s.name} loading="lazy" width={960} height={640} />
              <span className="gallery-caption">
                <strong>{s.name}</strong>
                <span>{s.district}</span>
              </span>
            </Button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground pb-8">
          Heritage photographs sourced from Wikimedia Commons. Home cover: an illustrative image of
          Sensō-ji.
        </p>
      </div>
      {site && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={site.name}
          onClick={() => setSelected(null)}
        >
          <Button
            variant="glass"
            size="icon"
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close photograph"
            autoFocus
          >
            <X />
          </Button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={site.image} alt={site.name} />
            <figcaption className="flex items-center justify-between gap-4">
              <span>
                {site.name} · {site.district}
              </span>
              <div className="flex gap-2">
                <Button
                  variant="glass"
                  size="icon"
                  aria-label="Previous photograph"
                  onClick={() =>
                    setSelected((i) =>
                      i === null ? null : (i + heritageSites.length - 1) % heritageSites.length,
                    )
                  }
                >
                  <ArrowLeft />
                </Button>
                <Button
                  variant="glass"
                  size="icon"
                  aria-label="Next photograph"
                  onClick={() =>
                    setSelected((i) => (i === null ? null : (i + 1) % heritageSites.length))
                  }
                >
                  <ArrowRight />
                </Button>
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </TokyoLayout>
  );
}
