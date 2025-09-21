import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ACCOMMODATION_TYPES } from '@/constants';
import Pill from '../common/Pill';
import Button from '../common/Button';

const Header: React.FC = () => {
  const [selectedType, setSelectedType] = useState('all');

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Upper Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/logo.svg" alt="Logo" width={32} height={32} />
            <span className="text-xl font-bold">Homify</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for a property..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="medium">Sign In</Button>
            <Button variant="primary" size="medium">Sign Up</Button>
          </div>
        </div>
      </div>

      {/* Lower Header - Accommodation Types */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-4 overflow-x-auto hide-scrollbar">
            {ACCOMMODATION_TYPES.map((type) => (
              <Pill
                key={type.id}
                label={type.label}
                isActive={selectedType === type.id}
                onClick={() => setSelectedType(type.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;