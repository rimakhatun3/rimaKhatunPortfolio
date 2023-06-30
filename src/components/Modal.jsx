import React from 'react';
import allclass from "../assets/images/allClassespage.png"
import allInstructor from "../assets/images/allinstructor.png"
import dashboard from "../assets/images/studentdashboard.png"
const Modal = ({isVisible,onClose}) => {
    if(!isVisible){
        return null
    }
    return (
        <div className='fixed inset-0 mt-40 mb-10  h-[400px]  bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
     
      {/* if there is a button, it will close the modal */}
     <div className='w-[800px] mt-20 mb-36  flex flex-col relative '>
     

<div className='bg-white text-black  rounded p-8 my-10'>

<div className='grid lg:grid-cols-3 gap-5 mt-5'>
   <img className='h-[200px]' src={allInstructor} alt="" /> 
   <img className='h-[200px]' src={allclass} alt="" /> 
   <img className='h-[200px]' src={dashboard} alt="" /> 
</div>

<div>
    <p className='text-2xl font-bold my-3 '>
        Sport Camp
    </p>
    
    <p>
        This Is a student sport Educational website.This website is a mobile-responsive platform with dark-light theme mode, role management, authentication and authorization using Firebase and JWT payment system by using stripe method, Student can easily login this site.Student can select their class and enroll by payment successfull .
    </p>
    <h2 className='text-2xl font-bold my-3'>Technologies</h2>
    <ul className='list-disc grid grid-cols-3 justify-between  font-semibold'>
        <li>Reactjs</li>
        <li>Firebase</li>
        <li>Mongodb</li>
        <li>Tailwind</li>
        <li>Daisy Ui</li>
    </ul>
   <div className='my-4 flex gap-5'>
    <a target='_blank' href="https://b7a12-efd93.firebaseapp.com/">
        <button className='btn  hover:bg-orange-400 btn-sm px-2 bg-orange-600 rounded-3xl  '>Live Link</button>
    </a>
    <a target='_blank' href="https://github.com/rimakhatun3/summer-camp">
        <button className='btn  hover:bg-sky-400 btn-sm px-2 bg-sky-600 rounded-3xl  '>Client Link</button>
    </a>
    <a target='_blank' href="https://github.com/rimakhatun3/samar-camp-server">
        <button className='btn  hover:bg-green-400 btn-sm px-2 bg-green-600 rounded-3xl  '>Server Link</button>
    </a>

   </div>
   <button  onClick={()=>onClose()} className="place-self-end border rounded-full px-3  bg-rose-600 absolute bottom-16 right-3 text-black">Close</button>
</div>
</div>
     </div>
    </div>
  
       
    );
};

export default Modal;