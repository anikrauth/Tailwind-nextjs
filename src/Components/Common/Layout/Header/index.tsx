/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import MenuIcon from "../../../Icons/Menu";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import UserMenu from "./Menu";
import UserIcon from "./RightStack/userIcon";
import UserDropDown from "./RightStack/UserDropDown";
import Compare from "../../../Icons/Compare";
import Wishlist from "../../../Icons/Wishlist";
import Bag from "../../../Icons/Bag";

const navigation = [
  { name: "All", href: "#", current: true },
  { name: "Apparel", href: "#", current: false },
  { name: "Shop All", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-50 NavWraper md:flex md:items-center md:h-20">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden"></div>
              <div className="flex items-center md:justify-center sm:items-stretch sm:justify-start">
                {/* logo import start*/}
                <Logo />
                {/* logo import end*/}
                <div className="hidden sm:block sm:ml-6 md:flex menuWraper">
                  {/* UserMenu start */}
                  <UserMenu navigation={navigation} />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 SearchContainer">
                    {/* search bar start */}
                    <SearchBar />
                    {/* search bar end */}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-6"
                >
                  <span className="sr-only">Bag</span>
                  <Bag className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-6"
                >
                  <span className="sr-only">Wishlist</span>
                  <Wishlist className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-6"
                >
                  <span className="sr-only">Compare</span>
                  <Compare className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 mr-5 relative">
                  <div>
                    {/* user component */}
                    <UserIcon />
                  </div>
                  {/* User DropDown Menu */}
                  <UserDropDown />
                </Menu>
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center md:hidden justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
