import { Menu, Transition } from '@headlessui/react';
import { services } from '../lib/services';
import { navItems } from '../lib/navItems';
import { ReactElement, useEffect, useState } from 'react';

const NavMenu = (): ReactElement => {
  const [isHomePage, setIsHomePage] = useState<boolean>(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/');
  }, []);

  const handleAreasClick = (event: { preventDefault: () => void }) => {
    if (isHomePage) {
      event.preventDefault();
      const element = document.querySelector('#serviceAreas');
      if (element !== null) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav>
      <ul className='hidden lg:flex lg:space-x-4 lg:ml-14'>
        <li>
          <Menu>
            <Menu.Button className='hover:text-sky-800'>
              Services
              <img
                className='inline-block ml-1'
                src='https://res.cloudinary.com/djr4sjcgh/image/upload/v1685681699/icon-arrow-down_hoez2d.svg'
                alt='Icon arrow down'
              />
            </Menu.Button>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Menu.Items className='absolute right-0 mt-4 w-48 py-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {services.map((service, i) => (
                  <Menu.Item key={`${i}-${service.name}`}>
                    {({ active }) => (
                      <a
                        className={`${
                          active && 'bg-gray-100 text-gray-900'
                        } block w-full text-left px-4 py-2 text-sm cursor-pointer`}
                        href={`/services/${service.href}`}
                        rel='prefetch'
                      >
                        <img
                          src={service.icon}
                          alt={`${service.name} Icon`}
                          className='inline w-4 mr-3'
                        />
                        {service.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        {navItems.map((item, i) => (
          <li
            className='cursor-pointer hover:text-sky-800'
            key={`${i}-${item.name}`}
          >
            <a
              href={item.href}
              onClick={item.name === 'Areas' ? handleAreasClick : undefined}
              rel='prefetch'
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavMenu;
