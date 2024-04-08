import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaFacebook} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaGithub} from "react-icons/fa";

const HeroSection = () => {
    const ProjectSlider = {
        dots: false,
        centerMode: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2.7,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    }
    const SkillsSlider = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    }
  return (
    <>
        <div className='pt-10'>
            <div className='container'>
                <div className='centerdiv'>
                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-6xl xl:text-6xl text-white font-HeadingFont font-bold mb-3'>I am Yogesh Negi <br/> A Software Developer</h1>
                        <p className='text-lg text-white'>Hello, I'm a proficient Software Developer specializing in JavaScript, React, and Next.js. With a keen eye for detail and a passion for crafting efficient solutions, he thrives in the dynamic world of web development, constantly pushing boundaries and delivering exceptional results.</p>
                        <a className='whitebtn mt-5 inline-block font-HeadingFont' href=''>Download CV</a>
                    </div>
                    <div className='flex items-center justify-end'>
                        <img src='/hero.png'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-5 bg-lightblacktheme'>
            <div className='container mx-auto'>
                <div className='w-full'>
                    <Slider {...SkillsSlider} className='w-full'>
                        <div>
                            <div className='mx-2 flex items-center justify-center'>
                                <img src='/html.png' className='w-20 invert'/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-2 flex items-center justify-center'>
                                <img src='/html.png' className='w-20 invert'/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-2 flex items-center justify-center'>
                                <img src='/html.png' className='w-20 invert'/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-2 flex items-center justify-center'>
                                <img src='/html.png' className='w-20 invert'/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-2 flex items-center justify-center'>
                                <img src='/html.png' className='w-20 invert'/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-2 flex items-center justify-center'>
                                <img src='/html.png' className='w-20 invert'/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-2 flex items-center justify-center'>
                                <img src='/html.png' className='w-20 invert'/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
        <div className='pt-10'>
            <div className='container'>
                <h2 className='text-xl xl:text-5xl lg:text-5xl md:text-3xl text-whitetheme font-bold font-HeadingFont text-right'>Client's get always exceptional <br/> works from me...</h2>
                <div className='w-full mt-10'>
                    <div className='w-full xl:w-3/12 lg:w-3/12'></div>
                    <Slider {...ProjectSlider} className='w-full xl:w-9/12 lg:w-9/12'>
                        <div>
                            <div className='mx-3'>
                                <img src='/project1.webp' className='rounded-xl shadow-xl'/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-3'>
                                <img src='/project1.webp' className='rounded-xl shadow-xl'/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-3'>
                                <img src='/project1.webp' className='rounded-xl shadow-xl'/>
                            </div>
                        </div>
                        <div>
                            <div className='mx-3'>
                                <img src='/project1.webp' className='rounded-xl shadow-xl'/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
        <div className='pt-10'>
            <div className='container'>
                <div className='w-full flex items-start gap-10 flex-wrap xl:flex-nowrap lg:flex-nowrap'>
                    <div className='w-full md:w-full xl:w-5/12 lg:w-5/12'>
                        <form className='bg-lightblacktheme p-5 rounded-xl'>
                            <h3 className='text-whitetheme text-bold text-xl lg:text-4xl xl:text-4xl font-HeadingFont mb-5'>Reach Us</h3>
                            <div className='mb-5'>
                                <input className='inputdiv' type='text' placeholder='Name'/>
                            </div>
                            <div className='mb-5'>
                                <input className='inputdiv' type='text' placeholder='Email'/>
                            </div>
                            <div className='mb-5'>
                                <input className='inputdiv' type='text' placeholder='Phone Number'/>
                            </div>
                            <div className='mb-5'>
                                <input className='textareadiv' type='text' placeholder='Comment'/>
                            </div>
                            <button className='whitebtn w-full py-4'>Submit Enquiry</button>
                        </form>
                    </div>
                    <div className='w-full md:w-full lg:w-8/12 xl:w-8/12'>
                        <h2 className='text-xl xl:text-5xl lg:text-5xl md:text-3xl text-whitetheme font-bold font-HeadingFont'>Experience</h2>
                        <div className='mt-7'>
                            <div className='flex items-start space-x-5 border-b-solid border-b-white-theme border-b-2 py-4'>
                                <div>
                                    <h6 className='text-white font-bold'>2024 - Present</h6>
                                </div>
                                <div>
                                    <h6 className='text-white font-bold text-xl'>Product Designner</h6>
                                    <p className='text-lg text-white mt-1'>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-5 border-b-solid border-b-white-theme border-b-2 py-4'>
                                <div>
                                    <h6 className='text-white font-bold'>2024 - Present</h6>
                                </div>
                                <div>
                                    <h6 className='text-white font-bold text-xl'>Product Designner</h6>
                                    <p className='text-lg text-white mt-1'>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-5 border-b-solid border-b-white-theme border-b-2 py-4'>
                                <div>
                                    <h6 className='text-white font-bold'>2024 - Present</h6>
                                </div>
                                <div>
                                    <h6 className='text-white font-bold text-xl'>Product Designner</h6>
                                    <p className='text-lg text-white mt-1'>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-5 border-b-solid border-b-white-theme border-b-2 py-4'>
                                <div>
                                    <h6 className='text-white font-bold'>2024 - Present</h6>
                                </div>
                                <div>
                                    <h6 className='text-white font-bold text-xl'>Product Designner</h6>
                                    <p className='text-lg text-white mt-1'>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-5 border-b-solid py-4'>
                                <div>
                                    <h6 className='text-white font-bold'>2024 - Present</h6>
                                </div>
                                <div>
                                    <h6 className='text-white font-bold text-xl'>Product Designner</h6>
                                    <p className='text-lg text-white mt-1'>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-5 bg-lightblacktheme shadow-2xl'>
            <div className='container'>
                <div className='flex items-center justify-center xl:justify-between lg:justify-between flex-wrap xl:flex-nowrap lg:flex-nowrap'>
                    <div>
                        <p className='text-whitetheme'>Copy Right All Reserved by Yogesh Negi</p>
                    </div>
                    <div className='grid grid-cols-5 grid-rows-1 gap-x-5 mt-5 xl:mt-0'>
                        <FaFacebook className='iconstyle'/>
                        <FaInstagram className='iconstyle'/>
                        <FaTwitter className='iconstyle'/>
                        <FaLinkedin className='iconstyle'/>
                        <FaGithub className='iconstyle'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection;