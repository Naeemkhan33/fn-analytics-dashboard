import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
// icons
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  PaperAirplaneIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: PaperAirplaneIcon,
    rotate45: true,
  },
  { name: "Dashboard 2", href: "/dashboard-2", icon: Cog6ToothIcon },
  { name: "Dashboard 3", href: "/dashboard-3", icon: MapPinIcon },
  { name: "Dashboard 4", href: "/dashboard-4", icon: MapPinIcon },
];

const userNavigation = [
  { name: "Your profile", href: "/profile" },
  { name: "Sign out", href: "/sign-out" },
];

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="bg-light min-h-screen flex flex-col">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-4">
                    <div className="h-[49px] w-[58px] bg-white rounded my-4">
                      <img
                        className="h-full w-full rounded"
                        src="/assets/images/logo.svg"
                        alt="logo"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul className="-mx-2 space-y-3">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <NavLink
                                  to={item.href}
                                  className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold sidebar-link"
                                >
                                  <item.icon
                                    className={`h-6 w-6 shrink-0 ${
                                      item.rotate45 && "-rotate-45"
                                    }`}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <aside className="hidden md:fixed md:inset-y-0 md:z-50 md:flex md:w-26 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 py-8">
            <div className="h-[49px] w-[58px] bg-white rounded mb-4">
              <img
                className="h-full w-full rounded"
                src="/assets/images/logo.svg"
                alt="logo"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul className="space-y-3">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <NavLink
                          to={item.href}
                          className={`group flex justify-center items-center rounded-full h-14 w-14 mx-auto sidebar-link ${
                            item.rotate45 && "-rotate-45"
                          }`}
                        >
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <div className="md:pl-28 flex-1">
          <nav className="py-2 px-4 bg-primary flex md:hidden">
            <div className="h-[49px] w-[58px] bg-white rounded mr-3">
              <img
                className="h-full w-full rounded"
                src="/assets/images/logo.svg"
                alt="logo"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg line-clamp-1 sm:text-2xl font-medium text-white">
                Hello Simmons 👋
              </h4>
              <h6 className="text-base font-medium text-gray-300">
                Welcome back today!
              </h6>
            </div>
          </nav>
          <header className="bg-light sticky top-0 z-40 flex shrink-0 items-center py-4 gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex items-center flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex-1 hidden md:block">
                <h4 className="text-lg line-clamp-1 sm:text-2xl font-medium text-primary">
                  Hello Simmons 👋
                </h4>
                <h6 className="text-base font-medium text-gray-400">
                  Welcome back today!
                </h6>
              </div>
              <div className="flex flex-1 md:flex-none justify-end items-center gap-x-5">
                <button
                  type="button"
                  className="p-2 border border-gray-300 rounded-full hover:bg-primary hover:border-primary text-gray-500 hover:text-white active:scale-105"
                >
                  <span className="sr-only">View notifications</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="p-2 relative border border-gray-300 rounded-full hover:bg-primary hover:border-primary text-gray-500 hover:text-white active:scale-105"
                >
                  <span className="absolute top-0 right-0 p-1 rounded-full bg-red-500"></span>
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-10 w-10 rounded-full bg-white"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        Tom Cook
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-3 py-1 text-sm leading-6 text-gray-900"
                          >
                            {item.name}
                          </Link>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </header>
          <main className="pt-4 pb-8">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
