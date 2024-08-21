import React, { useRef, Component, useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

export default function About({ contentfulFields, customRef }) {
  var skillItems = [];
  if (contentfulFields) {
    skillItems = contentfulFields.skillItems.map((d) => d.fields);
  }

  return (
    <div
      ref={customRef}
      className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'
    >
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <h2 className='mt-2 text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl'>
                {contentfulFields.aboutTitle}
              </h2>
              <p className='mt-6 text-xl leading-8 text-gray-700'>
                {contentfulFields.aboutDescription}
              </p>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <img
            alt=''
            src={
              contentfulFields.aboutImage
                ? contentfulFields.aboutImage.fields.file.url
                : null
            }
            className='w-[12rem] max-w-none rounded-xl sm:w-[25rem]'
          />
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg'>
              <h4 className='font-bold tracking-tight text-indigo-700 sm:text-2xl'>
                {contentfulFields.aboutSkillTitle}
              </h4>
              <ul role='list' className='mt-8 space-y-8 text-gray-800'>
                {skillItems.map((skill) => (
                  <li className='flex gap-x-3' key={skill.skillItemTitle}>
                    <CheckIcon
                      aria-hidden='true'
                      className='mt-1 h-5 w-5 flex-none text-indigo-800'
                    />
                    <span>
                      <strong className='font-semibold text-indigo-800'>
                        {skill.skillItemTitle} -
                      </strong>{' '}
                      {skill.skillItemDescription}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
