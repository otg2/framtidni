import React from 'react';

export default function HeroBanner({ contentfulFields }) {
  return (
    <div className='background-green'>
      <header style={{ paddingLeft: 0 }}>
        <div
          className='p-5 text-center bg-image'
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/new/slides/041.webp')",
            height: 400,
          }}
        >
          <div
            className='mask'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          >
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>{contentfulFields.heroBannerHeadline}</h1>
                <h1 className='mb-3'>{contentfulFields.heroBannerSubject}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
