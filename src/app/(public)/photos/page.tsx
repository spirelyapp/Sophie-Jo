import MdxLayout from "@/components/mdx-layout";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PHOTOS",
  description: "photos of me and sophie jo.",
};

const photos = [
  {
    src: "/photos/1.jpg",
    alt: "noah and sophie jo, 5/9/2026",
    title: "First meeting.",
    date: "5/9/2026",
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
                <span className="text-gray-800">{photo.title}</span> {photo.date}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </MdxLayout>
  );
}
