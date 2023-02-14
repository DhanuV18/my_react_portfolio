// import React,{ useState, useEffect } from 'react'

// import './About.scss';
// import { motion } from 'framer-motion';

// import { urlFor } from '../../client';
// import { client } from '../../client';


// import about01 from '../../images/about01.png'
// import about02 from '../../images/about02.png'
// import about03 from '../../images/about03.png'
// import about04 from '../../images/about04.png'

// // const abouts = [
// //   { title: 'Frontend Development', imgUrl: `${about01}` },
// //   { title: 'Backend Development', imgUrl: `${about02}` },
// //   { title: 'FullStack Development', imgUrl: `${about03}` },
// //   { title: 'Mobile App Development', imgUrl: `${about04}` }
// // ];


//   const About = () => {
//   const [abouts, setAbouts] = useState([]);

//   useEffect(() => {
//     const query = '*[_type == "abouts"]';

//     client.fetch(query).then((data) => {
//       setAbouts(data);
//     });
//   }, []);


//   return (
//     <>
//           <h2 className="head-text"><span>Passion</span> drives <span>Perfection</span></h2>
   
//           <div className="app__profiles">
//            {abouts.map((about, index) => (
//               <motion.div
//                 whileInView={{ opacity: 1 }}
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.5, type: 'tween' }}
//                 className="app__profile-item"
//                 key={about.title + index}
//               >
//               <img src={urlFor(about.imgUrl)} alt={about.title} />
//                <h2 className="bold-text" style={{ marginTop: 20, marginLeft: 50,  fontSize: '1.1rem' }}>{about.title}</h2>
             
//               </motion.div>
//            ))}
        
//           </div>

//     </>
//   )
// }

// export default About


import React from 'react'
import './About.scss'

import { motion } from 'framer-motion';

// import { urlFor } from '../../client';
import { client } from '../../client';

import { useState, useEffect } from 'react';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
    duration: 0.7,
    ease: 'easeInOut',
    },
  },
};


const About = () => {

  const [aboutMe, setAboutMe] = useState([]);

  useEffect(() => {
    const query = '*[_type == "aboutMe"]';

    client.fetch(query).then((data) => {
      setAboutMe(data);
    });
  }, []); 

  return (
    <div className='container about'>
     <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}          
    >
            
        <h1 className='about__heading'>About</h1>      

      </motion.div>

      {aboutMe.map((aboutMe, index) => (
              
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
          <div className='about__details'>
              <div>
                <h2 className='name__heading'>Who is Dhanushan?</h2>
                <p className='paragraph__one'>{aboutMe.paragraph1}</p>
                <p className='paragraph__two'>{aboutMe.paragraph2}</p>
                <div className='CV__details'>
                    <h3 src="#contact" className='contact__link' >Get in touch!</h3>
                    <button className='btn btn__download'>Download CV</button>
                </div>
              </div>
          </div>

      </motion.div>
      ))}  
         
    </div>
    
  )
}

export default About