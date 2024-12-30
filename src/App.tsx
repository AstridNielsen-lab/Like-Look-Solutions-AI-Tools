import React, { useState, useMemo } from 'react';
import { Cpu } from 'lucide-react';
import { tools } from './data/tools';
import { ToolCard } from './components/ToolCard';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { ContactInfo } from './components/ContactInfo';
import { SEO } from './components/SEO';
import { Category } from './types';

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2.5 rounded-xl shadow-md">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <h2 className="ml-4 text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Like Look Solutions AI Tools
                </h2>
              </div>
              <ContactInfo />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section with Search */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Discover AI Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our curated collection of AI tools for 3D modeling, art generation, and more.
            </p>
            <SearchBar value={search} onChange={setSearch} />
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>

          {/* No Results */}
          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No AI tools found matching your criteria.
              </p>
            </div>
          )}

          {/* Categories Section */}
          <div className="border-t border-gray-200 pt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Browse by Category
            </h3>
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4">
              <ContactInfo />
              <p className="text-center text-gray-500">
                © {new Date().getFullYear()} Like Look Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
