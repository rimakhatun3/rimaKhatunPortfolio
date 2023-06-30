
import './App.css'
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa';
import aboutimg from '../src/assets/images/portfolioimg.avif'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import html from './assets/images/html1.png'
import css from './assets/images/css.png'
import java from './assets/images/java.png'
import express from './assets/images/express.png'
import mongo from './assets/images/mongo.png'
import node from './assets/images/node.png'
import firebase from './assets/images/firebase.png'
import react from './assets/images/react.png'
import tailwind from './assets/images/tailwind.png'
import bootstrap from './assets/images/Bootstrap.png'
import git from './assets/images/git.png'
import github from './assets/images/github.png'
import Projects from './Shared/Pages/Projects/Projects';
import Contact from './Shared/Pages/Contact';
import Footer from './Shared/Pages/Footer';

function App() {

  

useEffect(()=>{
  AOS.init({
    duration: 1200
   });
},[AOS])
  return (
    <div className='bg-gray-600 max-w-screen-2xl  mx-auto text-slate-200 py-10 lg:px-16 '>
    
    <div className="navbar fixed top-0 z-50 max-w-screen-2xl mx-auto overflow-hidden  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </div>
    <a  className='font-custom font-semibold text-xl'>Rima Khatun</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-8 bg-orange-600 border rounded-xl  ">
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
        
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
    </ul>
  </div>

</div>

<div id="#"  className='home my-28 sm:w-full lg:w-1/2 mx-auto '>

<h1 className='text-2xl font-bold my-2 '>Hi! I'm ,</h1>
<h2 className='font-serif text-xl font-semibold'>Rima Khatun</h2>
<TypeAnimation className='text-orange-500'
      sequence={[
        'I am a Web Developer', 
        1000, 
        
        'I am a Mern stack Developer',
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em',  display: 'inline-block' }}
    />
<p className='my-4'>Welcome to my portfolio! I'm a passionate MERN stack web developer with expertise in HTML, CSS, JavaScript, React, Express.js, Node.js, and MongoDB. With a strong foundation in front-end development, I strive to create captivating user interfaces and seamless user experiences. I enjoy turning ideas into functional and visually appealing websites and web applications.</p>
 
 <a href='/public/Resume of_Rima_Khatun.pdf' download>
  <button className='btn rounded-3xl text-white  bg-orange-500 ms-2 '>Download Resume <FaDownload></FaDownload></button>
 </a>


  </div>

  {/* about */}

<div id="about" data-aos="slide-up" className='my-28  '>
  <div className='lg:flex gap-10 w-full justify-center   '>
  <img data-aos="fade-right" className=' h-[450px] rounded-xl lg:w-1/2 w-full' src={aboutimg} alt="" />
  <div data-aos="fade-left" className='lg:w-1/2 w-full text-center '>
<p className='text-orange-500 font-bold text-3xl my-4'>--- About ---</p>
<p className='text-justify'>Welcome to my portfolio!I'm Rima Khatun,I'm a junior MERN stack developer who is enthusiastic about creating dynamic web applications. I recently completed an intensive web development course at Programming Hero, where I honed my skills in the MERN stack. Equipped with a solid foundation in JavaScript, I thrive on crafting interactive and responsive user interfaces.
I have completed my diploma in Mechatronices Technology from Rajshahi Polytecnic Institute, I have gained a comprehensive understanding of software development principles and practices. My educational background, combined with hands-on experience in building applications using MongoDB, Express.js, React, and Node.js, enables me to develop robust and scalable solutions. I am passionate about staying up-to-date with the latest industry trends and continuously expanding my knowledge to deliver cutting-edge projects.</p>
<div className='text-center mt-14'>
<a href='contact' >
  <button className='btn bg-orange-500 '>Contact With Me</button>
 </a>
</div>
  </div>
</div>

</div>

{/* Skills */}
<div id="skill" className=' my-16  '>
<h1 className='text-orange-500 font-extrabold text-3xl text-center my-8'>--- My Skills ---</h1>
<div className='bg-orange-400 py-10 px-12 grid md:grid-cols-2 lg:grid-cols-5 gap-5 text-center'>
<div data-aos="fade-right" className='flex-col justify-center items-center w-full rounded-lg border shadow-lg shadow-orange-800 bg-slate-50 py-4 mx-auto  ' >
<div >
<img className='mx-auto'  src={html} alt="" />
</div>
<p className='text-2xl font-bold text-black '>HTML</p>
</div>
<div data-aos="fade-left" className=' items-center shadow-lg shadow-blue-500 w-full rounded-lg px-4 border  bg-slate-50 py-4 ' >
<img className='mx-auto'  src={css} alt="" />
<p className='text-2xl font-bold text-black ms-3'>CSS</p>
</div>
<div data-aos="fade-up" className=' items-center shadow-lg shadow-yellow-500 w-full rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto'  src={java} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Javascript</p>
</div>
<div data-aos="fade-down" className=' items-center w-full shadow-lg shadow-sky-500 rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto'  src={react} alt="" />
<p className='text-2xl font-bold text-black ms-3'>React</p>
</div>
<div data-aos="flip-up" className=' items-center w-full shadow-lg shadow-sky-800 rounded-lg px-4 border bg-slate-50 py-4' >
<img  className='mx-auto' src={tailwind} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Tailwind</p>
</div>
<div data-aos="flip-left" className=' items-center w-full shadow-lg shadow-purple-800 rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto'  src={bootstrap} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Bootstrap</p>
</div>
<div data-aos="flip-right" className=' items-center shadow-lg shadow-green-500 w-full rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto'  src={mongo} alt="" />
<p className='text-2xl font-bold text-black ms-3'>MongoDb</p>
</div>
<div data-aos="flip-down" className=' items-center shadow-lg shadow-green-500 w-full rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto' src={node} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Node JS</p>
</div>
<div className=' items-center w-full rounded-lg shadow-lg shadow-black px-4 border bg-slate-50 py-4' >
<img className='mx-auto' src={express} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Express JS</p>
</div>
<div data-aos="flip-up" className=' items-center shadow-lg shadow-orange-800 w-full rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto' src={firebase} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Firebase</p>
</div>
<div data-aos="flip-down" className=' items-center shadow-lg shadow-sky-300 w-full rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto' src={github} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Github</p>
</div>
<div data-aos="flip-up" className=' items-center shadow-lg shadow-orange-800 w-full rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto' src={git} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Git</p>
</div>


</div>
</div>

{/* projects section */}
<Projects></Projects>
<Contact></Contact>
<Footer></Footer>


    </div>
  )
}

export default App
