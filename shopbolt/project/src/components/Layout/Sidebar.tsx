import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, X } from 'lucide-react';
import { categories } from '../../data/mockData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, selectedCategory, onCategorySelect }) => {
  const location = useLocation();

  const handleCategoryClick = (category: string | null) => {
    onCategorySelect(category);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          {/* Close button for mobile */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Categories</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="space-y-2">
            {/* Home */}
            <Link
              to="/"
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>

            {/* All Products */}
            <button
              onClick={() => handleCategoryClick(null)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors text-left ${
                selectedCategory === null
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Package className="h-5 w-5" />
              <span>All Products</span>
            </button>

            {/* Category divider */}
            <div className="pt-4 pb-2">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3">
                Categories
              </h3>
            </div>

            {/* Categories */}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors text-left ${
                  selectedCategory === category
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;