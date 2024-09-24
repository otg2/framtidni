import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { json } from 'react-router-dom';

function SendEmail({ contentfulFields }) {
  const [isSending, setIsSending] = useState(false);
  const [sendToSelf, setSendToSelf] = useState(true);

  const handleSendToSelf = (e) => {
    setSendToSelf(!sendToSelf);
  };

  const emailForm = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = (emailForm) => {
    const errors = {};
    // Name
    if (!emailForm.current[0].value.trim()) {
      errors.name = 'Nafn vantar';
    }
    // Email
    if (!emailForm.current[1].value.trim()) {
      errors.email = 'Netfang vantar';
    } else if (!/\S+@\S+\.\S+/.test(emailForm.current[1].value)) {
      errors.email = 'Netfang er vitlaust';
    }
    // Text
    if (!emailForm.current[2].value.trim()) {
      errors.message = 'Vantar skilaboð';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(emailForm);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      console.log('Form validated successfully!');

      setIsSending(true);
      // https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/
      emailjs
        .sendForm('service_4zl6mh2', 'template_waor0r4', emailForm.current, {
          publicKey: 'AKkcCk3ehaSqqM1q5',
        })
        .then(
          () => {
            console.log('Email sent to framtidni');
            if (sendToSelf) {
              emailjs
                .sendForm(
                  'service_4zl6mh2',
                  'template_obt1icj',
                  emailForm.current,
                  {
                    publicKey: 'AKkcCk3ehaSqqM1q5',
                  }
                )
                .then(
                  () => {
                    console.log('Copy of email sent to framtidni');
                    console.log('Reset form');
                    emailForm.current.reset();
                    setErrors({});
                    setIsSending(false);
                  },
                  (error) => {
                    console.log('Failed to send to self', error);
                  }
                );
            } else {
              console.log('Reset form');
              emailForm.current.reset();
              setErrors({});
              setIsSending(false);
            }
          },
          (error) => {
            alert(
              'Ekki tókst að senda tölvupóst á okkur. Reyndu aftur eða hafðu samband á öðruvísi hátt'
            );
            console.log('Failed to send to framtidni', error);
          }
        );
    } else {
      console.log('Form submission failed due to validation errors.');
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
              className='flex px-8 py-2 mx-auto text-lg text-white rounded-full bg-orange-600 hover:bg-orange-dark focus:outline-none float-end disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
              disabled={isSending}
            >
              {!isSending ? 'Senda' : 'Sendist...'}
            </button>
          </div>
          <p className='flex px-2 py-2 mx-auto text-md text-red-900 font-bold'>
            {errors.name}
          </p>
          <p className='flex px-2 py-2 mx-auto text-md text-red-900 font-bold'>
            {errors.email}
          </p>
          <p className='flex px-2 py-2 mx-auto text-md text-red-900 font-bold'>
            {errors.message}
          </p>
        </div>
      </form>
    </div>
  );
}

export default SendEmail;
