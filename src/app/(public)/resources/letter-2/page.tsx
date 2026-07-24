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

        <p>The other day I had a nightmare.</p>

        <p>
          In it, I saw a reality where we met at prom, said hi, and nothing
          more.
        </p>

        <p>A year passed, and then I saw you on a date with another guy.</p>

        <p>
          At first I was just so glad that in real life I decided to get to
          know you and I was also a little proud that I wasn&apos;t too scared
          to talk to you.
        </p>

        <p>
          But then I realized that this couldn&apos;t be farther from the
          truth. There was no fear involved at all.
        </p>

        <p>
          Getting to know you was the most natural thing that I have ever done
          and it would have been impossible for any other reality to come to
          pass.
        </p>

        <p>
          You are the most intriguing person that I have ever met and I
          can&apos;t wait to continue getting to know the same beautiful girl
          who I met on May 9th 2026.
        </p>

        <p>
          PS: I could write a thousand pages, and it would still not even come
          close to letting you know how I really feel.
        </p>

        <p>
          Noah {"<3"}
        </p>

        <h4>OUTRO SONG</h4>
        <div className="not-prose">
          <OutroSong trackId="65F5uV1eajI2OTm5KfCicq" startAtSeconds={0} />
        </div>
      </div>
    </MdxLayout>
  );
}
