import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="flex-center h-[100vh]">
        Tailwind Works!
    </div>
  )
}

export default App
