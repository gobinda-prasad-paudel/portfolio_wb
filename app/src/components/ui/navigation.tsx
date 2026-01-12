import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, FolderOpen, Award, Mail } from 'lucide-react';
import ThemeToggle from './theme-toggle';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/honours', label: 'Honours', icon: Award },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground">
            Gobinda
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth"
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-lg"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon size={16} className={isActive ? 'text-primary' : 'text-muted-foreground'} />
                  <span className={isActive ? 'text-primary font-medium' : 'text-muted-foreground'}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="p-2 rounded-lg transition-smooth"
                >
                  <Icon size={20} className={isActive ? 'text-primary' : 'text-muted-foreground'} />
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;