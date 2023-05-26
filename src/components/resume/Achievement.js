import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex-col lgl:flex-row gap-10 lgl:gap-20 mt-5'
    >
      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'> 2016-2017 </p>
          <h2 className='text-3xl md:text-4xl font-bold'>Senior Prefect</h2>
        </div>
        <div className='mt-14 w-1/2 h-[1000px] border-l-[6px] bmt-6 lgl:mt-14  w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30'>
          <ResumeCard
            title='Completed Primary Education'
            subTile='Completed the 6 years course of Primary Education'
            location='Success'
          />
          <ResumeCard
            title='Completed Secondary Education'
            subTile='Completed the 6 years course of Secondary Education'
            location='Success'
          />
          <ResumeCard
            title='Yet to Complete Tertiary Education'
            subTile='Yet to obtain a bachelors degree'
            location='Pending'
          />
          <ResumeCard
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
