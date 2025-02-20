import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimation from './ScrollAnimation';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects() {
  const [listProjects] = useState([
    {
      name: 'Printf',
      heading: 'Printf: A Comprehensive Assessment of Core C Programming Concepts in the First Trimester',
      mission: 'The Printf Project in the curriculum was designed to demonstrate the skills we developed during the first trimester. It focused on variables, strings, and memory allocation in C. The core of this project was showcasing our foundational understanding of C programming and memory management.',
      language: 'C',
      images: '/project1.PNG',
      githubLink: 'https://github.com/saima-riaz/holbertonschool-printf', // Add your GitHub link here
    },
    {
      name: 'SimpleShell',
      heading:'Command-Line Interpreter: A Low-Level Programming Challenge',
      mission: 'A grouped evaluation project in the first year to test our abilities, Project Simple Shell focused on low-level programming, system calls, and process management. We faced the challenge of building a command interpreter from scratch, reinforcing our understanding of system-level programming and problem-solving.',
      language: 'C',
      images: '/project2.PNG',
      githubLink: 'https://github.com/saima-riaz/holbertonschool-simple_shell', // Add your GitHub link here
    },
    {
      name: 'Airbnb Clone',
      heading: 'AirBNB Clone: Enhancing Front-End and Back-End Skills',
      mission: 'The AirBNB project involved cloning the website, refining our front-end and back-end skills. As a group, we gained a deeper understanding of full-stack development and improved our ability to build functional web applications.',
      language: 'Pyhton - Flask - MySQL - JavaScript - HTML- CSS',
      images: '/project3.PNG',
      githubLink: 'https://github.com/saima-riaz/holbertonschool-AirBnB_clone_v4', // Add your GitHub link here
    },
    {
      name: 'Portfolio',
      heading:'Log Analysis, vulnerability assessment',
      mission: 'This project focused on enhancing security through system log analysis and vulnerability assessments. The aim was to identify potential threats and provide detailed insights into system logs within the project’s infrastructure.',
      language: 'HTML - CSS - MySQL - Django - javaSscript',
      images: '/project4.PNG',
      githubLink: 'https://github.com/saima-riaz/holbertonschool-simple_shell', // Add your GitHub link here
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  ScrollAnimation(scrollTab, divs);

  return (
    <section className='projects' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        During my Full Stack studies, I worked on several impactful projects that strengthened my software development skills. Built collaboratively with my peers, these projects challenged us to solve complex problems and work in a team-driven environment. Each one reflects my growth as a developer and my ability to tackle real-world challenges.
      </div>
      <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                
                {/* Add a heading for the project description */}
                <h4>{value.heading}</h4>

                <div className="des">{value.des}</div>

                {/* GitHub link with icon */}
                <div className="github">
                  <a href={value.githubLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} color="white" size="4x" />
                  <span className='github-text'>Click here to see the project</span>
                  </a>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Mission</h4>
                    <div className="des">{value.mission}</div>
                  </div>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Languages</h4>
                    <div className="des">{value.language}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects;
