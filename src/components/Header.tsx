import { PhoneIcon } from '@heroicons/react/24/outline';
import NavMenu from './NavMenu';
import Sidebar from './Sidebar';
import { ReactElement, useState } from 'react';

const Header = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className='container'>
      <div className='flex px-4 lg:px-0 py-4'>
        <a href='/'>
          <img
            src='https://res.cloudinary.com/djr4sjcgh/image/upload/v1687650102/COOPER_ADLY_LTD_LOGO-ai_ug9pmx.png'
            alt='Cooper & Adlys Logo'
            className='h-auto w-52'
          />
        </a>
        <div className='flex-grow flex items-center z-20'>
          <NavMenu />
        </div>
        <div className='flex items-center'>
          <button
            role='button'
            aria-pressed='true'
            aria-label='Open navigation menu'
            onClick={() => setOpen(true)}
          >
            <img
              src='https://res.cloudinary.com/djr4sjcgh/image/upload/v1685681699/icon-menu_a5k4bk.svg'
              alt='Navigation menu'
              className='block lg:hidden'
            />
          </button>
          <div className='hidden lg:flex lg:space-x-4 lg:items-center'>
            <div className='hover:text-sky-800 cursor-pointer'>
              <a
                className='flex gap-2 items-center'
                href='tel:+1 (226) 220-2782'
              >
                <PhoneIcon className='h-5 w-5 text-medium-gray' />
                (226)-220-2782
              </a>
            </div>
            <a
              href='/contact'
              className='border-2 border-transparent bg-sky-800 text-almost-white hover:border-sky-800 hover:text-sky-800 hover:bg-almost-white rounded px-4 py-2 font-semibold transition-all duration-150 ease-in-out'
              rel='prefetch'
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </header>
  );
};
export default Header;
