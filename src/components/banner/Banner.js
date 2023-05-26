import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiAndroidstudio,
} from 'react-icons/si';
const Banner = () => {
  const [text] = useTypewriter({
    words: [
      'Front End Web Developer.',
      'Full Android App Developer.',
      'Video Editor.',
      'Content Creator.',
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section
      id='home'
      className='w-full pt-10 pb-20 mt-25 flex flex-col gap-10 lgl:flex-row  xl:gap-0 items-center font-titleFont border-b-[1px] border-b-black '
    >
      {/* For the left homepage */}

      <div className='w-full p-5 lgl:w-1/2 flex flex-col gap-20'>
        <div className='flex flex-col gap-2 lgl:gap-5'>
          <h4 className='text-lg font-normal'>WElCOME TO MY WORLD</h4>
          <h1 className='text-6xl font-bold text-white'>
            HI! I'm{' '}
            <span className='text-designColor Capitalize'>Victor Okeke</span>
          </h1>
          <h2 className='text-4xl font-bold'>
            A <span> {text} </span>
            <Cursor
              cursorBlinking='false'
              cursorStyle='|'
              cursorColor='#ff014f'
            />
          </h2>
          <p className='text-base font-bodyFont loading-6 tracking-wide'>
            A Professional web developer and an android app developer. A
            software engineer, a student of Electronic and Computer Engineering,
            UNN.
          </p>
        </div>
        <div className='flex flex-col gap-10 lgl:flex-row  lgl:gap-0 lgl:justify-between'>
          <div className='lgl:mb-4 lgl:mt-20 mt-5'>
            <h2 className='text-base font-titleFont  mb-4'>FIND ME IN</h2>
            <div className='flex gap-4 '>
              <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                <FaFacebook className='w-10 h-10' />
              </span>
              <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                <FaTwitter className='w-10 h-10' />
              </span>
              <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                <FaLinkedin className='w-10 h-10' />
              </span>
            </div>
          </div>
          <div>
            <h2 className='text-base font-titleFont mb-5 lgl:mb-4 lgl:mt-20'>
              SKILL
            </h2>
            <div className='flex gap-4 '>
              <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                <SiReact className='w-10 h-10' />
              </span>
              <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                <SiAndroidstudio className='w-10 h-10' />
              </span>
              <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                <SiJavascript className='w-10 h-10' />
              </span>
              <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                <SiTailwindcss className='w-10 h-10' />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* For the right homepage */}
      <div className='flex relative w-full  lgl:w-1/2 justify-center items-center'>
        <div className='absolute button-0 w-[350px] h-[350px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex rounded-lg'></div>
        <img
          className='homeImg w-[300px] h-[400px] lgl:w-[350px] lgl:w-[550px] rounded-lg z-10 mt-1rem'
          src='.\images\home1.jpg'
          alt='ceo'
        />
      </div>
    </section>
  );
};
export default Banner;
