import React from 'react';
import { FaFacebook,  FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f5af19] to-[#f12711] w-full   mt-14">
      <div className="container mx-auto py-6 px-12">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Rima Khatun</h3>
            <p className=" text-xl font-bold mt-2">FontEnd Developer</p>
           
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mt-5">
            <h1 className='text-xl font-bold mb-3 '>Navigation</h1>
<ul className="flex-col justify-center gap-2">
<li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
        
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
</ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mt-5">
            <h1 className='text-xl font-bold mb-3 '>Contact Me</h1>
<p className='my-2'>Rajshahi,Bangladesh</p>
<p>+88 01770287683</p>
<p className='my-2'>rimamnt46@gmail.com</p>

          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <ul className="flex justify-end">
              <li className="ml-3">
                <a target='_blank' href="https://www.facebook.com/rima.rima.37051579/">
                  <FaFacebook className="text-blue-700 text-5xl" />
                </a>
              </li>
              <li className="ml-3">
                <a target='_blank'  href="https://www.linkedin.com/in/rima-khatun-915897264/">
                  <FaLinkedin className="text-blue-500 text-5xl" />
                </a>
              </li>
              <li className="ml-3">
                <a target='_blank' href="https://github.com/rimakhatun3">
                  <FaGithub className="text-black bg-white rounded-full text-5xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center py-4 bg-gradient-to-r from-[#f12711] to-[#f5af19]">
        &copy; {new Date().getFullYear()} Rima Khatun Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
