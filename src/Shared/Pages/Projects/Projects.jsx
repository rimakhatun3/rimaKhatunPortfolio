import React, { useEffect, useState } from 'react';
import './Project.css'
import samarcamp from "../../../assets/images/samarcamp.png"
import chefrecipe from "../../../assets/images/chefrecipe (1).png"
import toy from "../../../assets/images/toymarket.png"
import Modal2 from '../../../components/Modal2';
import Modal from '../../../components/Modal';
import Modal3 from '../../../components/Modal3';


const Projects = () => {
  

  const [isOpen, setIsOpen] = useState(false)
  
  const closeModal = () => {
    setIsOpen(false)
  }
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  const closeModal2 = () => {
    setIsOpenModal(false)
  }

  const [showModal,setShowModal] = useState(false)
 
  const handleModal =()=>{
    setShowModal(false)
  }
    return (
        <div id='project'>
            <div >
  <h1 className='text-3xl font-extrabold text-center text-orange-500'>--- Projects ---</h1>


  <div className='grid lg:grid-cols-3 gap-5 px-10  my-14'>
   
 
  <div className="card border rounded-2xl shadow-md w-full bg-base-100 ">
  <figure >
  <div className='img-container rounded-2xl '>
    <img  src={toy} alt="" />

  </div>
    
  </figure>
  <div className="card-body rounded-xl  items-center text-center">
  <p className='text-2xl font-bold '>
        Toy MarketPlace
    </p>
  
        <button className='btn bg-gradient-to-r from-[#f12711] to-[#f5af19] rounded-2xl text-black' onClick={()=>setIsOpen(true)}>view details</button>
    
  </div>
</div>
  <div className="card border rounded-2xl shadow-md w-full bg-base-100 ">
  <figure >
  <div className='img-container rounded-2xl'>
    <a target='_blank' href="https://b7a12-efd93.firebaseapp.com/"><img  src={samarcamp} alt="" /></a>


  </div>
    
  </figure>
  <div className=" card-body  rounded-xl items-center  text-center">
  <p className='text-2xl font-bold '>
       Sport Camp
    </p>
  

        <button className='btn bg-gradient-to-r from-[#f12711] to-[#f5af19] rounded-2xl text-black' onClick={()=>setIsOpenModal(true)}>view details</button>
    
  </div>
</div>
  <div className="card border rounded-2xl shadow-md  w-full bg-base-100 ">
  <figure className="rounded-2xl">
  <div className='img-container w-full '>
    <img  src={chefrecipe} alt="" />

  </div>
    
  </figure>
  <div className="card-body items-center rounded-xl  text-center">
  <p className='text-2xl font-bold '>
       Chef Recipe
    </p>
    

        <button className='btn bg-gradient-to-r from-[#f12711] to-[#f5af19] rounded-2xl text-black' onClick={()=>setShowModal(true)}>view details</button>
   
  </div>
</div>
 
  </div>

</div>
       
        <Modal2  isOpen={isOpen}
        closeModal={closeModal}></Modal2>
        <Modal isOpen={isOpenModal} closeModal={closeModal2}></Modal>
        <Modal3 isOpen={showModal} closeModal={handleModal}></Modal3>
        
        </div>
    );
};
 
export default Projects;