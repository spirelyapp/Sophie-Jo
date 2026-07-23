import MdxLayout from "@/components/mdx-layout";
import OutroSong from "@/components/outro-song";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LETTER 2",
  description: "letter 2 to sophie jo.",
};

export default function Letter2Page() {
  return (
    <MdxLayout>
      <div className="prose prose-zinc max-w-none">
        <h1>SOPHIE JO<span className="animate-caret-blink">,</span></h1>

        <p>
          Nvm, sorry to all the fans out there. Sophie Jo hates me now. Cold
          world. Stay humble, stack money, and God bless!
        </p>

        <h4>OUTRO SONG</h4>
        <div className="not-prose">
          <OutroSong trackId="2uJ6iDuyoWXtMa0KvebF4C" startAtSeconds={0} />
        </div>
      </div>
    </MdxLayout>
  );
}
