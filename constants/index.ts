import { PropertyProps } from '@/interfaces';

// API endpoints
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

// Navigation
export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Listings', path: '/listings' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

// Listing categories
export const LISTING_CATEGORIES = [
    { id: 'all', name: 'All' },
    { id: 'apartment', name: 'Apartment' },
    { id: 'house', name: 'House' },
    { id: 'villa', name: 'Villa' },
    { id: 'cabin', name: 'Cabin' },
];

// Price ranges
export const PRICE_RANGES = [
    { id: 'all', name: 'All Prices' },
    { id: 'economy', name: 'Under $50', min: 0, max: 50 },
    { id: 'standard', name: '$50 - $100', min: 50, max: 100 },
    { id: 'premium', name: '$100 - $200', min: 100, max: 200 },
    { id: 'luxury', name: '$200+', min: 200, max: null },
];

// Placeholder data for development
export const PLACEHOLDER_LISTINGS = [
    {
        id: '1',
        title: 'Modern apartment with ocean view',
        description: 'Spacious and bright apartment with amazing ocean views',
        imageUrl: '/assets/listing1.jpg',
        price: 120,
        rating: 4.9,
        location: 'Miami, FL',
        category: 'apartment',
    },
    {
        id: '2',
        title: 'Cozy cabin in the woods',
        description: 'Private cabin surrounded by nature',
        imageUrl: '/assets/listing2.jpg',
        price: 95,
        rating: 4.7,
        location: 'Asheville, NC',
        category: 'cabin',
    },
    {
        id: '3',
        title: 'Luxury villa with private pool',
        description: 'Elegant villa with all amenities and private swimming pool',
        imageUrl: '/assets/listing3.jpg',
        price: 250,
        rating: 5.0,
        location: 'Malibu, CA',
        category: 'villa',
    },
];
// Filter categories for accommodation types
export const ACCOMMODATION_TYPES = [
    { id: 'all', label: 'All Types' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'mansion', label: 'Mansion' },
    { id: 'countryside', label: 'Countryside' },
    { id: 'beachfront', label: 'Beachfront' },
    { id: 'villa', label: 'Villa' }
];

// Property filter tags
export const PROPERTY_FILTERS = [
    { id: 'top-rated', label: 'Top Rated' },
    { id: 'self-checkin', label: 'Self Check-in' },
    { id: 'instant-book', label: 'Instant Book' },
    { id: 'pet-friendly', label: 'Pet Friendly' },
    { id: 'pool', label: 'Pool' },
    { id: 'parking', label: 'Free Parking' }
];

