import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function SendEmail({ contentfulFields }) {
  const [sendToSelf, setSendToSelf] = useState(true);
  const handleSendToSelf = (e) => {
    setSendToSelf(!sendToSelf);
  };

  const emailForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    var sendSuccess = false;
    // https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/
    emailjs
      .sendForm('service_4zl6mh2', 'template_waor0r4', emailForm.current, {
        publicKey: 'AKkcCk3ehaSqqM1q5',
      })
      .then(
        () => {
          console.log('Email sent to framtidni');
          sendSuccess = true;
        },
        (error) => {
          alert(
            'Ekki tókst að senda tölvupóst á okkur. Reyndu aftur eða hafðu samband á öðruvísi hátt'
          );
          console.log('Failed', error);
        }
      );
    if (sendToSelf) {
      emailjs
        .sendForm('service_4zl6mh2', 'template_obt1icj', emailForm.current, {
          publicKey: 'AKkcCk3ehaSqqM1q5',
        })
        .then(
          () => {
            console.log('Copy of email sent to framtidni');
            sendSuccess = true;
          },
          (error) => {
            console.log('Failed', error);
          }
        );
    }
    if (sendSuccess) {
      emailForm.current.reset();
    }
  };

  return (
    <div className='container px-5 mx-auto'>
      <form className='mx-auto' ref={emailForm} onSubmit={handleSubmit}>
        <div className='flex flex-wrap -m-2'>
          <div className='w-1/2 p-2'>
            <input
              className='w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-full focus:outline-none focus:border-secondary'
              placeholder={contentfulFields.contactEmailName}
              type='text'
              name='from_name'
            ></input>
          </div>
          <div className='w-1/2 p-2'>
            <input
              className='w-full px-4 py-2 text-white bg-transparent border border-gray-400 rounded-full focus:outline-none focus:border-secondary'
              placeholder={contentfulFields.contactEmailFrom}
              type='email'
              name='from_email'
            ></input>
          </div>
          <div className='w-full p-2'>
            <textarea
              className='block w-full h-48 px-4 py-2 text-white bg-transparent border border-gray-400 rounded-md resize-none focus:outline-none focus:border-secondary'
              placeholder={contentfulFields.contactEmailSubject}
              name='message'
            ></textarea>
          </div>
          <div className='w-full p-2 items-start'>
            <div className='flex items-center float-start'>
              <input
                checked={sendToSelf}
                type='checkbox'
                onChange={handleSendToSelf}
                className='w-8 h-8 accent-checkbox-green'
              />

              <label
                forhtml='checked-checkbox'
                className='ms-2 text-sm font-medium text-gray-100'
              >
                Senda mér afrit af skilaboðum
              </label>
            </div>
            <button
              type='submit'
              className='flex px-8 py-2 mx-auto text-lg text-white rounded-full bg-orange-600 hover:bg-orange-dark focus:outline-none float-end disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
            >
              Senda
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SendEmail;
