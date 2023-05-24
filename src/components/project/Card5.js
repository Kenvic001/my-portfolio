import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
const Card5 = ({ title, des }) => {
  return (
    <div className='w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000'>
      <div className='w-full h-[50%] over-flow-hidden rounded-lg gap-2'>
        <img
          className='w-[285px] h-[177px] object-cover group-hover:scale-110 duration-300 cursor-pointer mb-8 rounded-lg'
          src={require('../../imgs/AirRaid.jpg')}
          alt='Animated Web'
        />
      </div>
      <div className='flex items-center justify-between mt-10'>
        <h2 className='text-lg font-titleFont font-bold text-designColor'>
          {' '}
          {title}
        </h2>
        <div className=' gap-1'>
          {' '}
          <span className='text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
            <BsGithub />
          </span>
          <span className='text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer'>
            <FaGlobe />
          </span>
        </div>
      </div>
      <div>
        <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>{des}</p>
      </div>
    </div>
  );
};
export default Card5;
