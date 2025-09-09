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
        
        <p>i'm {calculateAge()}, from <a href="https://www.exploreminnesota.com/media/facts-figures">minnesota</a>.</p>
        
        <p>i've been building things for {calculateDays().toLocaleString()} days.</p>
        
        <h4>A FEW ACHIEVEMENTS:</h4>
        <ul>
          <li>yt channel with 200k subscribers and 160m views</li>
          <li>$50k/month <a href="https://web.archive.org/web/20230110214901/https://www.headfoams.pro/">ecom store</a> selling fake airpod maxes</li>
          <li>won the congressional app challenge at <a href="https://www.congressionalappchallenge.us/2018-mn3/">10</a></li>
          <li>hacked a $100m organization (rhymes with <a href="https://www.deca.org/">deca</a>)</li>
          <li>sold <a href="https://lira.study">an app</a> for below minimum wage</li>
        </ul>
        
        <h4>SOME PROJECTS I'M WORKING ON:</h4>
        <ul>
          <li><a href="https://cluely.com">cluely.com</a> - making videos</li>
          <li><a href="https://chopped.vc">chopped.vc</a> - investing in chopped founders</li>
          <li><a href="https://callwalker.net">callwalker.net</a> - college connection agent</li>
          <li><a href="https://ui.dris.one">ui.dris.one</a> - 2000s inspired component library</li>
        </ul>
        
        <p>i start lots of projects and finish very few. i don't believe in sunk cost. this list will probably be pretty different next time you see it.</p>
        
        <h4>TL;DR:</h4>
        <p>i started selling toys in 1st grade.</p>
        <p>i've had nearly every side hustle since. making clothes, selling snacks, designing logos, & editing videos are a few.</p>
        <p>i'm a fan of the process. i love turning basic ideas into something great.</p>
        
        <Snippet title="HOW I STARTED">
          <p>i taught myself to code summer of 6th grade.</p>
          <p>i "launched" my first app, lemonayd (<a href="https://www.lemonaid.com/">lemonaid</a> was taken) later that year.</p>
          <p>it was a fundraising app for schools. i became one of the youngest winners of the <a href="https://www.congressionalappchallenge.us/">congressional app challenge</a> from my submission.</p>
          <p>i recently got into startups (mid-2023) after watching <a href="https://www.youtube.com/watch?v=4VDZRR07Eqw">this video</a>.</p>
          <p>one of my earliest ambitions was to "invent" something. the idea of creating things that other people could use seemed pretty interesting.</p>
          <p>i always knew this is what i wanted to do.</p>
        </Snippet>
        
        <Snippet title="MY GOAL">
          <p>creating a product so seamless you never notice it. something like a coffee cup, chair, street light, etc.</p>
          <p>something that provides value & is used so frequently it becomes a part of your life without questioning it.</p>
          <p><a href="https://en.wikipedia.org/wiki/Dieter_Rams">dieter rams</a> said "the best design is invisible". i always think about that.</p>
          <p>probably something in tech/science.</p>
        </Snippet>
        
        <Snippet title="MY MOTIVATIONS">
          <p>i've never really been driven by money. i read this on a fortune cookie from panda express a few years back. something like "money is a means to an end, not the end itself".</p>
          <p>for now, i do it for the love of the game. i'm always trying to be the best i can in everything i do.</p>
          <p>i've been fortunate enough to never have to worry about food, money, housing, or education. so maybe this changes in the future. but i wasn't after fancy cars or nice watches like most people around my age.</p>
          <p>i think this mindset is becoming more common, but i'd like to get to a point where i can live without having to worry about money.</p>
          <p>no mansion or private jet. i'd just keep it simple.</p>
        </Snippet>
        
        <Snippet title={`WHERE I SEE MYSELF IN ${tenYears().toLocaleString()} DAYS`}>
          <p>in 10 years, running a company or in vc.</p>
          <p>i move around a lot, so not sure if i'd get the most value sticking to 1 thing for many years. i enjoy creating & selling.</p>
          <p>maybe not going to college, so can't say for sure where i end up.</p>
          <p>i've been hustling my whole life. im sure i'll figure something out.</p>
        </Snippet>
        
        <h4>MY PREVIOUS VENTURES:</h4>
        <ul>
          <li>(25) <a href="https://formscale.dev">formscale.dev</a> - open-source form backend</li>
          <li>(24) <a href="https://lira.study">lira.study</a> - ai study tool (acquired)</li>
          <li>(24) <a href="https://parkt.app">parkt.app</a> - parking marketplace app</li>
          <li>(22-) <a href="https://dris.llc">dris.llc</a> - marketing & brand dev</li>
          <li>(23-25) <a href="https://sparkhs.org">sparkhs.org</a> - hs business competition</li>
          <li>(18-19) <a href="https://app.thelemonayd.com">thelemonayd.com</a> - school fundraising app</li>
        </ul>
        
        <h4>SOME PROJECTS I'VE WORKED ON:</h4>
        <ul>
          <li>(25) <a href="https://instinct.so">instinct.so</a> - creative company</li>
          <li>(25) <a href="https://benarata.me">benarata.me</a> - site for ben</li>
          <li>(25) <a href="https://usestep.ai">usestep.ai</a> - ai simulation platform</li>
          <li>(24) <a href="https://quarter.nyc">quarter.nyc</a> - made the logo</li>
          <li>(24) <a href="https://collegerejections.com">collegerejections.com</a> - post college rejections</li>
          <li>(24) <a href="https://internetgradient.com">internetgradient.com</a> - multiplayer gradient</li>
          <li>(23) <a href="https://www.youtube.com/watch?v=RwtzAntnTRA">ai.sparkhs.org</a> - web-based ai code editor</li>
          <li>(23) <a href="https://nearcams.org">nearcams.org</a> - traffic cams in mn</li>
          <li>(17) <a href="https://thunderdynamics.biz">thunderdynamics.biz</a> - first "company" - sold speakers</li>
        </ul>
        
        <h4>DIRECTORY:</h4>
        <ul>
          <li><a href="/contact">contact</a></li>
          <li><a href="/resources">resources</a></li>
          <li><a href="/gallery">gallery</a></li>
          <li><a href="/radio">radio</a></li>
        </ul>
      </div>
    </MdxLayout>
  );
}
