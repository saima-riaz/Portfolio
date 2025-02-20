import React, { useRef } from 'react';
import ScrollAnimation from './ScrollAnimation';

function AboutMe() {
    const divs = useRef([]);
    const scrollTab = useRef();
    ScrollAnimation(scrollTab, divs);

    return (
        <section className='about-me' ref={scrollTab}>
            <div className="content" ref={(el) => el && divs.current.push(el)}> {/* scroll function here */}
                <h2>About Me</h2>
                <p>
                    I am a dedicated Full Stack Developer with a passion for 
                    technology and innovation. My expertise includes front-end 
                    and back-end development, and I am always eager to learn new 
                    technologies to improve my skills and create impactful solutions.
                </p>
                <p>
                    My journey in web development has allowed me to work on 
                    various projects, from designing interactive user interfaces 
                    to developing efficient. I enjoy problem-solving and collaborating on projects that make a difference.
                </p>
            </div>
        </section>
    );
}

export default AboutMe;
