import { navLinksdata } from '../../constants';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar border-b-[1px] border-b-gray-600 sticky top-0 bg-bodyColor z-50'>
      <div className='w-full h-24 mx-auto flex justify-between items-center font-titleFont '>
        <div className='flex gap-0.7'>
          {' '}
          <img className='img' src='.\images\logoMain.jpg' alt='logo' />
          <h2 className='font-bold text-4xl mx-1 mt-3'>My Bio</h2>
        </div>
      </div>
      <div>
        <ul className='list'>
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
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
      </div>
    </div>
  );
};
export default Navbar;
