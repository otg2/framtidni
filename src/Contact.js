import React, { Component } from 'react';
import './SendEmail';
import SendEmail from './SendEmail';

export default function Contact({ contentfulFields }) {
  return (
    <div className='background-green'>
      <div>
        <h3>{contentfulFields.contactTitle}</h3>
        <p>{contentfulFields.contactDescription}</p>
        <ul>
          <li>
            <strong>Netfang:</strong> {contentfulFields.contactEmail}
          </li>
          <li>
            <strong>Sími:</strong> {contentfulFields.contactPhoneNumber}
          </li>
          <li>
            <strong>Heimilisfang:</strong>
            {contentfulFields.contactLocation}
          </li>
        </ul>
      </div>
      <div>
        <SendEmail contentfulFields={contentfulFields} />
      </div>
    </div>
  );
}
