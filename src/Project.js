import React, { Component } from 'react';

export default function Project({ contentfulFields }) {
  var projectItems = [];
  if (contentfulFields) {
    projectItems = contentfulFields.projectItems.map((d) => d.fields);
  }

  // <div className='background-green'>
  //   <h3>{contentfulFields.projectTitle}</h3>
  //   {listItems}

  //   <li key={d.fields.projectItemName}>
  //   <img src={d.fields.projectItemImage.fields.file.url}></img>
  //   {d.fields.projectItemName} - {d.fields.projectItemDescription}
  // </li>
  // </div>
  return (
    <div className='bg-framtidni-green py-24 sm:py-32'>
      <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
        {/* <div className='max-w-2xl'> */}
        <div className='mx-auto lg:mx-0'>
          <h2 className='text-center font-bold tracking-tight text-gray-50 sm:text-4xl'>
            {contentfulFields.projectTitle}
          </h2>
        </div>
        {/* <div className='mx-auto grid max-w-2xl grid-cols-1  lg:mx-0 lg:max-w-none lg:grid-cols-3'> */}
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {projectItems.map((project) => (
            <div
              key={project.projectItemName}
              className='flex max-w-xl flex-col items-start justify-between'
            >
              <div className='group relative'>
                <img
                  alt=''
                  src={project.projectItemImage.fields.file.url}
                  className='h-200 w-200 rounded-md bg-gray-50'
                />
                <h3 className='mt-3 text-center font-semibold leading-6 text-gray-50'>
                  <p
                  //href={post.href}
                  >
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

        {/* <ul
          role='list'
          className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'
        >
          {projectItems.map((project) => (
            <li key={project.projectItemName}>
              <div className='flex items-center gap-x-6'>
                <img
                  alt=''
                  src={project.projectItemImage.fields.file.url}
                  className='h-16 w-16 rounded-full'
                />
                <div>
                  <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-50'>
                    {project.projectItemName}
                  </h3>
                  <p className='text-sm font-semibold leading-6 text-indigo-600'>
                    {project.projectItemDescription}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
