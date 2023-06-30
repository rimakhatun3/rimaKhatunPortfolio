import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_70h57mv', 'template_33406hs', form.current, 'SifYjsGkgySquuD0a')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id="contact">
            <h1 className='text-3xl font-extrabold text-center mt-14 mb-10 text-orange-500'>--- Contact Me ---</h1>

            <form  ref={form} onSubmit={sendEmail} className='w-full mx-auto space-y-3  bg-orange-400 px-8 py-8' >
               <div className='w-full lg:w-3/4 mx-auto'>
                <h1 className='text-lg font-bold mb-2 '>Your Name</h1>
               <input className='border w-full text-stone-700 px-4 rounded-xl py-2' placeholder='Enter Your Name' type="text"  name="user_name" id="" />
               </div>
               <div className='w-full lg:w-3/4 mx-auto'>
                <h1 className='text-lg font-bold mb-2 '>Your Email</h1>
               <input className='border w-full px-4 text-stone-700 rounded-xl py-2' placeholder='Enter Your Email' type="text"  name="user_email" id="" />
               </div>
               <div className='w-full lg:w-3/4 mx-auto'>
                <h1 className='text-lg font-bold mb-2  '>Your Message</h1>
               <textarea placeholder='Enter Your ' className='w-full text-stone-700 px-5 py-3 rounded-xl' name="message" id="" cols="25" rows="10"></textarea>
               </div>
    <div className='w-2/4 mx-auto my-4'>
    <input className='btn hover:text-black w-full bg-orange-700 text-white' type="submit" value="Send Message" />
    </div>
            </form>
        </div>
    );
};

export default Contact;