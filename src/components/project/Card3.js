import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
const Card3 = ({ title, des }) => {
  return (
    <div className='w-full p-6 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-1000'>
      {' '}
      <div className='w-full h-[70%] over-flow-hidden rounded-lg'>
        <img
          className='w-[285px] h-[177px] object-cover group-hover:scale-110 duration-300 cursor-pointer mb-2 rounded-lg'
          src={require('../../imgs/SimpleCalc.png')}
          alt='Simple Calculator'
        />
      </div>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-titleFont font-bold text-designColor'>
          {' '}
          {title}
        </h2>
        <div className='gap-2'>
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
        <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>
          {des}
        </p>
      </div>
    </div>
  );
};
export default Card3;
