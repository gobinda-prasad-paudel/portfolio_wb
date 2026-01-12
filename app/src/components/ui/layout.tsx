import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './navigation';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;