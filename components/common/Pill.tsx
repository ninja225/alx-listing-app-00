import React from 'react';
import { PillProps } from '@/interfaces';
import { cn } from '@/lib/utils';

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-colors',
        'hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200',
        isActive ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-700 border border-gray-200'
      )}
    >
      {label}
    </button>
  );
};

export default Pill;