import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  onSearch?: (query: string) => void;
  selectedCategory?: string | null;
  onCategorySelect?: (category: string | null) => void;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  onSearch = () => {},
  selectedCategory = null,
  onCategorySelect = () => {},
  showSidebar = true
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onSearch={onSearch} onToggleSidebar={toggleSidebar} />
      
      <div className="flex">
        {showSidebar && (
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
            selectedCategory={selectedCategory}
            onCategorySelect={onCategorySelect}
          />
        )}
        
        <main className={`flex-1 ${showSidebar ? 'lg:ml-64' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;