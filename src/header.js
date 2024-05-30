import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-yellow-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to="/"
            className="flex items-center space-x-4"
            onClick={handleLinkClick}
          >
            <img className="h-8 w-auto" src="/Logo.png" alt="Calvary Logo" />
            <span className="font-bold text-xl">Calvary Summer Camp</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-16">
          <Link
            to="/"
            className="text-md font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-md font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
          <Link
            to="/program"
            className="text-md font-semibold leading-6 text-gray-900"
          >
            Program
          </Link>
          <Link
            to="/volunteer"
            className="text-md font-semibold leading-6 text-gray-900"
          >
            Volunteer
          </Link>
          <Link
            to="/contact"
            className="text-md font-semibold leading-6 text-gray-900"
          >
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSfLalY5hj0OM9tmiKdXrSOY0ltDpwPwAGk6dgxKQX1ka7_uzA/viewform"
            target="_blank"
            className="rounded-2xl bg-yellow-400 py-2 px-4 text-sm text-white font-semibold hover:bg-yellow-300"
          >
            Register
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-yellow-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-4"
              onClick={handleLinkClick}
            >
              <img className="h-8 w-auto" src="/Logo.png" alt="Calvary Logo" />
              <span className="font-bold text-xl">Calvary Summer Camp</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
                <Link
                  to="/program"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={handleLinkClick}
                >
                  Program
                </Link>
                <Link
                  to="/volunteer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={handleLinkClick}
                >
                  Volunteer
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLSfLalY5hj0OM9tmiKdXrSOY0ltDpwPwAGk6dgxKQX1ka7_uzA/viewform"
                  target="_blank"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={handleLinkClick}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
