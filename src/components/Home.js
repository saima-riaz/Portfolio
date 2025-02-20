import React, { useRef } from 'react' 
import ScrollAnimation from './ScrollAnimation';


function Home() {
const scrollTab = useRef();
ScrollAnimation(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>SAIMA</span>
            </div>
            <div className="des">
                {/* 30 */}
                PASSIONATE ABOUT TECHNOLOGY AND INNOVATION, I’M ALWAYS GROWING MY SKILLS IN WEB DEVELOPMENT TO CREATE IMPACTFUL SOLUTIONS.
            </div>
            
            <a href="/SAIMA-RIAZ.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Resume
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Full Stack Developer</div>  
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home