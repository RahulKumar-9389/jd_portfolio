import { PiMouseScroll } from "react-icons/pi";

const Hero = () => {
    return <>
        <div id="hero">

            <div className="hero_image">
                <img src="/hero.png" alt="jagdeepsingh" />
            </div>

            <div className="hero_text_container">
                <h1>Hi<span>👋</span>, I am Jagdeep Singh</h1>
                <h2>Full Stack Developer <span>With 6 Years</span> of Experience</h2>
            </div>

            <PiMouseScroll className="scroll_icon" />

        </div>
    </>
};


export default Hero;