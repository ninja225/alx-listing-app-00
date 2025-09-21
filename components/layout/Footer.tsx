import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-6 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Your trusted platform for finding and listing properties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@example.com</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Property Listing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;