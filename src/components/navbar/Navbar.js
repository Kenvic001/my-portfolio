import { navLinksdata } from '../../constants';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='navbar px-5 border-b-[1px] border-b-gray-600 sticky top-0 bg-bodyColor z-50'>
      <div
        className='w-full h-25 mx-auto flex gap-0 lgl:
      justify-between items-center font-titleFont '
      >
        <div className='flex gap-0.7 relative'>
          {' '}
          <img
            className='w-[70px] h-[70px] md:w-[70px] md:h-[70px] rounded-full lg:rounded-full'
            src='.\images\logoMain.jpg'
            alt='logo'
          />
          <h2 className='font-bold text-3xl lg:text-4xl mx-1 mt-3'>My Bio</h2>
        </div>
      </div>
      <div>
        <ul className='list hidden flex p-2 lgl:p-5 mdl:inline-flex items-center gap-2 mdl:gap-6 lg:gap-10'>
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className='sm:hidden flex mdl:inline-flex items-center gap-2 mdl:gap-6 lg:gap-10 text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
              key={_id}
            >
              <Link
                activeClass='active'
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className='text-xl mdl:hidden w-10 h-10 flex inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className='w-[80%] h-screen overflow absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide'>
            <div className='flex flex-col gap-4 py-2 relative '>
              <div>
                <div className='flex gap-2'>
                  <img
                    className='w-[10%] md:w-[10%] rounded-full'
                    src='.\images\logoMain.jpg'
                    alt='logo'
                  />
                  <h2 className='font-bold text-2xl lg:text-4xl mx-1 mt-3'>
                    My Bio
                  </h2>
                </div>
                <p className='text-sm text-gray-400 mt-2'>
                  A Professional web developer and an android app developer. A
                  software engineer, a student of Electronic and Computer
                  Engineering, UNN.
                </p>
              </div>
              <div>
                <ul className='flex flex-col gap-4 mb-8 '>
                  {navLinksdata.map((item) => (
                    <li
                      key={item._id}
                      className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 '
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass='active'
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-base font-titleFont mb-4'>FIND ME IN</h2>
              <div className='flex gap-4'>
                <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                  {' '}
                  <FaFacebook className='w-10 h-10' />{' '}
                </span>
                <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                  {' '}
                  <FaTwitter className='w-10 h-10' />{' '}
                </span>
                <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                  {' '}
                  <FaLinkedin className='w-10 h-10' />{' '}
                </span>
              </div>
            </div>
            <span
              className='absolute top-4 right-4 text-gray-400 hover:text-designColor  duration-300 text-2xl cursor-pointer'
              onClick={() => setShowMenu(false)}
            >
              {' '}
              <MdClose />{' '}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
