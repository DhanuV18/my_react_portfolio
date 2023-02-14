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

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []); 

  return (
    <>
          <h2 className="head-text"><span>Passion</span> drives <span>Perfection</span></h2>
   
          <div className="app__profiles">
           {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
                key={about.title + index}
              >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
               <h2 className="bold-text" style={{ marginTop: 20, marginLeft: 50,  fontSize: '1.1rem' }}>{about.title}</h2>
             
              </motion.div>
           ))}
        
          </div>

    </>
  )
}

export default Skills