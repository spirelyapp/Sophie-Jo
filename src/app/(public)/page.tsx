import MdxLayout from "@/components/mdx-layout";
import OutroSong from "@/components/outro-song";

export default async function HomePage() {
  return (
    <MdxLayout>
      <div className="prose prose-zinc max-w-none">
        <h1>SOPHIE JO<span className="animate-caret-blink">,</span></h1>

        <p>
          Nvm, sorry to all the fans out there. Sophie Jo hates me now, not
          precisely sure why (prolly my fault) but it&apos;s all good. Cold
          world. Stay humble, stack money, and God bless!
        </p>

        <h4>OUTRO SONG</h4>
        <p>
          Yes, I know this song is popular, but I liked it back when it was
          niche.
        </p>
        <div className="not-prose">
          <OutroSong trackId="0myRViRgmQ3J8izICXEAVO" startAtSeconds={0} />
        </div>
      </div>
    </MdxLayout>
  );
}
