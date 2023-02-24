import React,{ useState, useEffect } from 'react'

import './Skills.scss';
import { motion } from 'framer-motion';

import { urlFor } from '../../client';
import { client } from '../../client';


import about01 from '../../images/about01.png'
import about02 from '../../images/about02.png'
import about03 from '../../images/about03.png'
import about04 from '../../images/about04.png'

// const abouts = [
//   { title: 'Frontend Development', imgUrl: `${about01}` },
//   { title: 'Backend Development', imgUrl: `${about02}` },
//   { title: 'FullStack Development', imgUrl: `${about03}` }, 
//   { title: 'Mobile App Development', imgUrl: `${about04}` }  
// ];


  const Skills = () => {
    const [abouts, setAbouts] = useState([]);
    const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
       const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []); 

  const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
    duration: 1,
    ease: 'easeInOut',
    },
  },
};

  return (
    <div className='skills__container' id="skills">
      <motion.div
        variants={scaleVariants}
          whileInView={scaleVariants.whileInView}   
          className="app__header-img">
      <h1 className="skills__head-text">Skills</h1>

      </motion.div>

      <motion.div
                whileInView={{ y: [-20, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} >
      <h1 className='skills__heading'>My Toolbox & Things I can Do</h1>
      </motion.div>
      
           <div className="container-small app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex skill__badge"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} className="" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

      
      
          <div className="app__profiles">
           {abouts.map((about, index) => (
             <motion.div
                whileInView={{ y: [0, 50], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                whileHover={{ scale: 1.1 }}
                className="app__profile-item"
                key={about.title + index}
              >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
               <h2 className="bold-text" style={{ marginTop: 20, marginLeft: 0,  fontSize: '1rem' }}>{about.title}</h2>
             
              </motion.div>
           ))}
        
        </div>
      </div>
    </div>
  )
}
 
export default Skills
