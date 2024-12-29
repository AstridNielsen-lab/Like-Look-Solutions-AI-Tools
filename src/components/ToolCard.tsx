import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl p-6 transition-all duration-300 hover:scale-102 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {tool.name}
        </h3>
        <span className={`px-4 py-1.5 text-sm font-medium rounded-full ${
          tool.category === '3D' 
            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700'
            : 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700'
        }`}>
          {tool.category}
        </span>
      </div>
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
      >
        Visit Website
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}