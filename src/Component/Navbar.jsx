import React from 'react'
import { FaPhone} from "react-icons/fa";
import { FaBars} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
        <div className='py-5'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div className='logo-design'>
                        <img src='/logo.png' alt='logo' className='w-44 xl:w-60 lg:w-60 md:w-52'/>
                    </div>
                    <div className='mendesign hidden md:hidden xl:flex lg:flex items-center justify-between gap-x-10'>
                        <h6 className='menudesign-a'>Home</h6>
                        <h6 className='menudesign-a'>About</h6>
                        <h6 className='menudesign-a'>Portfolio</h6>
                        <h6 className='menudesign-a'>Experience</h6>
                        <h6 className='menudesign-a'>Contact</h6>
                    </div>
                    <div className='whitebtn'>
                        <FaPhone/>
                        <a href='to: +91 9876543210'>  +91 9876543210</a>
                    </div>
                    <FaBars className='block md:block lg:hidden xl:hidden text-white text-xl'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar