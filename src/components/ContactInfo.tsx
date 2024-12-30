import React from 'react';
import { Phone, Globe } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="flex items-center justify-center space-x-6">
      <a
        href="https://wa.me/5511970603441"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
      >
        <Phone className="h-4 w-4 mr-2" />
        <span>+55 11 97060-3441</span>
      </a>
      <a
        href="https://likelook.wixsite.com/solutions"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
      >
        <Globe className="h-4 w-4 mr-2" />
        <span>Visit Our Website</span>
      </a>
    </div>
  );
}