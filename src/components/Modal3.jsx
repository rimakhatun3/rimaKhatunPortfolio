import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import chefbanner from "../assets/images/chefbanner.png"
import chefinfo from "../assets/images/chefinfo.png"
import chefrecipe from "../assets/images/chefrecipe2.png"
const Modal3 = ({ closeModal, isOpen}) => {
    
    return (
        <div>
              <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto scroll-m-5">
            <div className="flex min-h-full max-w-screen-xl items-center  justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full mt-16 max-w-screen-md overflow-hidden relative transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  Chef Recipe
                  </Dialog.Title>
                  <div className="mt-2">

                  <div className="card w-full  ">
  <div className='grid lg:grid-cols-3 '>
  <figure>
   
    <img className=' w-full rounded-3xl ' src={chefbanner}  alt="Shoes" />
    </figure>
  <figure><img className='w-9/12 rounded-3xl ' src={chefinfo} alt="Shoes" /></figure>
  <figure><img className='w-9/12 rounded-3xl ' src={chefrecipe} alt="Shoes" /></figure>
  </div>
  <div className="card-body text-black">
  <p className='text-2xl underline font-bold text-center my-3'>Projects Details</p>
    <ul className='list-decimal'>
        <li>This website for information and chef food recipe and food item.</li>
        <li>User need to login before getting add a food or like..</li>
        <li>A user can place an order, and the user has a dashboard Where he can cancel the order.</li>
    </ul>

   
   
    <div className="card-actions justify-evenly my-3 ">
    <a target='_blank' href="https://chef-recipe-hunter-clien-d4424.firebaseapp.com/">
        <button className='btn    bg-gradient-to-r from-[#f12711] to-[#f5af19] rounded-2xl  '>Live Link</button></a>
    <a target='_blank' href="https://github.com/rimakhatun3/chef-recipe-ass">
        <button className='btn    bg-gradient-to-r from-[#f12711] to-[#f5af19] rounded-2xl  '>Client Link</button></a>
    <a target='_blank' href="https://github.com/rimakhatun3/chef-recipe-server">
        <button className='btn    bg-gradient-to-r from-[#f5af19] to-[#f12711] rounded-2xl  '>Server Link</button></a>
    </div>
  </div>
</div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn btn-sm btn-circle   btn-error  font-medium absolute top-0 right-0"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </div>
    );
};

export default Modal3;