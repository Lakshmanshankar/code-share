import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f3xf7r8', 'template_tqtdcfm', form.current, 'aN-wAf-lbZE7ROZiU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="flex w-full h-fit bg-gradient-to-tr from-cyan-300 flex-col justify-center sm:flex-row sm:py-10 sm:justify-evenly">
    <div className=" w-10/12 px-10 bg-slate-50 ml-7 mt-5 rounded-md  sm:w-10/12 sm:py-5 sm:ml-24 BoxShad">
    <form ref={form} onSubmit={sendEmail} className="w-full py-10">
      <h2 className='w-full text-center font-poppins py-2 text-xl'>Contact Form</h2>
      <label className='font-poppins text-lg '>Name</label>
      <input type="text" name="user_name" className='w-full bg-sky-300 py-1 rounded-sm sm:py-4' placeholder='Enter Your Name' />
      <label className='font-poppins text-lg '>Email</label>
      <input type="email" name="user_email" className='w-full bg-sky-300 py-1 rounded-sm sm:py-4' placeholder='Enter Your Email'/>
      <label className='font-poppins text-lg' >Message</label>
      <textarea name="message" className='w-full bg-sky-300 py-1 rounded-sm ' placeholder='Enter Message Here' rows={5}/>
      <input type="submit" className='w-ful font-poppins px-10 py-3 bg-cyan-500 text-xl rounded-md hover:bg-emerald-500' value="Send" onSubmit={()=>{
        console.log("Helo")
      }}/>
    </form>
    </div>
    <div className="w-full flex justify-center mr-28 mt-5">
    <ul className="links">
    <a href='https://twitter.com/10Lakshman' className="link py-3 px-24 bg-teal-300 rounded-md hover:bg-cyan-400 mt-2 block sm:px-72 sm:text-3xl sm:font-thin sm:mt-10 sm:py-5 hover:bg-zinc-600 text-lg font-poppins text-white font-bold">Twitter</a>
    <a href='https://github.com/Lakshmanshankar' className="link py-3 px-24 rounded-md bg-teal-300 mt-2 block sm:px-72 sm:text-3xl sm:font-thin sm:mt-10 sm:py-5 hover:bg-zinc-600 text-lg font-poppins text-white font-bold">Github</a>
    <a href='https://www.linkedin.com/in/lakshmanshankar-c-210691218/' className="link py-3 px-24 bg-teal-300 rounded-md hover:bg-sky-600 mt-2 block sm:px-72 sm:text-3xl sm:font-thin sm:mt-10 sm:py-5 hover:bg-zinc-600 text-lg font-poppins text-white font-bold">LinkedIn</a>
    </ul>
    </div>
    </div>
  );
};