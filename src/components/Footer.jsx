import { MdCall, MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {

    return <>
        <div className="footer_container">

            <div className="heading">
                <p>Get in Touch</p>
                <h1>Contact Me!</h1>
            </div>

            <div className="contact_container">

                <div>
                    <h1>Hire Me for Your Project</h1>
                    <p>Contact me in any convenient way to discuss the details.</p>
                    <hr />
                </div>

                <div className="info_container">

                    <div>
                        <span className="icon">
                            <MdOutlineEmail className="info_icon" />
                        </span>
                        <p>Write Me</p>
                        <h3>jagdeep@gmail.com</h3>
                    </div>

                    <div>
                        <span className="icon">
                            <MdCall className="info_icon" />
                        </span>
                        <p>Call Me</p>
                        <h3>(+91) 123456789</h3>
                    </div>

                    <div>
                        <span className="icon">
                            <MdOutlineLocationOn className="info_icon" />
                        </span>
                        <p>Meet Me</p>
                        <h3>Noida U.P, IN</h3>
                    </div>

                </div>


            </div>

            <div className="bottom">
                <p>© 2024 <span>jagdeepsingh.dev</span>. All Rights Reserved. </p>
            </div>


        </div>
    </>
};

export default Footer;