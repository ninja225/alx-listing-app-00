import Image from 'next/image';
import Head from 'next/head';
import { PROPERTY_FILTERS, PROPERTYLISTINGSAMPLE } from '@/constants';
import Pill from '@/components/common/Pill';
import PropertyCard from '@/components/common/PropertyCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homify - Find Your Dream Property</title>
        <meta name="description" content="Find your perfect home with Homify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center text-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/hero-bg.jpg"
              alt="Hero background"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold">
              Find your favorite place here!
            </h1>
            <p className="text-xl opacity-90">
              The best prices for over 2 million properties worldwide.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for a city, neighborhood, or address"
                  className="w-full px-6 py-4 rounded-full text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Search"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {PROPERTY_FILTERS.map((filter) => (
                <Pill
                  key={filter.id}
                  label={filter.label}
                  onClick={() => console.log('Filter clicked:', filter.label)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Listing Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROPERTYLISTINGSAMPLE.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
