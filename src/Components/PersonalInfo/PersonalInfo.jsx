import React, { useEffect } from 'react'
import './PersonalInfo.css'
import { useNavigate } from 'react-router-dom'

function PersonalInfo() {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    },[])
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate('/creadit-detail')
    }
    return (
        <section className='PersonalInfo-section'>
            <div className="w-full md:w-96 md:max-w-full mx-auto">
                <div className="p-6 border border-gray-300 sm:rounded-md">
                    <form method="POST">
                        <label className="block mb-6">
                            <span className="text-gray-700">Your name</span>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="
                  block
                  w-full
                  mt-1
                  outline-none  
                  border-gray-300
                  rounded-md
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  p-2
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                                placeholder="Your name"
                                
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Email</span>
                            <input
                                id="address1"
                                name="email"
                                type="email"
                                className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                                placeholder="Email"
                                
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Mobile Number</span>
                            <input
                                id="address2"
                                name="number"
                                type="number"
                                className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                                placeholder="Mobile Number"
                                
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Pan Card Number</span>
                            <input
                                id="city"
                                name="Pan Card Number"
                                type="number"
                                className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                                placeholder="Pan Card Number"
                                
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Address</span>
                            <input
                                id="state"
                                name="Address"
                                type="text"
                                className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                                placeholder="Address"
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Address Line 1</span>
                            <input
                                id="zip"
                                name="Address Line 1"
                                type="text"
                                className="
                  block
                  outline-none 
                  w-full
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                                placeholder="Address Line 1"
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">City</span>
                            <input
                                id="country"
                                name="City"
                                type="text"
                                className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                                placeholder="City"
                                
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">State / Province / Region</span>
                            <input
                                id="telephone"
                                name="state"
                                type="text"
                                className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                                placeholder=""
                                
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Postal Code</span>
                            <input
                                id="telephone"
                                name="Postal Code"
                                type="number"
                                className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                                placeholder="Postal Code"
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">Reference Number</span>
                            <input
                                id="telephone"
                                name="Reference Number"
                                type="number"
                                className="
                  block
                  w-full
                  outline-none 
                  mt-1
                  border-gray-300
                  rounded-md
                  shadow-sm
                  p-2
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                                placeholder="Reference Number"
                            />
                        </label>
                        <div className="mb-6">
                            <button
                            onClick={handleRedirect}
                                type="submit"
                                className="
                  h-10
                  px-5
                  border
                  outline-none 
                  text-indigo-100
                  bg-indigo-700
                  rounded-lg
                  p-2
                  transition-colors
                  duration-150
                  focus:shadow-outline
                  hover:bg-indigo-800
                "
                            >
                                Save
                            </button>
                        </div>
                        <div>
                            {/* <div className="mt-2 text-gray-700 text-right text-xs">
                                by
                                <a href="https://herotofu.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
                                    HeroTofu
                                </a>
                            </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default PersonalInfo
