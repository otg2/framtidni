import React, { Component } from 'react';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function Service({ contentfulFields }) {
  var serviceItems = [];
  if (contentfulFields) {
    serviceItems = contentfulFields.serviceItems.map(
      (d) => d.fields
      /*<li key={d.fields.serviceItemTitle}>
        {d.fields.serviceItemTitle} - {d.fields.serviceItemDescription}
      </li>*/
    );
  }

  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto lg:mx-0'>
          <h2 className='text-center font-bold tracking-tight text-orange-500 sm:text-4xl'>
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
                <h3 className='mt-3 text-lg font-semibold leading-6 text-indigo-800 group-hover:text-indigo-500'>
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