// Sample property listings data
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
    {
        id: "1",
        name: "Villa Ocean Breeze",
        description: "Luxurious beachfront villa with stunning ocean views",
        location: {
            city: "Bali",
            country: "Indonesia"
        },
        price: 3200,
        currency: "USD",
        rating: 4.89,
        reviews: 128,
        images: ["/assets/listing1.svg"],
        amenities: ["Pool", "Free Parking", "Wi-Fi", "Beach Access"],
        type: "Villa",
        bedrooms: 3,
        bathrooms: 3,
        maxGuests: 6,
        isFeatured: true
    },
    {
        id: "2",
        name: "Mountain Escape Chalet",
        description: "Cozy mountain retreat with breathtaking views",
        location: {
            city: "Aspen",
            country: "USA"
        },
        price: 1800,
        currency: "USD",
        rating: 4.70,
        reviews: 95,
        images: ["/assets/listing2.svg"],
        amenities: ["Fireplace", "Self Check-in", "Ski Access", "Hot Tub"],
        type: "Countryside",
        bedrooms: 4,
        bathrooms: 2,
        maxGuests: 8,
        isFeatured: true
    },
    {
        name: "Cozy Desert Retreat",
        address: {
            state: "Palm Springs",
            city: "California",
            country: "USA"
        },
        rating: 4.92,
        category: ["Desert View", "Pet Friendly", "Self Checkin"],
        price: 1500,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: "https://example.com/image3.jpg",
        discount: ""
    },
    {
        name: "City Lights Penthouse",
        address: {
            state: "New York",
            city: "New York",
            country: "USA"
        },
        rating: 4.85,
        category: ["City View", "Free WiFi", "24h Checkin"],
        price: 4500,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4"
        },
        image: "https://example.com/image4.jpg",
        discount: "15"
    },
    {
        name: "Riverside Cabin",
        address: {
            state: "Queenstown",
            city: "Otago",
            country: "New Zealand"
        },
        rating: 4.77,
        category: ["Riverside", "Private Dock", "Free Kayaks"],
        price: 2800,
        offers: {
            bed: "3",
            shower: "2",
            occupants: "4-6"
        },
        image: "https://example.com/image5.jpg",
        discount: "20"
    },
    {
        name: "Modern Beachfront Villa",
        address: {
            state: "Sidemen",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.95,
        category: ["Beachfront", "Private Pool", "Chef Service"],
        price: 5000,
        offers: {
            bed: "5",
            shower: "4",
            occupants: "8-10"
        },
        image: "https://example.com/image6.jpg",
        discount: ""
    },
    {
        name: "Lakeside Chalet",
        address: {
            state: "Banff",
            city: "Alberta",
            country: "Canada"
        },
        rating: 4.65,
        category: ["Lakeside", "Mountain View", "Hiking Trails"],
        price: 2300,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: "https://example.com/image7.jpg",
        discount: "10"
    },
    {
        name: "Tropical Garden Villa",
        address: {
            state: "Koh Samui",
            city: "Surat Thani",
            country: "Thailand"
        },
        rating: 4.80,
        category: ["Garden", "Free Parking", "Self Checkin"],
        price: 2750,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "5-6"
        },
        image: "https://example.com/image8.jpg",
        discount: "25"
    },
    {
        name: "Urban Loft",
        address: {
            state: "Berlin",
            city: "Berlin",
            country: "Germany"
        },
        rating: 4.60,
        category: ["City Center", "Free WiFi", "24h Checkin"],
        price: 2000,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: "https://example.com/image9.jpg",
        discount: ""
    },
    {
        name: "Secluded Forest Cabin",
        address: {
            state: "Whistler",
            city: "British Columbia",
            country: "Canada"
        },
        rating: 4.72,
        category: ["Secluded", "Hot Tub", "Self Checkin"],
        price: 2600,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: "https://example.com/image10.jpg",
        discount: "40"
    },
    {
        name: "Cliffside Villa",
        address: {
            state: "Amalfi",
            city: "Salerno",
            country: "Italy"
        },
        rating: 4.93,
        category: ["Cliffside", "Infinity Pool", "Sea View"],
        price: 6000,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: "https://example.com/image11.jpg",
        discount: "50"
    },
    {
        name: "Coastal Escape Villa",
        address: {
            state: "Noosa",
            city: "Queensland",
            country: "Australia"
        },
        rating: 4.83,
        category: ["Beachfront", "Pet Friendly", "Free Parking"],
        price: 3400,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: "https://example.com/image12.jpg",
        discount: ""
    },
    {
        name: "Historical Villa",
        address: {
            state: "Florence",
            city: "Tuscany",
            country: "Italy"
        },
        rating: 4.67,
        category: ["Historical", "Free Breakfast", "Self Checkin"],
        price: 2700,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4"
        },
        image: "https://example.com/image13.jpg",
        discount: "35"
    },
    {
        name: "Downtown Apartment",
        address: {
            state: "Tokyo",
            city: "Tokyo",
            country: "Japan"
        },
        rating: 4.81,
        category: ["City Center", "Free WiFi", "Public Transport"],
        price: 2200,
        offers: {
            bed: "1",
            shower: "1",
            occupants: "2"
        },
        image: "https://example.com/image14.jpg",
        discount: ""
    },
    {
        name: "Luxury Safari Lodge",
        address: {
            state: "Serengeti",
            city: "Mara",
            country: "Tanzania"
        },
        rating: 4.97,
        category: ["Safari", "Guided Tours", "Free Breakfast"],
        price: 4500,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: "https://example.com/image15.jpg",
        discount: "20"
    },
    {
        name: "Countryside Cottage",
        address: {
            state: "Cotswolds",
            city: "Gloucestershire",
            country: "UK"
        },
        rating: 4.58,
        category: ["Countryside", "Fireplace", "Self Checkin"],
        price: 1800,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-4"
        },
        image: "https://example.com/image16.jpg",
        discount: "25"
    },
    {
        name: "Riverfront Mansion",
        address: {
            state: "Paris",
            city: "Île-de-France",
            country: "France"
        },
        rating: 4.86,
        category: ["Riverfront", "Private Garden", "Self Checkin"],
        price: 5000,
        offers: {
            bed: "4",
            shower: "3",
            occupants: "6-8"
        },
        image: "https://example.com/image17.jpg",
        discount: "30"
    },
    {
        name: "Ski Chalet",
        address: {
            state: "Zermatt",
            city: "Valais",
            country: "Switzerland"
        },
        rating: 4.75,
        category: ["Mountain View", "Ski Access", "Fireplace"],
        price: 3900,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: "https://example.com/image18.jpg",
        discount: ""
    },
    {
        name: "Island Paradise Villa",
        address: {
            state: "Mahe",
            city: "Victoria",
            country: "Seychelles"
        },
        rating: 4.98,
        category: ["Beachfront", "Private Pool", "Chef Service"],
        price: 6500,
        offers: {
            bed: "5",
            shower: "5",
            occupants: "8-10"
        },
        image: "https://example.com/image19.jpg",
        discount: "60"
    },
    {
        name: "Clifftop Retreat",
        address: {
            state: "Cape Town",
            city: "Western Cape",
            country: "South Africa"
        },
        rating: 4.78,
        category: ["Ocean View", "Private Pool", "Self Checkin"],
        price: 4100,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: "https://example.com/image20.jpg",
        discount: ""
    }
];