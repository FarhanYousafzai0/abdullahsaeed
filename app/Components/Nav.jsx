import React from 'react'
import { navItems } from '../Utils/data'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
const Nav = () => {
  return (
    <>
      <div aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
          
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 f text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6  text-gray-900">
              Let's Talk <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
    </>
  )
}

export default Nav
