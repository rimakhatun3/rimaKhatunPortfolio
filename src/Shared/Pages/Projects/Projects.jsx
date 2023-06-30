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


  <div className='grid lg:grid-cols-3 gap-3  my-14'>
    {
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
        <div className="card-actions grid grid-cols-3">
       <div>
       <a target='_blank' href={data.liveLink}>
            <button className='btn    bg-sky-600 rounded-2xl  '>Live Link</button></a>
       </div>
           <div>
           <a target='_blank' href={data.clientLink}>
            <button className='btn    bg-green-600 rounded-2xl  '>Client Link</button></a> 
           </div>
            <div>
            <a target='_blank' href={data.serverLink}>
            <button className='btn    bg-rose-600 rounded-2xl  '>server Link</button></a>
            </div>
        </div>
    <div className='w-full  my-3'>
    <button className='btn w-11/12 bg-orange-600  rounded-2xl text-black' onClick={()=>setIsOpen(true)}>view details</button>
    </div>
        
      </div>
    </div>)
    }
 

 
  </div>

</div>
        {/* <Modal isVisible={showModal} onClose={()=>setShowModal(false)} ></Modal>     */}
        <Modal2 data={projectData} isOpen={isOpen}
        closeModal={closeModal}></Modal2>
        
        </div>
    );
};
 
export default Projects;