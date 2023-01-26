import React from 'react'
import { motion } from 'framer-motion'
import profile from '../../images/profile.png'
import circle from '../../images/circle.svg'
import react from '../../images/react.png'
import javascript from '../../images/javascript.png'
import css from '../../images/css.png'

import './Header.scss'

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

function Header() {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span></span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hi, I am</p>
              <h1 className='head-text'>Dhanu</h1>
            </div>
          </div>
          <div className='tag-cmp app__text'>
            <p className='p-text'>Fullstack developer</p>
          </div>
        </div>

      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 , delayChildren: 0.5}}
        className="app__header-img"
        >
        <img src={profile} alt="profile picture"/>
        
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={circle}
          alt="profile_circle"
          className='overlay_circle'
        >          
        </motion.img>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
    >
          {
            [css,react, javascript].map((circle, index) => (
             
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="profile_bg" />
              </div>
            ))
          }
        </motion.div>
        
      </motion.div>
    </div>
  )
}

export default Header