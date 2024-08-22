'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function HeroBanner({ contentfulFields, navigation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutSection = navigation.find((item) => item.id === 'contact');

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          aria-label='Global'
          className='flex items-center justify-between p-6 lg:px-8'
        >
          <div className='flex lg:flex-1'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-50 sm:text-3xl'>
              Framtíðni
            </h1>
            {/* <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Framtíðni</span>
              Todo - Logo
              <img
                alt=''
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                className='h-8 w-auto'
              />
            </a> */}
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(true)}
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50'
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                onClick={() =>
                  item.ref.current?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-50 hover:cursor-pointer
                 hover:text-orange-500 hover:font-semibold'
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className='lg:hidden'
        >
          <div className='fixed inset-0 z-50' />
          <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Framtíðni</span>
                <img
                  alt=''
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  className='h-8 w-auto'
                />
              </a>
              <button
                type='button'
                onClick={() => setMobileMenuOpen(false)}
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon aria-hidden='true' className='h-6 w-6' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      onClick={() =>
                        item.ref.current?.scrollIntoView({
                          behavior: 'smooth',
                        })
                      }
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className='relative bg-framtidni-green isolate px-6 pt-14 lg:px-8'>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        ></div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl'>
              {contentfulFields.heroBannerHeadline}
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-50'>
              {contentfulFields.heroBannerSubject}
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                onClick={() =>
                  aboutSection.ref.current?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }
                href='#'
                className='rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Hafa samband
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        ></div>
      </div>
    </div>
  );
}
