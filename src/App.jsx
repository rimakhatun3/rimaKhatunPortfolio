
import './App.css'
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa';
import newabout from "../src/assets/images/newimg.jpg"
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
import laptop from "../src/assets/images/laptop.avif"
import resume from "../src/assets/Resume_of_Rima.pdf"


function App() {

  const [theme,setTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light')
  const handleToggle =(e)=>{
    if(e.target.checked){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }

  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute("data-theme",localTheme)
  },[theme])

useEffect(()=>{
  AOS.init({
    duration: 1200
   });
},[AOS])
  return (
    <div >
    
    <div className="navbar px-14 bg-slate-300 border-b-2 border-orange-600   fixed   top-0 z-50   w-full   ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li className='bg-gradient-to-r from-[#f5af19] to-[#f12711] mb-2 rounded-xl'><a href="#">Home</a></li>
        <li className='bg-gradient-to-r from-[#f5af19] to-[#f12711] rounded-xl mb-2'><a href="#about">About</a></li>
        
        <li className='bg-gradient-to-r from-[#f5af19] to-[#f12711] mb-2 rounded-xl'><a href="#skill">Skills</a></li>
        <li className='bg-gradient-to-r from-[#f5af19] to-[#f12711] mb-2 rounded-xl'><a href="#project">Projects</a></li>
        <li className='bg-gradient-to-r from-[#f5af19] to-[#f12711] rounded-xl'><a href="#contact">Contact Me</a></li>
      </ul>
    </div>
    <a  className='font-custom font-bold text-2xl'>Rima <span className='text-[#f5af19]' >Kha</span><span className='text-[#f12711]'>tun</span> </a>
    
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal border rounded-2xl px-4  ">
    <li className='me-2 bg-gradient-to-r from-[#f5af19] to-[#f12711] rounded-xl' ><a className='border-2 border-orange-500 cursor-pointer ' href="#">Home</a></li>
    <li className='me-2 bg-gradient-to-r from-[#f5af19] to-[#f12711] rounded-xl'><a className='navlink' href="#about">About</a></li>
        
        <li className='me-2 bg-gradient-to-r from-[#f5af19] to-[#f12711] rounded-xl'><a href="#skill">Skills</a></li>
        <li className='me-2 bg-gradient-to-r from-[#f5af19] to-[#f12711] rounded-xl'><a href="#project">Projects</a></li>
        <li className='me-2 bg-gradient-to-r from-[#f5af19] to-[#f12711] rounded-xl'><a href="#contact">Contact Me</a></li>
        <label className="swap swap-rotate ml-2">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handleToggle} type="checkbox" />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
    </ul>
  </div>

</div>
<div id="#"  className=' mb-16 mt-36 px-6  lg:px-14 w-full lg:flex lg:gap-16 '>

<div data-aos="fade-up" className='lg:w-1/2 w-full  items-center justify-center'>
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
<p className='my-4  '>Welcome to my portfolio! I'm a passionate MERN stack web developer .My motive is to acquire insight and knowledge into this spectrum.
I intend to make functional websites with adequate UI/UX.</p>
 
 <a target='_blank' download href={resume} >
  <button className='btn rounded-3xl text-white  bg-gradient-to-r from-[#f5af19] to-[#f12711] ms-2 '>Download Resume <FaDownload></FaDownload></button>
 </a>
</div>

<div data-aos="fade-down" className='lg:w-1/2 w-full'>
<img className='rounded-2xl lg:w-10/12' src={laptop} alt="" />
</div>
  </div>

  {/* about */}

  <div  id="about" className="my-16 px-4 sm:px-6 w-full lg:px-8">
  <div  className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8">
    <div data-aos="fade-up"  className='w-full lg:w-1/2'>
    <img className=" w-10/12  rounded-xl" src={newabout} alt="" />
    </div>
    <div data-aos="fade-down" className="lg:w-1/2 w-full text-center">
      <p className="text-orange-500 font-bold text-3xl my-4">--- About ---</p>
      <p className="text-justify w-full">
        I'm Rima Khatun, a junior MERN stack developer who is enthusiastic about creating dynamic web applications. I recently completed an intensive web development course at Programming Hero, where I honed my skills in the MERN stack. Equipped with a solid foundation in JavaScript, I thrive on crafting interactive and responsive user interfaces.
        I have completed my diploma in Mechatronics Technology from Rajshahi Polytechnic Institute, where I gained a comprehensive understanding of software development principles and practices. My educational background, combined with hands-on experience in building applications using MongoDB, Express.js, React, and Node.js, enables me to develop robust and scalable solutions. I am passionate about staying up-to-date with the latest industry trends and continuously expanding my knowledge to deliver cutting-edge projects.
      </p>
      <div className="text-center mt-8">
        <a href="#contact">
          <button className="btn rounded-3xl bg-gradient-to-r from-[#f5af19] to-[#f12711]">
            Contact With Me
          </button>
        </a>
      </div>
    </div>
  </div>
</div>


{/* Skills */}
<div id="skill" className=' my-16  '>
<h1 className='text-orange-500 font-extrabold text-3xl text-center my-8'>--- My Skills ---</h1>
<div className=' py-10 px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5 text-center'>
<div  className='flex-col justify-center items-center w-full rounded-lg border shadow-lg shadow-orange-800 bg-slate-50 py-4 mx-auto  ' >
<div data-aos="fade-up" >
<img className='mx-auto'  src={html} alt="" />
</div>
<p className='text-2xl font-bold text-black '>HTML</p>
</div>
<div data-aos="fade-down"  className=' items-center shadow-lg shadow-blue-500 w-full rounded-lg px-4 border  bg-slate-50 py-4 ' >
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
<div data-aos="fade-up" className=' items-center w-full shadow-lg shadow-sky-800 rounded-lg px-4 border bg-slate-50 py-4' >
<img  className='mx-auto' src={tailwind} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Tailwind</p>
</div>
<div data-aos="fade-down" className=' items-center w-full shadow-lg shadow-purple-800 rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto'  src={bootstrap} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Bootstrap</p>
</div>
<div data-aos="fade-up" className=' items-center shadow-lg shadow-green-500 w-full rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto'  src={mongo} alt="" />
<p className='text-2xl font-bold text-black ms-3'>MongoDb</p>
</div>
<div data-aos="fade-down" className=' items-center shadow-lg shadow-green-500 w-full rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto' src={node} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Node JS</p>
</div>
<div data-aos="fade-up" className=' items-center w-full rounded-lg shadow-lg shadow-black px-4 border bg-slate-50 py-4' >
<img className='mx-auto' src={express} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Express JS</p>
</div>
<div data-aos="fade-down" className=' items-center shadow-lg shadow-orange-800 w-full rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto' src={firebase} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Firebase</p>
</div>
<div data-aos="fade-up" className=' items-center shadow-lg shadow-sky-300 w-full rounded-lg px-4 border bg-slate-50 py-4' >
<img className='mx-auto' src={github} alt="" />
<p className='text-2xl font-bold text-black ms-3'>Github</p>
</div>
<div data-aos="fade-down" className=' items-center shadow-lg shadow-orange-800 w-full rounded-lg px-4 border bg-slate-50 py-4' >
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
