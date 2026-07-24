import MdxLayout from "@/components/mdx-layout";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PHOTOS",
  description: "photos of me and sophie jo.",
};

const photos: { src: string; alt: string; title: string; date?: string }[] = [
  {
    src: "/photos/1.jpg",
    alt: "noah and sophie jo, 5/9/2026",
    title: "First meeting.",
    date: "May 9th 2026",
  },
  {
    src: "/photos/2.jpg",
    alt: "flowers that remind me of sophie jo",
    title: "Flowers.",
    date: "June 6th 2026",
  },
  {
    src: "/photos/name-question.jpg",
    alt: "sophie jo, right after being asked her name",
    title: "Immediately after I asked you what your name was.",
    date: "May 9th 2026",
  },
  {
    src: "/photos/3.jpg",
    alt: "sophie jo smiling",
    title: "Smile.",
    date: "June 21st 2026",
  },
  {
    src: "/photos/4.jpg",
    alt: "my first text to sophie jo",
    title: "My first text to you.",
    date: "May 10th 2026",
  },
  {
    src: "/photos/5.jpg",
    alt: "asking sophie jo to call",
    title: "First time asking you to call.",
    date: "May 11th 2026",
  },
  {
    src: "/photos/6.jpg",
    alt: "the first flirty instagram reel from sophie jo",
    title: "The first flirty Instagram reel you sent to me.",
    date: "May 14th 2026",
  },
];

export default function PhotosPage() {
  return (
    <MdxLayout>
      <div className="prose prose-zinc max-w-none">
        <h2>PHOTOS</h2>

        <div className="not-prose mt-8 flex flex-col gap-8">
          {photos.map((photo) => (
            <figure key={photo.src} className="m-0">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={2000}
                height={1500}
                className="h-auto w-full rounded-md"
                sizes="(min-width: 640px) 640px, 100vw"
              />
              <figcaption className="mt-2 font-mono text-xs text-gray-500">
                <span className="text-gray-800">{photo.title}</span>
                {photo.date ? ` ${photo.date}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </MdxLayout>
  );
}
