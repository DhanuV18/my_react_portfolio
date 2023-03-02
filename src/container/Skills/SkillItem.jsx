import React from 'react'


import './Skills.scss';
import { motion } from 'framer-motion';

import react from '../../images/react.png'


const scaleVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

function SkillItem({ icon, name}) {
  return (
      
           <div className="container-small app__skills-container">
        <motion.div className="app__skills-list">
          
            <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

              <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>

                   <motion.div
                whileInView={{ y: [0, 20], opacity: [0, 1] }}
                transition={{ duration: 0.3 }} 
                          
              className="app__skills-item app__flex" key="react">
              
              <div className="app__flex skill__badge">
                    <img src={react} alt="react" className="" />
              </div>
              <p className="p-text">React</p>
              </motion.div>             
          
          </motion.div>
    </div>
  )
}

export default SkillItem