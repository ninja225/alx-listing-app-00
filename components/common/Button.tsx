import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    className = '',
    disabled = false,
    type = 'button'
}) => {
    // Define base styles based on variant and size
    const baseStyles = 'font-medium rounded transition-colors focus:outline-none';

    // Define variant styles
    const variantStyles = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50'
    };

    // Define size styles
    const sizeStyles = {
        small: 'py-1 px-3 text-sm',
        medium: 'py-2 px-4',
        large: 'py-3 px-6 text-lg'
    };

    // Combine all styles
    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <button
            type={type}
            className={buttonStyles}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
