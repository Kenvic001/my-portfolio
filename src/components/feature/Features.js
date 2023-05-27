import { SiRedux, SiTypescript, SiWebassembly } from 'react-icons/si';
import Title from '../layout/Title';
import Card from './Card';
import { FaGlobe, FaMobile, FaVideo } from 'react-icons/fa';

const Features = () => {
  return (
    <section
      id='features'
      className='w-full px-5 py-20  border-b-[1px] border-b-black '
    >
      <Title className='text-center' title='Feature' des='What I Do' />
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-20'>
        <Card
          title='Web Development'
          des='An awesome functional front end web developer using HTML, Javascript, React, Css and Tailwindcss'
          icon={<SiWebassembly />}
        />
        <Card
          title='Mobile App Dev'
          des='An awesome functional front end web developer using HTML, Javascript, React, Css and Tailwindcss'
          icon={<FaMobile />}
        />
        <Card
          title='Video Editor'
          des='An awesome functional front end web developer using HTML, Javascript, React, Css and Tailwindcss'
          icon={<FaVideo />}
        />
        <Card
          title='Graphic Designer'
          des='An awesome functional front end web developer using HTML, Javascript, React, Css and Tailwindcss'
          icon={<SiRedux />}
        />
        <Card
          title='SEO Optimization'
          des='An awesome functional front end web developer using HTML, Javascript, React, Css and Tailwindcss'
          icon={<FaGlobe />}
        />
        <Card
          title='Content Creator'
          des='An awesome functional front end web developer using HTML, Javascript, React, Css and Tailwindcss'
          icon={<SiTypescript />}
        />
      </div>
    </section>
  );
};
export default Features;
