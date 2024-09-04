import React, { Component } from 'react';
import './SendEmail';
import SendEmail from './SendEmail';

import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid';

export default function Contact({ contentfulFields, customRef }) {
  var contactInfo = [];
  if (contentfulFields) {
    contactInfo = [
      {
        href: 'tel:' + contentfulFields.contactPhoneNumber,
        name: contentfulFields.contactPhoneNumber,
        icon: (
          <PhoneIcon
            aria-hidden='true'
            className='absolute left-1 top-1 h-5 w-5 text-gray-200'
          />
        ),
      },
      {
        href: {},
        name: contentfulFields.contactEmail,
        icon: (
          <EnvelopeIcon
            aria-hidden='true'
            className='absolute left-1 top-1 h-5 w-5 text-gray-200'
          />
        ),
      },
      {
        href: contentfulFields.contactInstagram,
        name: contentfulFields.contactInstagram,
        icon: (
          <a
            className='absolute left-1 top-1 h-5 w-5 text-gray-200'
            href={contentfulFields.contactInstagram}
          >
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
            </svg>
          </a>
        ),
      },
      {
        href: contentfulFields.contactFacebook,
        name: contentfulFields.contactFacebook,
        icon: (
          <a
            className='absolute left-1 top-1 h-5 w-5 text-gray-200'
            href={contentfulFields.contactFacebook}
          >
            <svg
              fill='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
            </svg>
          </a>
        ),
      },
    ];
  }

  return (
    <div className='overflow-hidden bg-framtidni-green py-12 sm:py-12'>
      <div ref={customRef} className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl'>
                {contentfulFields.contactTitle}
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-200'>
                {contentfulFields.contactDescription}
              </p>
              <dl className='mt-10 max-w-xl space-y-5 text-base leading-7 text-gray-600 lg:max-w-none'>
                {contactInfo.map((info) => (
                  <div key={info.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-gray-400'>
                      {info.icon}
                      <a href={info.href}>{info.name}</a>
                    </dt>{' '}
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <SendEmail contentfulFields={contentfulFields} />
        </div>
      </div>
    </div>
  );
}
