import Title from '../layout/Title';
import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { RiStarFill } from 'react-icons/ri';
import { useState } from 'react';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10'
      onClick={onClick}
    >
      {' '}
      <HiArrowRight />{' '}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10'
      onClick={onClick}
    >
      {' '}
      <HiArrowLeft />{' '}
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            margin: '20px',
          }}
        >
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: '12px',
                height: '12px',
                color: 'blue',
                background: '#ff014f',
                borderRadius: '50%',
                cursor: 'pointer',
              }
            : {
                width: '12px',
                height: '12px',
                color: 'blue',
                background: 'gray',
                borderRadius: '50%',
                cursor: 'pointer',
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id='testimonial'
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='items-center text-center justify-center'>
        <Title title='WHAT CLIENTS SAY' des='Testimonial' />
      </div>
      <div className='max-w-6xl mx-auto  '>
        <Slider {...settings}>
          <div className='w-full'>
            <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
              <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                <img
                  className='lgl:h-[300px] lgl:w-[350px] w-[350px] h-[300px] md:h-[150px] md:w-full rounded-lg object-cover '
                  src={require('../../imgs/Testi1.jpg')}
                  alt='Testifier1'
                />
                <div className='w-full flex flex-col justify-end '>
                  <p className='text-sm uppercase text-designColor tracking-wide mb-2'>
                    Bound - Trolola{' '}
                  </p>
                  <h3 className='text-2xl font-bold '>Adewale Peters</h3>
                  <p className='text-base tracking-wide text-gray-500'>
                    Operation Officer{' '}
                  </p>
                </div>
              </div>
              <div className='w-full lgl:w-[60%] h-full'>
                <FaQuoteRight className='w-[50px] h-[50px] lgl:w-[100px] lgl:h-[100px]' />
                <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b ] rounded-lg shadow-shadowOne mt-11 p-4 lgl:p-8 justify-center flex flex-col gap-4 lgl:gap-8'>
                  <div className='flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900'>
                    <div>
                      <h3 className='text-xl lgl:text-2xl font-medium tracking-wide'>
                        BlueSky Global Tech
                      </h3>
                      <p className='text-base text-gray-400 mt-3'>
                        via Jobberman -April 6, 2018 - Sept 9, 2022{' '}
                      </p>
                    </div>
                    <div className='text-yellow-500 flex gap-1'>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p>
                    This guy is a professional, good at his job. He's patient,
                    and ready to accept some changes along the way. I highly
                    recommend.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
              <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                <img
                  className='lgl:h-[300px] lgl:w-[350px] w-[350px] h-[300px] md:h-[150px] md:w-full rounded-lg object-cover '
                  src={require('../../imgs/q2.jpg')}
                  alt='Testifier2'
                />
                <div className='w-full flex flex-col justify-end '>
                  <p className='text-sm uppercase text-designColor tracking-wide mb-2'>
                    Bound - Trolola{' '}
                  </p>
                  <h3 className='text-2xl font-bold '>Nelson Okoye</h3>
                  <p className='text-base tracking-wide text-gray-500'>
                    Operation Officer{' '}
                  </p>
                </div>
              </div>
              <div className='w-full lgl:w-[60%] h-full'>
                <FaQuoteRight className='w-[50px] h-[50px] lgl:w-[100px] lgl:h-[100px]' />
                <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b ] rounded-lg shadow-shadowOne mt-11 p-4 lgl:p-8 justify-center flex flex-col gap-4 lgl:gap-8'>
                  <div className='flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900'>
                    <div>
                      <h3 className='text-xl lgl:text-2xl font-medium tracking-wide'>
                        BlueSky Global Tech
                      </h3>
                      <p className='text-base text-gray-400 mt-3'>
                        via Jobberman -April 6, 2018 - Sept 9, 2022{' '}
                      </p>
                    </div>
                    <div className='text-yellow-500 flex gap-1'>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p>
                    This guy is a professional, good at his job. He's patient,
                    and ready to accept some changes along the way. I highly
                    recommend.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
              <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                <img
                  className='lgl:h-[300px] lgl:w-[350px] w-[350px] h-[300px] md:h-[150px] md:w-full rounded-lg object-cover '
                  src={require('../../imgs/Testi3.jpg')}
                  alt='Testifier3'
                />
                <div className='w-full flex flex-col justify-end '>
                  <p className='text-sm uppercase text-designColor tracking-wide mb-2'>
                    Bound - Trolola{' '}
                  </p>
                  <h3 className='text-2xl font-bold '>Anthony Smith</h3>
                  <p className='text-base tracking-wide text-gray-500'>
                    Operation Officer{' '}
                  </p>
                </div>
              </div>
              <div className='w-full lgl:w-[60%] h-full'>
                <FaQuoteRight className='w-[50px] h-[50px] lgl:w-[100px] lgl:h-[100px]' />
                <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b ] rounded-lg shadow-shadowOne mt-11 p-4 lgl:p-8 justify-center flex flex-col gap-4 lgl:gap-8'>
                  <div className='flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900'>
                    <div>
                      <h3 className='text-xl lgl:text-2xl font-medium tracking-wide'>
                        BlueSky Global Tech
                      </h3>
                      <p className='text-base text-gray-400 mt-3'>
                        via Jobberman -April 6, 2018 - Sept 9, 2022{' '}
                      </p>
                    </div>
                    <div className='text-yellow-500 flex gap-1'>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p>
                    This guy is a professional, good at his job. He's patient,
                    and ready to accept some changes along the way. I highly
                    recommend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Testimonial;
