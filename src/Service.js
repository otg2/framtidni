import React, { Component } from 'react';

export default function Service({ contentfulFields, customRef }) {
  var serviceItems = [];
  if (contentfulFields) {
    serviceItems = contentfulFields.serviceItems.map((d) => d.fields);
  }

  return (
    <div ref={customRef} className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto lg:mx-0 pb-2'>
          <h2 className='text-center font-bold tracking-tight text-orange-500 text-4xl'>
            {contentfulFields.serviceTitle}
          </h2>
        </div>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {serviceItems.map((service) => (
            <article
              key={service.serviceItemTitle}
              className='flex max-w-xl flex-col items-start justify-between'
            >
              <div className='group relative'>
                <h3 className='mt-3 text-lg font-bold leading-6 text-indigo-800'>
                  <p
                  //href={post.href}
                  >
                    <span className='absolute inset-0' />
                    {service.serviceItemTitle}
                  </p>
                </h3>
                <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                  {service.serviceItemDescription}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    // <div>
    //   <h3>{contentfulFields.serviceTitle}</h3>
    //   {listItems}
    // </div>
  );
}
