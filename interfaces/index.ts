// Button component props
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

// Card component props
export interface CardProps {
    title?: string;
    description?: string;
    imageUrl?: string;
    price?: number | string;
    rating?: number | string;
    location?: string;
    className?: string;
}

// Property listing interface
export interface PropertyProps {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  location: {
    city: string;
    country: string;
  };
  rating: number;
  reviews: number;
  images: string[];
  amenities: string[];
  type: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  isFeatured: boolean;
}

// Pill component props
export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}
