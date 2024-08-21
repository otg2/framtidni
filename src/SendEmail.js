import React, { useState } from 'react';
//import emailjs from 'emailjs-com';

function SendEmail({ contentfulFields }) {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    to_email: 'framtidni@framtidni.is', // TODO: Fetch from variable
    message: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(toSend);
    /*emailjs
      .send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        toSend,
        'your_user_id' // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });*/
    setButtonDisabled(true);
  };

  return (
    <div className='container px-5 mx-auto'>
      <form className='mx-auto' onSubmit={handleSubmit}>
        <div className='flex flex-wrap -m-2'>
          <div className='w-1/2 p-2'>
            <input
              className='w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-full focus:outline-none focus:border-secondary'
              placeholder={contentfulFields.contactEmailName}
              type='text'
              name='from_name'
              onChange={handleChange}
            ></input>
          </div>
          <div className='w-1/2 p-2'>
            <input
              className='w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-full focus:outline-none focus:border-secondary'
              placeholder={contentfulFields.contactEmailFrom}
              type='email'
              name='from_email'
              onChange={handleChange}
            ></input>
          </div>
          <div className='w-full p-2'>
            <textarea
              className='block w-full h-48 px-4 py-2 text-white bg-transparent border border-gray-400 rounded-md resize-none focus:outline-none focus:border-secondary'
              placeholder={contentfulFields.contactEmailSubject}
              name='message'
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='w-full p-2 items-start'>
            <button
              type='submit'
              className='flex px-8 py-2 mx-auto text-lg text-white rounded-full bg-orange-600 hover:bg-orange-dark focus:outline-none float-end disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
              disabled={isButtonDisabled}
            >
              Senda
            </button>
          </div>
        </div>
      </form>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type='text'
    //     name='from_name'
    //     placeholder={contentfulFields.contactEmailName}
    //     value={toSend.from_name}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type='text'
    //     name='reply_to'
    //     placeholder={contentfulFields.contactEmailFrom}
    //     value={toSend.reply_to}
    //     onChange={handleChange}
    //   />
    //   <textarea
    //     name='message'
    //     placeholder={contentfulFields.contactEmailSubject}
    //     value={toSend.message}
    //     onChange={handleChange}
    //   />
    //   <button type='submit'>Hafa samband</button>
    // </form>
  );
}

export default SendEmail;
