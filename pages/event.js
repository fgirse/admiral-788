
{/*
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function event() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      XXXX
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown XXX
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button XXX
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content XXX
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace XXX
          </div>
        </main>
      </div>
    </>
  )
}*/}


import React from 'react';
import StyledButton from '/components/Buttons/Button';
import Image from 'next/image'
import Modal5 from '../components/Modal5.js'
import { InformationCircleIcon } from '@heroicons/react/solid'
import Saxophone from "../components/icons/svg/SVGSaxophoneWeiss"
                                                                                                                                                                                                                                                                                                                                                                                                                             

function event() {
    return (
        <>
<section className="mx-auto mb-12 px-2 py-5 w-11/12 bg-slate-700 md:px-0 rounded-2xl">-
  <div className="container -mt-32 rounded-2xl h-11/12 bg-yellow-200/10 items-center max-w-7xl px-8 mx-auto xl:px-5">
  
  <p className="mt-16 headingB py-4 text-center text-gray-100 sm:text-6xl md:text-5xl lg:text-7xl lg:py-8 ">Dein Event</p>
  <div className='mx-auto w-10/12 sm:w-5/12 md:w-2/12  lg:w-4/12 lg:-mt-8 xl:w-3/12'>
                  <Image src="/LogoAlt.png" layout="responsive" alt="Logo-alt " width="1049" height="230" />
                </div>
                <div className='mt-12 mx-auto rounded-x sm:w-3/12 lg:mt-0 lg:transform lg:rotate-[60deg] lg:transform: lg:-skew-y-[60deg] lg:w-2/12 xl:4/12'>
                  <Image src="/piano1.png" layout="responsive" alt="Piano " width="105" height="102" />
                </div>
                <div className='mx-auto absolute top-[60vh] md:transform -translatey-20w-4/12 -translate-y-820lg:mt-0 lg:transform lg:w-2/12 xl:4/12 xl:transform xl:-translate-y-80 xl:left-[55vw]'> 
                <Saxophone height="15vh" width="5vw"></Saxophone>
                </div>
                
                 <div className="-mt-20 flex flex-wrap items-center sm:-mx-3 lg:mt-24">
      <div className=" lg:-mt-[30vh] w-full h-full order-last md:w-1/2 md:px-3 sm:order-first">
        
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="mt:24 lg:mt-36 text-3xl font-extrabold tracking-tight text-yellow-400 sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            <span className="block xl:inline">privater oder business Anlass? <br/></span>
             Dein Event<span className="block text-orange-600 xl:inline"> ! </span>
          </h1>
          <p className="mx-auto text-base text-gray-400 sm:max-w-md md:max-w-3xl lg:max-w-lg lg:text-xl 1xl:text-2xl">Wir planen gerne für Sie Ihren persönlichen Event - auf Wunsch Catering vollumfänglich möglich <InformationCircleIcon className="inline h-9 w-9 lg::h-12 lg:w-12 text-yellow-600"/> <span className='text-bold text-yellow-600'><a href>weitere Infos</a></span> Sprechen Sie uns an oder kontaktieren Sie uns per mail</p>
          <div className="p-6 relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="#_" className="text-xs  text-center flex items-center w-full px-6 py-o mb-3 lg:text-3xl text-white bg-yellow-600 rounded-md sm:mb-0 hover:bg-yellow-400 sm:w-auto">
              email Rettungsanker<svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 ml-1" viewBox="0 0 24 24" fill="none" stroke="#494949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          <Modal5 className="mb-12" ></Modal5>
          </div>
        </div>
      </div>
      <div className=" -mt-[6vh] w-full sm:mt-0 md:w-1/2 ">
        <div className="mt-36 w-8/12 h-auto ml-16 overflow-hidden rounded-md shadow-xl sm:rounded-xl lg:-mt-[30vh]">
        <Image src="/Women_Illustration_adobespark.png" alt="" height="900" width="955"/>
                  </div>
          
      </div>
    </div>

  </div>

  </section>


        </>
        )
   }

  export default event
