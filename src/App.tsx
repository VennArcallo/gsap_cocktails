import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col noisy">
        <Hero />
        <div className="h-[600px]"></div>
      </div>
    </div>
  )
}

export default App
