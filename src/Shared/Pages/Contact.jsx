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
            <h1 className='text-3xl font-extrabold text-center mt-14 mb-5 text-orange-500'>--- Contact Me ---</h1>

            <form  ref={form} onSubmit={sendEmail} className='w-full mx-auto space-y-3   px-8 py-8' >
               <div className='w-full lg:w-2/4 mx-auto'>
                
               <input className=' w-full text-stone-700 px-4 border-orange-600  border-4 rounded-xl py-2' placeholder='Enter Your Name' type="text"  name="user_name" id="" />
               </div>
               <div className='w-full lg:w-2/4 mx-auto'>
               
               <input className='border-orange-600  border-4 w-full px-4 text-stone-700 rounded-xl py-2' placeholder='Enter Your Email' type="text"  name="user_email" id="" />
               </div>
               <div className='w-full lg:w-2/4 mx-auto'>
                
               <textarea placeholder='Enter Your ' className='w-full border-orange-600  border-4 text-stone-700 px-5 py-3 rounded-xl' name="message" id="" cols="15" rows="5"></textarea>
               </div>
    <div className='lg:w-1/4 w-full mx-auto my-4'>
    <input className='btn hover:text-black w-full bg-gradient-to-r from-[#f5af19] to-[#f12711] text-white' type="submit" value="Send Message" />
    </div>
            </form>
        </div>
    );
};

export default Contact;