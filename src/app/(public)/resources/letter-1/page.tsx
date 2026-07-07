import MdxLayout from "@/components/mdx-layout";
import { Metadata } from "next";
import Image from "next/image";

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
          My entire life I have always worried that my standards are too high
          and that I would never be able to meet a girl who could possibly live
          up to them. I felt like I was looking for a Unicorn. When I talked to
          you for the first time on May 9th 2026 I quickly realized that
          Unicorns are real.
        </p>

        <p>
          When we spoke for the first time at THE Apple Valley prom, I found
          that in a room full of so many people and so many different
          personalities, you stand out like a peony among a vast garden of mere
          dandelions. I also realized that I enjoy talking to you more than
          just about everyone I have ever spoken to.
        </p>

        <p>
          I know we only met for the first time 2 months ago, and yet I feel
          like we have known each other much much longer. You&apos;re probably
          the only person in the world that can never fail to make me smile
          without saying a word.
        </p>

        <p>
          We have only hung out twice, but every minute I am with you, I have
          nothing else in the world on my mind. After every time I talk to
          you, you make me want to become a better person. You really are the
          best.
        </p>

        <ul>
          <li>1:11 pm Sun, May 9th &ndash; first time seeing you.</li>
          <li>30 minutes later &ndash; first interaction (Bracelet).</li>
          <li>
            6:15 &ndash; First time really talking to you (walking out of the
            parking garage, preceding me holding the door open for you on the
            way out).
          </li>
          <li>
            6:36 &ndash; I asked you what your name was (I saw you and knew I
            had to start talking to you as soon as possible, and asking your
            name was the only thing that came to mind.)
          </li>
          <li>8:07 &ndash; we danced.</li>
          <li>10:26 &ndash; our first photo together.</li>
          <li>11:55 &ndash; our first hug.</li>
          <li>May 10th &ndash; First text.</li>
          <li>May 11th &ndash; First call.</li>
          <li>
            May 14th &ndash; First time you sent me a flirty instagram reel.
          </li>
          <li>July 4th &ndash; 2nd hangout.</li>
          <li>
            Sometime soon &ndash; 3rd hangout, first date, first time giving
            you flowers, first kiss, maybe first time playing pickleball
            together.
          </li>
        </ul>

        <p>
          With love,
          <br />
          Noah
        </p>

        <figure className="not-prose my-8">
          <Image
            src="/photos/name-question.jpg"
            alt="sophie jo, right after being asked her name"
            width={1200}
            height={1600}
            className="h-auto w-full max-w-48 rounded-md"
            sizes="(min-width: 640px) 192px, 50vw"
          />
          <figcaption className="mt-2 max-w-48 font-mono text-xs text-gray-500">
            the face you made right after I asked you what your name was
          </figcaption>
        </figure>
      </div>
    </MdxLayout>
  );
}
