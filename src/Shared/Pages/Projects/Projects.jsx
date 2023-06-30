import React, { useEffect, useState } from 'react';
import './Project.css'
import samarcamp from "../../../assets/images/samarcamp.png"
import chefrecipe from "../../../assets/images/chefrecipe (1).png"
import toy from "../../../assets/images/toymarket.png"
import Modal from '../../../components/Modal';
import Modal2 from '../../../components/Modal2';


const Projects = () => {
  const [projectData , setProjectsData] = useState([])
  useEffect(()=>{
    fetch('/public/projectsData.json')
    .then(res=>res.json())
    .then(data=>setProjectsData(data))
  },[])

  const [isOpen, setIsOpen] = useState(false)
  
  const closeModal = () => {
    setIsOpen(false)
  }

  const [showModal,setShowModal] = useState(false)
 
  // const handleModal =()=>{
  //   setModal(true)
  // }
    return (
        <div id='project'>
            <div >
  <h1 className='text-3xl font-extrabold text-center text-orange-500'>--- Projects ---</h1>


  <div className='grid lg:grid-cols-3 gap-5  my-14'>
    {/* {
      projectData.map(data=> <div key={data.id} className="card w-full bg-base-100 ">
      <figure className="px-10 pt-10">
      <div className='img-container '>
        <img  src={data.image} alt="" />
    
      </div>
        
      </figure>
      <div className="card-body items-center text-black text-center">
      <p className='text-2xl font-bold  '>
            {data.name}
        </p>
        <h2 className='text-2xl font-bold  justify-between items-center'>Technologies</h2>
        <ul className='list-disc grid grid-cols-2 gap-x-16  font-semibold'>
            <li>Reactjs</li>
            <li>Firebase</li>
            <li>Mongodb</li>
            <li>Tailwind</li>
            <li>Daisy Ui</li>
        </ul>
        <div className="card-actions flex gap-5">
        <a target='_blank' href={data.liveLink}>
            <button className='btn    bg-sky-600 rounded-2xl  '>Live Link</button></a>
            <button className='btn bg-orange-600 rounded-2xl text-black' onClick={()=>setIsOpen(true)}>view details</button>
        </div>
    
        
      </div>
    </div>)
    } */}
 
  <div className="card w-full bg-base-100 ">
  <figure className="px-10 pt-10">
  <div className='img-container '>
    <img  src={toy} alt="" />

  </div>
    
  </figure>
  <div className="card-body text-black items-center text-center">
  <p className='text-2xl font-bold '>
        Toy MarketPlace
    </p>
    <h2 className='text-2xl font-bold my-3'>Technologies</h2>
    <ul className='list-disc grid grid-cols-2 justify-between gap-x-16  font-semibold'>
        <li>Reactjs</li>
        <li>Firebase</li>
        <li>Mongodb</li>
        <li>Tailwind</li>
        <li>Daisy Ui</li>
    </ul>
    <div className="card-actions flex gap-5">
    <a target='_blank' href="https://toy-marketplace-6e61f.firebaseapp.com/">
        <button className='btn    bg-sky-600 rounded-2xl  '>Live Link</button></a>
        <a target='_blank' href="https://github.com/rimakhatun3/toy-market-place">
        <button className='btn    bg-orange-600 rounded-2xl  '>Client Link</button></a>
    <a target='_blank' href="https://github.com/rimakhatun3/toy-market-place-server">
        <button className='btn    bg-rose-500 rounded-2xl  '>Server Link</button></a>
        {/* <button className='btn bg-orange-600 rounded-2xl text-black' onClick={()=>setShowModal(true)}>view details</button> */}
    </div>
  </div>
</div>
  <div className="card w-full bg-base-100 ">
  <figure className="px-10 pt-10">
  <div className='img-container '>
    <img  src={samarcamp} alt="" />

  </div>
    
  </figure>
  <div className="card-body items-center text-black text-center">
  <p className='text-2xl font-bold '>
       Sport Camp
    </p>
    <h2 className='text-2xl font-bold my-3'>Technologies</h2>
    <ul className='list-disc grid grid-cols-2 gap-x-16 justify-between gap-x-15  font-semibold'>
        <li>Reactjs</li>
        <li>Firebase</li>
        <li>Mongodb</li>
        <li>Tailwind</li>
        <li>Daisy Ui</li>
    </ul>
    <div className="card-actions grid grid-cols-3 gap-5">
    <a target='_blank' href="https://b7a12-efd93.firebaseapp.com/">
        <button className='btn    bg-sky-600 rounded-2xl  '>Live Link</button></a>
    <a target='_blank' href="https://github.com/rimakhatun3/summer-camp">
        <button className='btn    bg-orange-600 rounded-2xl  '>Client Link</button></a>
    <a target='_blank' href="https://github.com/rimakhatun3/samar-camp-server">
        <button className='btn    bg-rose-500 rounded-2xl  '>Server Link</button></a>

        {/* <button className='btn bg-orange-600 rounded-2xl text-black' onClick={()=>setShowModal(true)}>view details</button> */}
    </div>
  </div>
</div>
  <div className="card w-full bg-base-100 ">
  <figure className="px-10 pt-10">
  <div className='img-container '>
    <img  src={chefrecipe} alt="" />

  </div>
    
  </figure>
  <div className="card-body items-center text-black text-center">
  <p className='text-2xl font-bold '>
       Chef Recipe
    </p>
    <h2 className='text-2xl font-bold my-3'>Technologies</h2>
    <ul className='list-disc grid grid-cols-2 gap-x-16 justify-between gap-x-15  font-semibold'>
        <li>Reactjs</li>
        <li>Firebase</li>
        <li>Mongodb</li>
        <li>Tailwind</li>
        <li>Daisy Ui</li>
    </ul>
    <div className="card-actions grid grid-cols-3 gap-5">
    <a target='_blank' href="https://b7a12-efd93.firebaseapp.com/">
        <button className='btn    bg-sky-600 rounded-2xl  '>Live Link</button></a>
    <a target='_blank' href="https://b7a12-efd93.firebaseapp.com/">
        <button className='btn    bg-orange-600 rounded-2xl  '>Client Link</button></a>
    <a target='_blank' href="https://b7a12-efd93.firebaseapp.com/">
        <button className='btn    bg-rose-500 rounded-2xl  '>Server Link</button></a>

        {/* <button className='btn bg-orange-600 rounded-2xl text-black' onClick={()=>setShowModal(true)}>view details</button> */}
    </div>
  </div>
</div>
 
  </div>

</div>
        {/* <Modal isVisible={showModal} onClose={()=>setShowModal(false)} ></Modal>     */}
        <Modal2 data={projectData} isOpen={isOpen}
        closeModal={closeModal}></Modal2>
        
        </div>
    );
};
 
export default Projects;