import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import type { ReactElement } from 'react';

const ContactForm = (): ReactElement => {
  return (
    <div className='relative isolate bg-white'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100  ring-1 ring-gray-900/10 lg:w-1/2'>
              <svg
                className='absolute inset-0 h-full w-full stroke-gray-200  [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                    width={200}
                    height={200}
                    x='100%'
                    y={-1}
                    patternUnits='userSpaceOnUse'
                  >
                    <path d='M130 200V.5M.5 .5H200' fill='none' />
                  </pattern>
                </defs>
                <rect width='100%' height='100%' strokeWidth={0} fill='white' />
                <svg x='100%' y={-1} className='overflow-visible fill-gray-50'>
                  <path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
                </svg>
                <rect
                  width='100%'
                  height='100%'
                  strokeWidth={0}
                  fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
                />
              </svg>
            </div>
            <h2 className='text-3xl font-bold tracking-tight text-medium-gray'>
              Get in touch
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600 '>
              We're ready to tackle your plumbing challenges, from leaking
              faucets to pipe installations. Get in touch with us today and let
              our experienced team provide you with a quick and efficient
              solution.
            </p>
            <dl className='mt-10 space-y-4 text-base leading-7 text-gray-600'>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Address</span>
                  <BuildingOffice2Icon
                    className='h-7 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd>
                  25 Grosbeak Road
                  <br />
                  Elmira, Ontario, Canada
                  <br />
                  N3B 1V8
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Telephone</span>
                  <PhoneIcon
                    className='h-7 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd>
                  <a
                    className='hover:text-gray-900'
                    href='tel:+1 (226) 220-2782'
                  >
                    +1 (226) 220-2782
                  </a>
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Email</span>
                  <EnvelopeIcon
                    className='h-7 w-6 text-gray-400'
                    aria-hidden='true'
                  />
                </dt>
                <dd>
                  <a
                    className='hover:text-gray-900'
                    href='mailto:cooper.adlys@gmail.com'
                  >
                    cooper.adlys@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          name='contact'
          method='POST'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          action='/success/'
          className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
        >
          <input name='bot-field' className='hidden' />
          <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  First name
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                    placeholder='John'
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Last name
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    autoComplete='family-name'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                    placeholder='Doe'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Email
                </label>
                <div className='mt-2.5'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                    placeholder='example@email.com'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='phone-number'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Phone number
                </label>
                <div className='mt-2.5'>
                  <input
                    type='tel'
                    name='phone-number'
                    id='phone-number'
                    autoComplete='tel'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                    placeholder='(555) 555-5555'
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='preferred-contact'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Preferred contact method
                </label>
                <div className='mt-2.5'>
                  <select
                    id='preferred-contact'
                    name='preferred-contact'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                    defaultValue='Phone'
                  >
                    <option>Phone</option>
                    <option>Email</option>
                    <option>Any</option>
                  </select>

                  <div className='absolute inset-y-0 right-0 flex items-center pointer-events-none'>
                    <svg
                      className='h-5 w-5 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path fillRule='evenodd' clipRule='evenodd'>
                        {' '}
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Message
                </label>
                <div className='mt-2.5'>
                  <textarea
                    name='message'
                    id='message'
                    rows={4}
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                    placeholder='Please describe your plumbing issue or request here.'
                  />
                </div>
              </div>
            </div>
            <div className='mt-8 flex justify-end'>
              <button
                type='submit'
                className='rounded bg-sky-800 px-3.5 py-2.5 hover:text-sky-800 border-2 border-transparent hover:border-sky-800 text-center text-sm font-semibold text-almost-white shadow-sm hover:bg-almost-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all duration-150 ease-in-out'
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
