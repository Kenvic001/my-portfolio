const ResumeCard3 = ({ title, subTitle, des, location }) => {
  return (
    <div className='w-full h-[200px] group flex'>
      <div className='w-10 h-[6px] bg-black bg-opacity-40 mt-16 relative'>
        <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
          <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'></span>
        </span>
      </div>
      <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg lgl:px-10 p-4 flex flex-col justify-center lgl:gap-10 gap-5 shadow-shadowOne'>
        <div className='flex flex-col lgl:flex-row justify-between lgl:items-center gap-4 lgl:gap-0'>
          <div>
            <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300'>
              {title}
            </h3>
            <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>
              {subTitle}
            </p>
          </div>
          <div className='px-12 mdl:px-4'>
            <p className='px-4 py-2 text-designColor bg-black bg-opacity-25 flex justify-center items-center shadow-shadowOne text-sm font-medium rounded-lg'>
              {location}
            </p>
          </div>
        </div>
        <div>
          <p className='text-sm md:text-base mt-2 text-gray-400 group-hover:text-white duration-300'>
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResumeCard3;
