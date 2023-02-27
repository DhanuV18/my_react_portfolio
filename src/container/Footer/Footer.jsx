import React, { useState } from 'react';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import { client } from '../../client';
import './Footer.scss';
import { motion } from 'framer-motion';

import linkedin from '../../images/linkedin__logo.png'
import github  from '../../images/github__logo.png'
import logo from '../../images/favicon.png'




const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username.required,
      email: formData.email.required,
      message: formData.message.required,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

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
  

  return (
    <div className='footer' id='contact'>      
   
    <div className='contact__container contact'>
        <header>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}          
          >
            <h1 className="skills__head-text">Contact</h1>
            
        </motion.div>
        <p className='contact__paragraph'>Feel free to contact me by submitting the form below
          and I will get back to you as soon as possible.
        </p>
      </header>

      {!isFormSubmitted ? (

        <form action='' className='form'>

          <div className="">

              <div className="">
                <input className="input input-text" type="text" placeholder="Name" name="username" value={username} onChange={handleChangeInput} required/>
              </div>
            
              <div className="">
                <input className="input input-text" type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} required />
              </div>
              
              <div>
                <textarea
                  className="input-text textarea"
                  placeholder="Leave Your Comments Here..."
                  value={message}
                  name="message"
                  cols="5"
                  rows="10"
                  onChange={handleChangeInput}
                  required
              />
               
              </div>
                <button type="button" className="btn input-submit" onClick={handleSubmit}>{!loading ? 'Send mail' : 'Sending...'}</button>
              </div>
        </form>
        
      ) : (
        <div className='feedback__message'>
          <h3 className="head-text feedback__text">
            😊 Thanks for your feedback! 🎉
              </h3>
              {/* <span className='celebration__emoji'>😊</span> */}
        </div>
        )}
          <div className='social__platform'>
            <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}          
            >
            <h2 className='social__platform__heading'>Find me on these online spaces!</h2>
            
            <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }} 
            >
              <div className='social__icon'>
                <a href="www.linkedin.com/in/visvanathan-dhanushan-048973253" target='_blank' ><img src={linkedin} alt="linkedin" className='icon icon--linkedin'/></a> 
                <a href="https://github.com/DhanuV18" target='_blank' ><img src={github} alt="linkedin" className='icon icon--github'/></a>       
              </div>
      </motion.div>
          </motion.div>
          </div>  
          {/* <AppWrap /> */}
          
      </div>
         <div className="copyright">
          <img src={logo} alt="" className='footer__logo'/>
          <p className="copyright__paragraph">Copyright 2023. Designed & coded by Dhanushan</p>          
        </div>
      </div>
      
  );
};

export default Footer
//   MotionWrap('app__footer'),
//   'contact',
//   'app__whitebg'
// );


// export default AppWrap(
//   MotionWrap(Footer, 'app__footer'),
//   'contact',
//   'app__whitebg',
// );