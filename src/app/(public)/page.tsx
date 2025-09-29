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
        
        <p>i've been building things for 1,095 days.</p>
        
        <h4>A FEW ACHIEVEMENTS:</h4>
        <ul>
          <li>founded a home service business and scaled to over $10k MRR</li>
          <li>created multiple apps in the iOS app store</li>
          <li>taught myself how to code at age 17</li>
          <li>brazilian jiu jitsu blue belt</li>
        </ul>
        
        <h4>SOME PROJECTS I'M WORKING ON:</h4>
        <ul>
          <li><a href="https://homeharmony.biz">homeharmony.biz</a> - flipping the script on the blue collar industry</li>
          <li><a href="https://hireu.online">hireu.online</a> - disrupting the hiring industry</li>
          <li><a href="https://promptrapp.online">promptrapp.online</a> - how to use ai</li>
        </ul>
        
        <p>i start lots of projects and finish very few. i don't believe in sunk cost. this list will probably be pretty different next time you see it.</p>
        
        <h4>TL;DR:</h4>
        <p>i turned my life around when i was 16.</p>
        <p>i realized that nobody is coming to save me and i started thinking of ways that i could become successful, and i started my own home service business.</p>
        <p>i love creating things, and i love turning ideas into reality.</p>
        
        <Snippet title="HOW I STARTED">
          <p>when i was 16, i started my first business.</p>
          <p>it was a home service business focused on bringing dignity and passion back into the service industry.</p>
          <p>i recently got into startups (early 2025) after watching this video.</p>
          <p>i remember telling my family when i was young, that i was going to become a millionaire.</p>
          <p>i always knew this is what i wanted to do.</p>
        </Snippet>
        
        <Snippet title="MY GOAL">
          <p>creating a product so seamless you never notice it. something like a software, coffee cup, street light, etc.</p>
          <p>something that provides value & is used so frequently it becomes a part of your life without questioning it.</p>
          <p><a href="https://en.wikipedia.org/wiki/Dieter_Rams">dieter rams</a> said "the best design is invisible". i always think about that.</p>
          <p>probably something in tech/science.</p>
        </Snippet>
        
        <Snippet title="MY MOTIVATIONS">
          <p>i would be lying if i said "i've never really been driven by money". i believe that money buys freedom and anyone would be objectively happier with financial freedom.</p>
          <p>i've never really been drawn to materialistic items, sure i might indulge in a nice watch or a nice car when the time is right, but that is not what fuels me to do the work that i do.</p>
          <p>for now, i do it for the love of the game. i am always chasing the best version of myself.</p>
          <p>i think the most valuable thing in life is a community that loves you.</p>
          <p>no mansion or private jet. i'd just like to keep it simple.</p>
        </Snippet>
        
        <Snippet title="WHERE I SEE MYSELF IN 3,501 DAYS">
          <p>in 10 years, running a company with my best friends.</p>
          <p>i like to always be moving forward and pivoting towards new and exciting things, so i'm not sure if i'd get the most value from sticking to 1 thing for 20 plus years. i enjoy building & selling.</p>
          <p>might not go to college, so i can't say for sure where i will end up.</p>
          <p>i've been working hard all my life. im sure i'll figure something out.</p>
        </Snippet>
        
        <h4>MY VENTURES:</h4>
        <ul>
          <li><a href="https://noahjohnson.mp4">noahjohnson.mp4</a> - building my personal brand</li>
          <li><a href="https://homeharmony.biz">homeharmony.biz</a> - home service business</li>
          <li><a href="https://promptrapp.online">promptrapp.online</a> - how to use ai</li>
          <li><a href="https://spirelyapp.com">spirelyapp.com</a> - become your best self</li>
          <li><a href="https://hireu.online">hireu.online</a> - hire top talent based off of real skills</li>
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
