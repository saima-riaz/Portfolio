import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon
import { FaGithub } from 'react-icons/fa';// Import github icon


function Contacts() {
  const [listContacts] = useState([
    {
      title: "GitHub",
      value: (<a
        href="https://github.com/saima-riaz"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <FaGithub size={30} color="#0A66C2" />
      </a>),
    },
    {
      title: "Email",
      value: "saimariaz1422@gmail.com",
    },
    {
      title: "LinkedIn",
      value: (
        <a
          href="https://www.linkedin.com/in/saima-riaz-178ab7194/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FaLinkedin size={30} color="#0A66C2" />
        </a>
      ),
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  ScrollAnimation(scrollTab, divs);

  return (
    <section className="contacts" ref={scrollTab}>
      <motion.div
        className="title"
        ref={(el) => el && divs.current.push(el)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contacts Me
      </motion.div>
      <motion.div
        className="des"
        ref={(el) => el && divs.current.push(el)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Feel free to reach out to me for collaboration, opportunities, or just to
        connect!
      </motion.div>
      <motion.div
        className="list"
        ref={(el) => el && divs.current.push(el)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {listContacts.map((contact, key) => (
          <motion.div
            className="item"
            key={key}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>{contact.title}</h3>
            <div>{contact.value}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Contacts;
