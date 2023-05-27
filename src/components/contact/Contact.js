import { useState } from 'react';
import Title from '../layout/Title';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === '') {
      setErrMsg('Username is Required!');
    } else if (phoneNumber === '') {
      setErrMsg('Phone Number is required');
    } else if (email === '') {
      setErrMsg('Please provide your Email!');
    } else if (!emailValidation(email)) {
      setErrMsg('Please Provide a valid Email!');
    } else if (subject === '') {
      setErrMsg('Please Provide a Subject!');
    } else if (subject === '') {
      setErrMsg('Message is required!');
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Message has been sent Successfully!`
      );
      setErrMsg('');
      setUsername('');
      setPhoneNumber('');
      setEmail('');
      setMessage('');
      setSubject('');
    }
  };
  return (
    <section
      id='contacts'
      className='w-full py-20 border-b-[1px] border-b-black px-5'
    >
      <div className='items-center text-center justify-center'>
        <Title title='CONTACT ' des='Contact Me' />
      </div>
      <div className='w-full'>
        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between gap-6'>
          <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-center'>
            <img
              className='w-full h-64 object-cover rounded-lg mb-2'
              src={require('../../imgs/handshake.jpg')}
              alt='handshake'
            />
            <div className='flex flex-col gap-4'>
              <h3 className='text-3xl font-bold text-white'>Victor Okeke</h3>
              <p className='text-lg font-normal text-gray-400'>
                Front End and Mobile App Developer
              </p>
              <p className='text-base text-gray-400 tracking-wide'>
                Ready to give your front end website the best and modern
                stylings there are. Also deal on mobile app development, photo
                and video editing
              </p>
              <p className='text-gray-400 flex items-center gap-2'>
                {' '}
                Phone: <span className='text-lightText'>
                  +234 9029515921
                </span>{' '}
              </p>
              <p className='text-base text-gray-400 flex items-center gap-2 '>
                Email:{' '}
                <span className='text-lightText'>victorokeke64@gmail.com</span>
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <h2 className='text-base font-titleFont mb-4'>FIND ME IN</h2>
              <div className='flex gap-4'>
                <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                  {' '}
                  <FaFacebook className='w-10 h-10' />{' '}
                </span>
                <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                  {' '}
                  <FaTwitter className='w-10 h-10' />{' '}
                </span>
                <span className='bannerIcon w-10 h-10 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex item-center justify-center rounded-md shadow-shadowOne hover: bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300'>
                  {' '}
                  <FaLinkedin className='w-10 h-10' />{' '}
                </span>
              </div>
            </div>
          </div>

          <div className='w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-6 p-4 lgl:p-9 rounded-lg shadow-shadowOne '>
            <form className='w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl-py-5'>
              {errMsg && (
                <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>
                  {successMsg}
                </p>
              )}
              <div className='w-full flex flex-col lgl:flex-row gap-10'>
                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                  <div>
                    <p className='uppercase text-sm text-gray-400 tracking-wide'>
                      Your Name
                    </p>
                  </div>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === 'Username is Required!' &&
                      'outline-designColor'
                    } 'w-full h-12 rounded-lg border-b-[1px] border-b-gray-800 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300' `}
                    type='text'
                  />
                </div>
                <div className='w-full lgl:w-1/2 flex flex-col gap-4'>
                  <div>
                    <p className='uppercase text-sm text-gray-400 tracking-wide'>
                      Phone Number
                    </p>
                  </div>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === 'Phone Number is Required!' &&
                      'outline-designColor'
                    } 'w-full h-12 rounded-lg border-b-[1px] border-b-gray-800 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300' `}
                    type='text'
                  />
                </div>
              </div>
              <div>
                <div className='w-full flex flex-col gap-4'>
                  <div>
                    <p className='uppercase text-sm text-gray-400 tracking-wide'>
                      Email
                    </p>
                  </div>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`${
                      errMsg === 'Please provide your Email!' &&
                      'outline-designColor'
                    } 'w-full h-12 rounded-lg border-b-[1px] border-b-gray-800 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300' `}
                    type='email'
                  />
                </div>
              </div>
              <div className='w-full flex flex-col gap-4'>
                <div>
                  <p className='uppercase text-sm text-gray-400 tracking-wide'>
                    Subject
                  </p>
                </div>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === 'Please Provide a Subject!' &&
                    'outline-designColor'
                  } 'w-full h-12 rounded-lg border-b-[1px] border-b-gray-800 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300' `}
                  type='text'
                />
              </div>
              <div className='w-full flex flex-col gap-4'>
                <div>
                  <p className='uppercase text-sm text-gray-400 tracking-wide'>
                    Message
                  </p>
                </div>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === 'Message is required!' && 'outline-designColor'
                  }  'w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 py-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300 resize-none' `}
                  cols='30'
                  rows='8'
                ></textarea>
              </div>
              <div className='w-full'>
                <button
                  onClick={handleSend}
                  className='w-full h-12 rounded-lg bg-[#141518] text-gray-400 tracking-wider
                hover:text-white text-base duration-300 hover:border-[1px] hover:border-designColor border-transparent'
                >
                  SEND MESSAGE
                </button>
              </div>
              {errMsg && (
                <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
