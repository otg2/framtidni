import React, { Component } from 'react';

export default function Project({ contentfulFields, customRef }) {
  var projectItems = [];
  if (contentfulFields) {
    projectItems = contentfulFields.projectItems.map((d) => d.fields);
  }

  return (
    <div ref={customRef} className='bg-framtidni-green py-24 sm:py-32'>
      <div className='mx-auto lg:mx-0'>
        <h2 className='text-center font-bold tracking-tight text-gray-50 text-4xl pb-4'>
          {contentfulFields.projectTitle}
        </h2>
      </div>
      <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {projectItems.map((project) => (
            <div
              key={project.projectItemName}
              className='flex max-w-xl flex-col items-center justify-between'
            >
              <div className='group relative'>
                <img
                  alt=''
                  src={project.projectItemImage.fields.file.url}
                  className='h-300 w-300 rounded-md bg-gray-50 text-center'
                />
                <h3 className='mt-3 text-center font-semibold leading-6 text-gray-50'>
                  <p>
                    <span className='absolute inset-0' />
                    {project.projectItemName}
                  </p>
                </h3>
                <p className='mt-3 line-clamp-3 text-center leading-6 text-gray-300'>
                  {project.projectItemDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
