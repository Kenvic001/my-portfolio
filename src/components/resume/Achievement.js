import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';
import ResumeCard3 from './ResumeCard3';

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 mt-5 px-5'
    >
      <div className='w-full mdl:w-1/2'>
        <div className='py-6 px-5 lgl:py-12 font-titleFont flex flex-col gap-4 text-center'>
          <p className='text-sm text-designColor tracking-[4px]'> FEATURES </p>
          <h2 className='text-3xl md:text-4xl font-bold'>THESE AND MORE</h2>
        </div>
        <div className='mt-14 lgl:h-[450px] border-l-[6px] mt-6 lgl:mt-14  w-full h-[450px] border-l-[6px] border-l-black border-opacity-30  flex flex-col gap-10'>
          <ResumeCard3
            title='Completed Primary Education'
            subTile='Completed the 6 years course of Primary Education'
            location='Success'
          />
          <ResumeCard3
            title='Completed Secondary Education'
            subTile='Completed the 6 years course of Secondary Education'
            location='Success'
          />
        </div>
      </div>
      <div className='w-full mdl:w-1/2'>
        <div className='mt-14  lgl:h-[450px] border-l-[6px] mt-6 lgl:mt-60  w-full h-[450px] border-l-[6px] border-l-black border-opacity-30  flex flex-col gap-10'>
          <ResumeCard3
            title='Yet to Complete Tertiary Education'
            subTile='Yet to obtain a bachelors degree'
            location='Pending'
          />
          <ResumeCard3
            title='MacMillian Team Success'
            subTile='Had the honours of representing my school in a macmillian team success competition 2011'
            location='1st Place'
          />
        </div>
      </div>
    </motion.div>
  );
};
export default Achievement;
