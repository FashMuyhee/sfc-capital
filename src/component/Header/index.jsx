/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, } from '@headlessui/react'
import logo from "../../assets/images/logo.png"


export default function Header() {
  return (
    <Disclosure as="nav" className="bg-transparent pt-13 fixed w-full">
      {({ open }) => (
        <Fragment>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    // <XIcon className="block h-6 w-6" aria-hidden="true" />
                    <div>X</div>
                  ) : (
                    // <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    <div>Menu</div>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="SFC-Capital"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 mr-28">
                    <button className="bg-transparent hover:bg-blue text-white font-bold py-2 rounded w-32">
                      Login
                    </button>
                    <button className="bg-yellow text-blue font-bold py-2 w-32 rounded">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-blue">
            <div className="flex items-center justify-between p-5">
              <button className="bg-transparent hover:bg-blue text-white font-bold py-2 rounded w-36">
                Login
              </button> 
              <button className="bg-yellow text-blue font-bold py-2 w-36 rounded">
                Sign Up
              </button>
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  )
}
