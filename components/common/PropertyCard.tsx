import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '@/interfaces';

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      {/* Image */}
      <div className="relative h-48">
        <Image
          src={property.images[0]}
          alt={property.name}
          fill
          style={{ objectFit: 'cover' }}
        />
        {property.isFeatured && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {property.name}
          </h3>
          <p className="text-blue-600 font-bold">
            {property.currency}{property.price}
            <span className="text-gray-500 text-sm font-normal">/night</span>
          </p>
        </div>

        {/* Location */}
        <p className="text-gray-600 text-sm mb-3">
          {property.location.city}, {property.location.country}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-gray-600">{property.rating.toFixed(1)}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-gray-600 text-sm">{property.reviews} reviews</span>
        </div>

        {/* Amenities */}
        <div className="flex items-center space-x-4 text-gray-600 text-sm">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{property.bedrooms} bed</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{property.location.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;