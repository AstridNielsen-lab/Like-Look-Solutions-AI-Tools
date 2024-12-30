import React from 'react';
import { Category } from '../types';
import { getUniqueCategories } from '../utils/categories';

interface CategoryFilterProps {
  selectedCategory: Category | 'All';
  onCategoryChange: (category: Category | 'All') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const uniqueCategories = ['All', ...getUniqueCategories()];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {uniqueCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}