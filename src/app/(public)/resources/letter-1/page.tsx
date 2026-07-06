import MdxLayout from "@/components/mdx-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LETTER 1",
  description: "letter 1 to sophie jo.",
};

export default function Letter1Page() {
  return (
    <MdxLayout>
      <div className="prose prose-zinc max-w-none">
        <h1>SOPHIE JO<span className="animate-caret-blink">,</span></h1>

        <p>
          you&apos;re probably the only person in the world that can never fail
          to make me smile without saying a word.
        </p>

        <p>
          We only met for the first time 2 months ago, and yet I feel like we
          have known each other forever.
        </p>
      </div>
    </MdxLayout>
  );
}
