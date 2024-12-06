import Logo from "./Logo";
import { FaGithub, FaLinkedin, FaStackOverflow, FaYoutube } from "react-icons/fa";

const Header = () => {


    return <>
        <header id="header">

            <nav className="nav_links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </nav>

            <div className="logo_container">
                <Logo />
            </div>

            <nav className="social_links">
                <a href="#"><FaLinkedin color="#0A66C2" className="linkdin icon" /></a>
                <a href="#"><FaGithub color="#181717" className="github icon" /></a>
                <a href="#"><FaStackOverflow color=" #F48024" className="stack icon" /></a>
                <a href="#"><FaYoutube color="#FF0000" className="youtube icon" /></a>
            </nav>

        </header>
    </>
};


export default Header;