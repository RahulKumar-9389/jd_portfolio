import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {

    return <>
        <div className="experience_container">


            <div className="heading">
                <p>My Work</p>
                <h1>Experience</h1>
            </div>


            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#139ae1', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #139ae1' }}
                    date="Dec 2023 - Feb 2024"
                    iconStyle={{ background: '#139ae1', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title title">Full Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle location">Noida, India</h4>
                    <p className='role'>
                        Worked as a Full Stack Developer at CTE International, contributing to various projects and collaborating with cross-functional teams.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#139ae1', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #139ae1' }}
                    date="Aug 2021 - Aug 2023"
                    iconStyle={{ background: '#139ae1', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title title">PHP Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle location">Noida, India</h4>
                    <p className='role'>
                        Worked as a Full Stack Developer at CTE International, contributing to various projects and collaborating with cross-functional teams.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#139ae1', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #139ae1' }}
                    date="March 2020 - Aug 2021"
                    iconStyle={{ background: '#139ae1', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title title">Mern Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle location">Noida, India</h4>
                    <p className='role'>
                        As a team lead, I led MERN stack development, integrating PHP expertise seamlessly. Directed dynamic web app creation, achieved complex project deliveries, flawless API integrations, and fostered cohesive team synergy.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#139ae1', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #139ae1' }}
                    date="Oct 2017 - March 2020"
                    iconStyle={{ background: '#139ae1', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title title">PHP Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle location">Noida, India</h4>
                    <p className='role'>
                        As a team lead, I led MERN stack development, integrating PHP expertise seamlessly. Directed dynamic web app creation, achieved complex project deliveries, flawless API integrations, and fostered cohesive team synergy.
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>

        </div>
    </>
};


export default Experience;