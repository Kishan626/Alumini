import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="ml-2 text-white font-bold text-xl">Alumni Connect</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/alumni/dashboard" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                Dashboard
              </Link>
              <Link to="/alumni/jobs" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                Jobs
              </Link>
              <Link to="/alumni/events" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                Events
              </Link>
              <Link to="/alumni/donations" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                Donations
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/alumni/dashboard"
              className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md"
            >
              Dashboard
            </Link>
            <Link
              to="/alumni/jobs"
              className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md"
            >
              Jobs
            </Link>
            <Link
              to="/alumni/events"
              className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md"
            >
              Events
            </Link>
            <Link
              to="/alumni/donations"
              className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md"
            >
              Donations
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}