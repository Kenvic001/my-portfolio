import Title from '../layout/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from './Experience';
import { useState } from 'react';
const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='items-center text-center justify-center'>
        <Title title='3+ YEARS OF EXPERIENCE' des='My Resume' />
      </div>
      <div className='flex justify-center items-center text-center'>
        <ul className='w-full grid grid-cols-4'>
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } 'w-full h-20 bg-black bg-opacity-25 text-gray-300 flex text-xl justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none'`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? 'border-designColor rounded-lg' : 'border-transparent'
            } 'w-full h-20 bg-black bg-opacity-25 text-gray-300 flex text-xl justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none'`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } 'w-full h-20 bg-black bg-opacity-25 text-gray-300 flex text-xl justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none'`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } 'w-full h-20 bg-black bg-opacity-25 text-gray-300 flex text-xl justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none'`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achievementData && <Achievement />}
      {/* <Education />
      <Skills />
      <Experience />
      <Achievement /> */}
    </section>
  );
};
export default Resume;
