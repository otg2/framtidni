import React, { useState } from 'react';
//import emailjs from 'emailjs-com';

function SendEmail({ contentfulFields }) {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='from_name'
        placeholder={contentfulFields.contactEmailName}
        value={toSend.from_name}
        onChange={handleChange}
      />
      <input
        type='text'
        name='reply_to'
        placeholder={contentfulFields.contactEmailFrom}
        value={toSend.reply_to}
        onChange={handleChange}
      />
      <textarea
        name='message'
        placeholder={contentfulFields.contactEmailSubject}
        value={toSend.message}
        onChange={handleChange}
      />
      <button type='submit'>Hafa samband</button>
    </form>
  );
}

export default SendEmail;
