import { PhoneIcon } from '@heroicons/react/24/outline';
import NavMenu from './NavMenu';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='container'>
      <div className='flex py-5 px-3'>
        <div className='flex items-center'>
          <h3 className='text-2xl font-semibold text-medium-gray'>
            <a href='/'>COOPER & ADLYS</a>
          </h3>
        </div>
        <div className='flex-grow flex items-center z-20'>
          <NavMenu />
        </div>
        <div className='flex items-center'>
          <a onClick={() => setOpen(true)}>
            <img
              src='images/icon-menu.svg'
              alt='Navigation menu'
              className='block lg:hidden'
            />
          </a>
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
            <button className='border-2 border-transparent bg-sky-800 text-almost-white hover:border-sky-800 hover:text-sky-800 hover:bg-almost-white rounded px-4 py-2 font-semibold transition-all duration-150 ease-in-out'>
              Request a Quote
            </button>
          </div>
        </div>
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </header>
  );
};
export default Header;
