import { Disclosure, Transition } from '@headlessui/react';
import { services } from '../lib/services';
import { navItems } from '../lib/navItems';
import { PhoneIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ open = false, setOpen }) => {
  return (
    /* The `show` prop controls all nested `Transition.Child` components. */
    <Transition show={open}>
      {/* Background overlay */}
      <Transition.Child
        enter='transition-opacity ease-linear duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity ease-linear duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div
          className='w-full h-full fixed bg-black opacity-80 z-10 inset-0'
          onClick={() => setOpen(false)}
        ></div>
      </Transition.Child>

      {/* Sliding sidebar */}
      <Transition.Child
        className='fixed right-0 top-0 w-64 z-30 h-screen'
        enter='transition ease-in-out duration-300 transform'
        enterFrom='translate-x-full'
        enterTo='translate-x-0'
        leave='transition ease-in-out duration-300 transform'
        leaveFrom='translate-x-0'
        leaveTo='translate-x-full'
      >
        <div className='fixed right-0 top-0 h-screen bg-almost-white pt-20 p-8 z-50 w-64'>
          <a href='#' onClick={() => setOpen(false)}>
            <img
              src='images/icon-close-menu.svg'
              alt='Close menu'
              className='absolute top-5 right-5'
            />
          </a>
          <ul className='flex flex-col space-y-3'>
            <li>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex items-center text-left'>
                      <span className='mr-4'>Services</span>
                      <img
                        src={`images/icon-arrow-${open ? 'up' : 'down'}.svg`}
                        alt='Arrow icon'
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ul>
                        {services.map((service, i) => (
                          <li key={`${i}-${service.name}`}>
                            <a
                              className='block w-full text-left px-4 py-2 text-sm cursor-pointer'
                              href={`/services/${service.href}`}
                            >
                              <img
                                src={service.icon}
                                alt={`${service.name} Icon`}
                                className='inline w-4 mr-3'
                              />
                              {service.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </li>
            {navItems.map((item, i) => (
              <li
                className='cursor-pointer hover:text-sky-800'
                key={`${i}-${item.name}`}
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className='items-center mt-8 space-y-4'>
            <div className='hover:text-sky-800 cursor-pointer'>
              <a className='flex gap-2 items-center' href='tel:+12262202782'>
                <PhoneIcon className='h-5 w-5 text-medium-gray hover:text-sky-800' />
                (226)-220-2782
              </a>
            </div>
            <button className='border-2 border-transparent bg-sky-800 text-almost-white hover:border-sky-800 hover:text-sky-800 hover:bg-almost-white rounded px-4 py-2'>
              Request a Quote
            </button>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
};
export default Sidebar;
