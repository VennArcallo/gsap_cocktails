import { navLinks } from "../data/NavLinks"
import logo from '../data/images/image 13.png';
import fontLogo from '../data/images/Velvet Pour.png';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function NavBar() {

    useGSAP(() =>{
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        })

        navTween.fromTo('nav',
            {
                backgroundColor: 'transparent'
            }, 
            {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backdropFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut' 
            }
        )
    })

    return (
        <nav className="rounded-md w-375 h-18 flex items-center bg-transparent">
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img className="w-8 h-8" src={logo}></img>
                    <img src={fontLogo}></img>
                </a>

                <ul>
                    {
                        navLinks.map((link) => (<li key={link.id}><a className="text-sm" href={`${link.id}`}>{link.title}</a></li>))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
