import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex gap-20 mt-5'
    >
      <div className='w-1/2'>
        <div className='py-12 font-titleFont'>
          <p className='text-sm text-designColor tracking-[4px]'> 2002-2023</p>
          <h2 className='text-4xl font-bold'>EDUCATION</h2>
        </div>
        <div className='w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='BSc in Electronic Engineering'
            subTitle='University of Nigeria, Nsukka (2018-2023)'
            des='Studied Electronic and Computer Engineering with an outstanding result'
            location='Enugu'
          />
          <ResumeCard
            title='SSCE, High School'
            subTitle='Fountain Int`l High School (2011-2017)'
            des='Completed my high school education in PortHarcourt, Rivers state'
            location='Rivers'
          />
          <ResumeCard
            title='Primary Education'
            subTitle='Rose Bethel & Emmannah Kiddies (2006-2011)'
            des='Studied Electronic and Computer Engineering with an outstanding result'
            location='Lagos'
          />
        </div>
      </div>
      <div className='w-1/2'>
        <div>
          <div className='py-12 font-titleFont'>
            <p className='text-sm text-designColor tracking-[4px]'>
              {' '}
              2023-Present
            </p>
            <h2 className='text-4xl font-bold'>Work Experience</h2>
          </div>
        </div>
        <div className='w-full h-[800px] border-l-[6px] border-l-black border-opacity-30'>
          <ResumeCard
            title='Front End Developer Intern'
            subTitle='ICT Centre, UNN (2023-Present)'
            des='Currently working as an IT student at an ICT centre. Currently working with other front and back end developers to build awesome projects'
            location='Enugu'
          />
        </div>
      </div>
    </motion.div>
  );
};
export default Education;
