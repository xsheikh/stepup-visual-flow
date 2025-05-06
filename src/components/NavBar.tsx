
import React from 'react';
import { cn } from '@/lib/utils';

type NavItem = {
  id: string;
  label: string;
};

interface NavBarProps {
  items: NavItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ items, activeTab, onTabChange }) => {
  return (
    <div className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-lg font-semibold text-stepup-purple">Step-up</h1>
        </nav>
        <div className="flex overflow-x-auto mt-2 pb-2 scrollbar-none">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "nav-item",
                activeTab === item.id && "active"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
