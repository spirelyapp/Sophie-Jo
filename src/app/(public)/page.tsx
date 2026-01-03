import ComponentContainer from "@/components/component-container";
import { Badge } from "@/components/dris/badge";
import { Button } from "@/components/dris/button";
import MdxLayout from "@/components/mdx-layout";
import { Snippet } from "@/components/snippet";
import { calculateAge, calculateDays, tenYears } from "@/lib/utils";

export default async function HomePage() {
  return (
    <MdxLayout>
      <div className="prose prose-zinc max-w-none">
        <h1>HEY, I'M NOAH<span className="animate-caret-blink">.</span></h1>
        
        <p>i'm 18, from minnesota.</p>
        
        <p>I will be worth $52 Million in 4,745 days.</p>
        
        <h4>A FEW ACHIEVEMENTS:</h4>
        <ul>
          <li>founded a home service business and scaled to over $10k MRR</li>
          <li>coded multiple computer and iphone applications</li>
          <li>started a podcast with my good friend Ben</li>
          <li>brazilian jiu jitsu blue belt</li>
        </ul>
        
        <h4>SOME PROJECTS I'M WORKING ON:</h4>
        <ul>
          <li><a href="https://homeharmony.biz">homeharmony.biz</a> - flipping the script on the blue collar industry</li>
          <li><a href="https://open.spotify.com/show/69fQMWbS0cqAaWcjKRqKar?si=883e851593624570">The Winners Effect</a> - Sharing my ideas through my podcast</li>
          <li><a href="https://promptrapp.online">promptrapp.online</a> - how to use ai</li>
          <li><a href="#">Birds</a> - Jordan Belfort meets rock climbing</li>
          <li><a href="https://chipspbclub.com">CJ's Pickleball Club</a> - local pickleball tournament</li>
        </ul>
        
        <p>I'm always starting new projects, and I work to achieve a balance between committing long enough to execute well and knowing when to walk away without falling into sunk cost thinking.</p>
        
        <h4>TL;DR:</h4>
        <p>At 16, I made a fundamental shift in how I approached my life after realizing that no one was coming to save me. That mindset led me to start my own home service business and created a lasting passion for building and bringing ideas to life.</p>
        
        <Snippet title="HOW I STARTED">
          <p>when i was 16, I realized that traditional education is not for me.</p>
          <p>this naturally lead me to starting my first business</p>
          <p>it was a home service business focused on bringing dignity and passion back into the service industry.</p>
          <p>starting Home Harmony has helped me learn more than I have ever learned in the public education system.</p>
        </Snippet>
        
        <Snippet title="MY ENDGAME">
          <ul>
            <li>a wonderful relationship with my wife and children</li>
            <li>a beautiful home paid off in full</li>
            <li>a great circle of friends and family that I trust</li>
            <li>working every day on something that I am passionate about, which also helps other peoples lives</li>
          </ul>
        </Snippet>
        
        <Snippet title="MY RULES">
          <ul>
            <li>Follow God's plan above my own.</li>
            <li>Live in the moment.</li>
            <li>Never work with someone for a day if I couldn't work with them for life.</li>
            <li>Read every day. No exceptions.</li>
            <li>Honesty is the best policy, always.</li>
            <li>Value my time at $500 per hour.</li>
            <li>Always follow my passion.</li>
            <li>Act in love, never in hate. You cannot fight fire with fire.</li>
            <li>Sunk cost is a complete fallacy, decisions are made on future value, not past effort.</li>
            <li>If it matters to me, I go after it.</li>
          </ul>
        </Snippet>
        
        <Snippet title="WHERE I SEE MYSELF IN 10 YEARS">
          <p>in 10 years, running a company with my best friends.</p>
          <p>i like to always be moving forward and pivoting towards new and exciting things, so i'm not sure if i'd get the most value from sticking to 1 thing for 20 plus years. i enjoy building & selling.</p>
          <p>will not be going to college, so i can't say for sure where i will end up.</p>
          <p>i've been working hard all my life. im sure i'll figure something out.</p>
        </Snippet>
        
        <h4>MY VENTURES:</h4>
        <ul>
          <li><a href="https://noahjohnson.mp4">noahjohnson.mp4</a> - building my personal brand</li>
          <li><a href="https://homeharmony.biz">homeharmony.biz</a> - home service business</li>
          <li><a href="https://promptrapp.online">promptrapp.online</a> - how to use ai</li>
          <li><a href="https://spirelyapp.com">spirelyapp.com</a> - become your best self</li>
          <li><a href="https://hireu.online">hireu.online</a> - hire top talent based off of real skills</li>
          <li><a href="https://open.spotify.com/show/69fQMWbS0cqAaWcjKRqKar?si=433976173b2240ba">The Winners Effect</a> - Sharing my ideas through my podcast</li>
        </ul>
        
        <h4>SOME PROJECTS I'VE WORKED ON:</h4>
        <ul>
          <li><a href="https://blackstonehs.com">blackstonehs.com</a> - home service business</li>
          <li><a href="https://chipspbclub.com">chipspbclub.com</a> - pickleball club in mn</li>
          <li><a href="https://cratr.app">cratr.app</a> - dating app</li>
          <li><a href="https://surely.ai">surely.ai</a> - failed ai assistant</li>
          <li>and many more</li>
        </ul>
        
        <h4>DIRECTORY:</h4>
        <ul>
          <li><a href="/contact">contact</a></li>
          <li><a href="/resources">resources</a></li>
        </ul>
      </div>
    </MdxLayout>
  );
}
