import { useGSAP } from '@gsap/react'
import leftLeaf from '../public/images/hero-left-leaf.png'
import rightLeaf from '../public/images/hero-right-leaf.png'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

function Hero() {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines'});

        heroSplit.chars.forEach(char => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        }).to('.right-leaf', {y: 200}, 0).to('.left-leaf', {y: -200}, 0)

    }, [])

    return (
        <section id="hero">
            <h1 className="title text-[200px]">MOJITO</h1>

            <img src={leftLeaf} alt="left-leaf" className="left-leaf w-56"></img>
            <img src={rightLeaf} alt="right-leaf" className="right-leaf w-56"></img>

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">
                            Sip the Spirit <br /> of Summer
                        </p>
                    </div>

                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
                        </p>
                        <a href="#cocktails">View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero