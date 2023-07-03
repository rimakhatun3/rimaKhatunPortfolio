import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import toybanner from "../assets/images/toybanner.png"
import toycategory from "../assets/images/toycategory.png"
import alltoy from "../assets/images/alltoy.png"
const Modal2 = ({ closeModal, isOpen}) => {
    
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
                <Dialog.Panel className="w-full mt-16 max-w-screen-md relative transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold text-center leading-6 text-gray-900"
                  >
                 Toy Markrt Place
                  </Dialog.Title>
                  <div className="mt-2">

                  <div className="card w-full  ">
  <div className='grid lg:grid-cols-3 '>
  <figure>
   
    <img className=' w-full rounded-3xl ' src={toybanner} alt="Shoes" />
    </figure>
  <figure><img className='w-9/12 rounded-3xl ' src={toycategory} alt="Shoes" /></figure>
  <figure><img className='w-9/12 rounded-3xl ' src={alltoy} alt="Shoes" /></figure>
  </div>
  <div className="card-body text-black">
    <p className='text-2xl underline font-bold text-center my-3'>Projects Details</p>

    <ul className='list-decimal'>
        <li>This website for a Toy Management..</li>
        <li>Users need to login before getting add toy, quantity, add or delete.</li>
        <li>Client can update quantity (deliver or restock).</li>
    </ul>

   
   
    <div className="card-actions justify-evenly my-3">
    <a target='_blank' href="https://toy-marketplace-6e61f.firebaseapp.com/">
        <button className='btn    bg-gradient-to-r from-[#f5af19] to-[#f12711] rounded-2xl  '>Live Link</button></a>
        <a target='_blank' href="https://github.com/rimakhatun3/toy-market-place">
        <button className='btn    bg-gradient-to-r from-[#f5af19] to-[#f12711] rounded-2xl  '>Client Link</button></a>
    <a target='_blank' href="https://github.com/rimakhatun3/toy-market-place-server">
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

export default Modal2;