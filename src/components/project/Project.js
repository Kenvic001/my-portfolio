import Title from '../layout/Title';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import ProjectCards from './ProjectCards';

const Project = () => {
  return (
    <section
      id='project'
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center items-center text-center'>
        <Title
          title='VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK'
          des='My Projects'
        />
      </div>
      <div className='grid px-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectCards
          title='Amazon Mini Clone'
          des='An awesome functional front end web developer using HTML, Javascript, React, Css and Tailwindcss'
        ></ProjectCards>
        <Card2
          title='Game App'
          des='An awesome functional front end web developer using HTML, Javascript, React, Css and Tailwindcss'
        />
        <Card3
          title='Simple Calc. App'
          des='An awesome functional front end web developer using HTML, Javascript, React, Css and Tailwindcss'
        />

        <Card4
          title='Video Editing'
          des='An awesome functional front end web developer using HTML, Javascript, React, Css and Tailwindcss'
        />
        <Card5
          title='Animated Tea Web'
          des='A very dynamic website that is fully animated. It shows a tea mug bringing out steam if a temperature value above 40 degrees is entered. It was done with HTML and CSS'
        />
      </div>
    </section>
  );
};
export default Project;
