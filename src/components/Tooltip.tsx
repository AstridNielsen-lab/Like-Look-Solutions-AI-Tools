import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      
      {isVisible && (
        <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm 
          tooltip dark:bg-gray-700 -translate-x-1/2 left-1/2 -bottom-12 whitespace-nowrap">
          {content}
          <div className="tooltip-arrow absolute w-2 h-2 bg-gray-900 transform rotate-45 -top-1 left-1/2 -translate-x-1/2" />
        </div>
      )}
    </div>
  );
}