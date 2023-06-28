
import './App.css'
import { TypeAnimation } from 'react-type-animation';

import aboutimg from '../src/assets/images/portfolioimg.avif'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

useEffect(()=>{
  AOS.init({
    duration: 1200
   });
},[AOS])
  return (
    <div className='bg-gray-700 max-w-screen-2xl  mx-auto text-slate-200 py-10 lg:px-16 '>
    
    <div className="navbar   ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href="#">Home</a></li>
        <li><a id="about">About</a></li>
        
        <li><a id="skill">Skills</a></li>
        <li><a id="project">Projects</a></li>
      </ul>
    </div>
    <a  className='font-custom font-semibold text-xl'>Rima Khatun</a>
    
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
        
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Projects</a></li>
    </ul>
  </div>

</div>

<div  className='home my-24 w-1/2 mx-auto '>

<h1 className='text-2xl font-bold my-2 '>Hi! I'm ,</h1>
<h2 className='font-serif text-xl font-semibold'>Rima Khatun</h2>
<TypeAnimation className='text-rose-400'
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
 
 <a href='/resume.pdf' download>
  <button className='btn bg-rose-400 '>Download Resume</button>
 </a>


  </div>

  {/* about */}

<div data-aos="slide-up" className='my-28  '>
  <div className='lg:flex gap-10 w-full justify-center   '>
  <img data-aos="fade-right" className=' h-[450px] rounded-xl w-1/2' src={aboutimg} alt="" />
  <div className='w-1/2 text-center data-aos="fade-left"'>
<p className='text-rose-400 font-bold text-3xl my-4'>About</p>
<p className='text-justify'>Welcome to my portfolio! Rima Khatun, a junior MERN stack developer who is enthusiastic about creating dynamic web applications. I recently completed an intensive web development course at Programming Hero, where I honed my skills in the MERN stack. Equipped with a solid foundation in JavaScript, I thrive on crafting interactive and responsive user interfaces.
I have completed my diploma in Mechatronices Technology from Rajshahi Polytecnic Institute, I have gained a comprehensive understanding of software development principles and practices. My educational background, combined with hands-on experience in building applications using MongoDB, Express.js, React, and Node.js, enables me to develop robust and scalable solutions. I am passionate about staying up-to-date with the latest industry trends and continuously expanding my knowledge to deliver cutting-edge projects.</p>
<div className='text-center mt-14'>
<a href='contact' >
  <button className='btn bg-rose-400 '>Contact With Me</button>
 </a>
</div>
  </div>
</div>


</div>
    </div>
  )
}

export default App
