import React from 'react';
import { Phone, Globe, Info } from 'lucide-react';
import { Tooltip } from './Tooltip';

export function ContactInfo() {
  return (
    <div className="flex items-center space-x-4">
      <Tooltip content="WhatsApp: +55 11 97060-3441">
        <a
          href="https://wa.me/5511970603441"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Contact on WhatsApp"
        >
          <Phone className="h-5 w-5" />
        </a>
      </Tooltip>

      <Tooltip content="Visit Our Website">
        <a
          href="https://likelook.wixsite.com/solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Visit website"
        >
          <Globe className="h-5 w-5" />
        </a>
      </Tooltip>

      <Tooltip content="Like Look Solutions - AI Tools Catalog">
        <button
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100"
          aria-label="About us"
        >
          <Info className="h-5 w-5" />
        </button>
      </Tooltip>
    </div>
  );
}