import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Film,
  Ticket,
  Settings,
  BarChart3,
  ShieldCheck,
  LogOut
} from 'lucide-react';

const Sidebar = ({ isShowLabel }) => {
   const [activeTab, setActiveTab] = useState('Dashboard');
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard'},
    { icon: <Users size={20} />, label: 'Manage Admins'},
    { icon: <Film size={20} />, label: 'Movies List' },
    { icon: <Ticket size={20} />, label: 'Bookings' },
    { icon: <BarChart3 size={20} />, label: 'Revenue' },
    { icon: <ShieldCheck size={20} />, label: 'Permissions'},
    { icon: <Settings size={20} />, label: 'System Settings' },
  ];

  return (
    <div className={`h-[92vh] overflow-hidden ${isShowLabel ? 'w-66' : 'w-20'} transform transition-all duration-300 ease-in-out bg-[#0a0a0a] border-r border-white/5 flex flex-col sticky top-0 left-0`}>



      {/* Navigation Links */}
      <div className="mt-10 text-gray-400 flex flex-col gap-4 items-left">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(item.label)}
            className={`flex items-center gap-2 cursor-pointer md:hover:bg-white/5 px-4 py-2 hover:text-white ${activeTab === item.label && 'text-amber-500'} ${activeTab === item.label && isShowLabel && 'bg-amber-500/10 border border-amber-500/20'}`}
          >
            <span >
              {item.icon}
            </span>

            <span className='text-nowrap'>{isShowLabel && item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
