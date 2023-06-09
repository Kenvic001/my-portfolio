import ResumeCard from './ResumeCard';
import ResumeCard2 from './ResumeCard2';
import { motion } from 'framer-motion';
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 mt-5 px-5'
    >
      <div className='w-full mdl:w-1/2 '>
        <div className='py-6 px-5 lgl:py-12 font-titleFont flex flex-col gap-4 text-center'>
          <p className='text-sm text-designColor tracking-[4px]'> 2002-2023</p>
          <h2 className='text-3xl md:text-4xl font-bold'>Leadership Quality</h2>
        </div>
        <div className='mt-6 lgl:mt-14  w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30  flex flex-col gap-10'>
          <ResumeCard
            title='Senior Prefect'
            subTitle='Fountain International High School (2016-2017)'
            des='Headed the school student ody for a duration of 1 year'
            location='PortHarcourt'
          />
          <ResumeCard
            title='Member of Class Excos'
            subTitle='University of Nigeria, Nsukka (2020-Present)'
            des='Currently an active member of the class executives, assisting the class representaive'
            location='Enugu'
          />
          <ResumeCard
            title='Instructor'
            subTitle='Church and School social activities'
            des='Been in-charge of directing some of the affairs in school and in church'
            location='Lagos'
          />
        </div>
      </div>
      <div className='w-full h-[700px] mdl:w-1/2'>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4 text-center'>
          <p className='text-sm text-designColor tracking-[4px]  '>
            {' '}
            2023-Present
          </p>
          <h2 className='text-3xl md:text-4xl font-bold'>Work Experience</h2>
        </div>

        <div className='mt-6 lgl:mt-14  w-full h-[600px] border-l-[6px] border-l-black border-opacity-30  flex flex-col gap-10'>
          <ResumeCard2
            title='Front End Developer Intern'
            subTitle='ICT Centre, UNN (2023-Present)'
            des='Currently working as an IT student at an ICT centre. Currently working with other front and back end developers to build awesome projects'
            location='Enugu'
          />
          <ResumeCard2
            title='Networking Intern'
            subTile='Data Centre, UNN'
            des='worked for a few weeks as an intern at Data centre. '
            location='Enugu'
          />
        </div>
      </div>
    </motion.div>
  );
};
export default Experience;
