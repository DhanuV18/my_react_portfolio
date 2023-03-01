import React from "react";
import "./About.scss";

import { motion } from "framer-motion";

// import { client } from "../../client";

import { useState, useEffect } from "react";

import resume from '../../resume/My_resume.pdf'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

// const About = () => {
//   const [aboutMe, setAboutMe] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "aboutMe"]';

  //   client.fetch(query).then((data) => {
  //     setAboutMe(data);
  //   });
  // }, []);

  return (
    <div className="about" id="about">
      <div className="container ">
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
        >
          <h1 className="about__heading">About</h1>
          <h2>Dhanu</h2>
        </motion.div>

        {/* {aboutMe.map((aboutMe, index) => ( */}
          <motion.div
            whileInView={{ y: [-150, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
          >
            <div className="about__details">
              <div >
                <h2 className="name__heading">Who is Dhanushan?</h2>
                {/* <p className="paragraph__one">{aboutMe.paragraph1}</p> */}

                  <motion.div
            whileInView={{ y: [-150, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
          >
                {/* <p className="paragraph__two">{aboutMe.paragraph2}</p> */}
           </motion.div> 
                <div className="CV__details">
                  <h3 src="#contact" className="contact__link">
                    <a href="#contact" className="getInTouch">
                      Get in touch! <span className="heart">❤️</span>
                    </a>
                  </h3>
                  <a href={ resume }>
                    <button type="button" className="btn btn__download" download>
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default About;
