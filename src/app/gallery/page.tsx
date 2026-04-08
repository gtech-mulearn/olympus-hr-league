import { readdir } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";

type GalleryImage = {
  alt: string;
  filename: string;
  src: string;
};

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments from Olympus presented in an editorial gallery inspired layout.",
};

function formatLabel(filename: string) {
  return filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function getGalleryImages(): Promise<GalleryImage[]> {
  const entries = await readdir(GALLERY_DIR, { withFileTypes: true });
  const collator = new Intl.Collator("en", {
    numeric: true,
    sensitivity: "base",
  });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => /\.(avif|jpe?g|png|webp)$/i.test(name))
    .sort((a, b) => collator.compare(a, b))
    .map((filename) => ({
      alt: formatLabel(filename),
      filename,
      src: `/gallery/${encodeURIComponent(filename)}`,
    }));
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <div className="bg-background">
      <section className="px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-[110rem]">
          <div className="mb-8 flex items-start justify-between gap-4 px-1 text-[0.58rem] uppercase tracking-[0.24em] text-foreground/50 sm:px-2">
            <span>Olympus archive</span>
            <span>{images.length} captures</span>
          </div>

          <div className="mb-10">
            <span className="text-primary font-heading text-5xl lg:text-9xl font-extrabold leading-[0.8] tracking-[-0.09em]">
              Moments
            </span>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {images.map((image, index) => (
              <div
                key={image.filename}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-[1.75rem] border border-border/50 bg-card shadow-[0_24px_60px_-40px_rgba(26,26,26,0.45)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                  priority={index < 8}
                  quality={75}
                  className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="flex items-center justify-between gap-4 border-t border-border/40 bg-background/92 px-3 py-2 text-[0.55rem] uppercase tracking-[0.24em] text-foreground/55 backdrop-blur-sm sm:px-4">
                  <span className="shrink-0">Olympus archives</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
