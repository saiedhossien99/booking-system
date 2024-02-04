'use client'
import Link from 'next/link'
import {
  Bars3Icon, ChevronDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftIcon,
  PlayCircleIcon,
  PhoneIcon,
  XMarkIcon
} from '@heroicons/react/24/solid'

import { Fragment, useState } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Transition,
  Dialog,
  Disclosure
} from "@headlessui/react"
import { cn } from '@/lib/utils'



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const product = [
    {
      name: 'Book a stay',
      href: '#',
      description: 'get a better understanding of your traffic',
      icon: HomeIcon
    },
    {
      name: 'Book a flight',
      href: '#',
      description: 'speak directly to your customer',
      icon: PaperAirplaneIcon
    },
    {
      name: 'contact a support team',
      href: '#',
      description: 'your customer data will be safe and secure',
      icon: ChatBubbleLeftIcon
    },
  ];

  const callsToAction = [
    { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
    { name: "Contact Support", href: "#", icon: PhoneIcon },
  ];

  return (
    <div className="bg-[#013b98]">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8" aria-label='global'>
        <div className='flex lg:flex-1'>
          <Link href='/' className='p-1.5 -m-1.5'>
            <span className='sr-only'>Booking.com</span>
            <img
              className='h-12 w-auto'
              src='https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w'
              alt='booking.com'
            ></img>
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button type='button'
          onClick={()=>{setMobileMenuOpen(true)}}
          className='flex inline-flex -m-2.5 justify-center items-center rounded-md p-2.5 text-white'>
            <Bars3Icon className='h-6 w-6' aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex gap-x-1 font-semibold text-sm text-white leading-6">
              Stays
              <ChevronDownIcon className='h-5 w-5 flex-none text-white' aria-hidden='true' />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-180'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full mt-3 w-screen z-10 
                  max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-950/5">

                <div className='p-4' >
                  {
                    product.map((item) => {
                      return <div
                        key={item.name}
                        className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 
                        hover:bg-gray-50'>
                        <div className='flex flex-none h-11 w-11 items-center justify-center rounded-lg bg-gray-50
                          group-hover:bg-gray-200'>
                          <item.icon
                            className='w-6 h-6 text-[#013b98] group-hover:text-blue-600'
                            aria-hidden='true'
                          />
                        </div>
                        <div className='flex-auto'>
                          <a href={item.href}
                            className='block font-semibold text-[#012b98]'>
                            {item.name}
                            <span className='absolute inset-0' />
                          </a>
                          <p className='mt-1 text-[#012b98]'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    })
                  }
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-[#013B94]"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Flights
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Car Rentals
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Attractions
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Flight + Hotel 
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />

        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Booking.com</span>
              <img
                className="h-8 w-auto"
                src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                        Stays
                        <ChevronDownIcon
                          className={cn(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...product, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flights
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Car Rentals
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Attractions
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Flight + Hotel
                </a>
              </div>

              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

    </div>
  )
}