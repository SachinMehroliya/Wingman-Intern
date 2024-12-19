import React from 'react';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex flex-row">
      {/* Sidebar: visible only on medium and larger screens */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      {/* Dashboard */}
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;


