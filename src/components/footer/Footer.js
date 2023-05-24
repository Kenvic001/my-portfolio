import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      className='w-full h-auto py-20 border-b-[1px] border-b-black grid grid-cols-4 gap-8
   '
    >
      <div className='w-full h-full flex flex-col gap-4'>
        <img
          className='w-32 rounded-full'
          src={require('../../imgs/logoMain.jpg')}
          alt='Logo'
        />

        <div className='flex gap-4'>
          <span className='bannerIcon w-8 h-8 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
            {' '}
            <FaFacebookF className='w-5 h-5 ' />{' '}
          </span>
          <span className='bannerIcon w-8 h-8 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
            {' '}
            <FaTwitter className='w-5 h-5' />{' '}
          </span>
          <span className='bannerIcon w-8 h-8 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
            {' '}
            <FaLinkedin className='w-5 h-5' />{' '}
          </span>
        </div>
      </div>
      <div className='w-full h-full'>
        <h3 className='text-xl text-designColor'>QUICK LINK</h3>
        <ul className='flex flex-col gap-6 font-titleFont font-medium overflow-hidden py-6'>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              About
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Portfolio
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Services{' '}
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Blog
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Contact{' '}
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
        </ul>
      </div>
      <div className='w-full h-full'>
        <h3 className='text-xl text-designColor'>RESOURCES</h3>
        <ul className='flex flex-col gap-6 font-titleFont font-medium overflow-hidden py-6'>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Authentication
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              System Status
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Terms of Service{' '}
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Pricing{' '}
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Over Right{' '}
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
        </ul>
      </div>
      <div className='w-full h-full'>
        <h3 className='text-xl text-designColor'>DEVELOPERS</h3>
        <ul className='flex flex-col gap-6 font-titleFont font-medium overflow-hidden py-6'>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Documentation
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Services{' '}
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              API Reference{' '}
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Support{' '}
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group'>
              Open Source{' '}
              <span className='absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>{' '}
            </span>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
