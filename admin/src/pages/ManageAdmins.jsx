import React from 'react';
import { Users, ShieldCheck, Mail, Calendar, MoreVertical, UserPlus, Search, Trash2, Edit2 } from 'lucide-react';

const ManageAdmins = () => {
  const admins = [
    { id: 1, name: "Rahat Chowdhury", email: "rahat@cinegold.com", role: "Super Admin", joined: "12 Oct 2023", status: "Active" },
    { id: 2, name: "Anika Ahmed", email: "anika@cinegold.com", role: "Editor", joined: "15 Nov 2023", status: "Active" },
    { id: 3, name: "Siam Hasan", email: "siam@cinegold.com", role: "Moderator", joined: "02 Jan 2024", status: "Inactive" },
    { id: 4, name: "Tanvir Hossain", email: "tanvir@cinegold.com", role: "Support", joined: "20 Feb 2024", status: "Active" },
  ];

  return (
    <div className="p-6 bg-[#0a0a0a] min-h-screen text-gray-300 space-y-8 animate-in fade-in duration-500">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
             <ShieldCheck className="text-indigo-500" /> Manage System Admins
          </h1>
          <p className="text-gray-500 text-sm mt-1">Control access levels and manage team permissions.</p>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-500 transition shadow-[0_0_15px_rgba(79,70,229,0.4)] flex items-center gap-2">
          <UserPlus size={18} /> Add New Admin
        </button>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="bg-[#141414] p-4 rounded-2xl border border-gray-800/50 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-all text-gray-200"
          />
        </div>
        <select className="bg-[#0a0a0a] border border-gray-800 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:border-indigo-500/50 text-gray-400 w-full md:w-48">
          <option>All Roles</option>
          <option>Super Admin</option>
          <option>Editor</option>
          <option>Moderator</option>
        </select>
      </div>

      {/* 3. Admins Table */}
      <div className="bg-[#141414] rounded-3xl border border-gray-800/50 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-gray-500 text-[11px] uppercase font-bold tracking-widest border-b border-gray-800/50 bg-[#181818]/50">
              <tr>
                <th className="px-8 py-5">Admin Info</th>
                <th className="px-8 py-5">Role</th>
                <th className="px-8 py-5">Joined Date</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50 text-sm">
              {admins.map((admin) => (
                <tr key={admin.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold border border-gray-700 shadow-lg">
                        {admin.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-white group-hover:text-indigo-400 transition-colors">{admin.name}</p>
                        <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                          <Mail size={12} /> {admin.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border uppercase tracking-wider
                      ${admin.role === 'Super Admin' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-gray-800 text-gray-400 border-gray-700'}
                    `}>
                      {admin.role}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-gray-400 flex items-center gap-1.5 font-medium">
                      <Calendar size={14} className="text-gray-600" /> {admin.joined}
                    </p>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${admin.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-rose-500'}`}></div>
                      <span className={`text-xs font-semibold ${admin.status === 'Active' ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {admin.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-2 hover:bg-indigo-500/10 hover:text-indigo-400 rounded-lg transition-all text-gray-500" title="Edit Admin">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-rose-500/10 hover:text-rose-500 rounded-lg transition-all text-gray-500" title="Delete Admin">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Dummy */}
        <div className="p-5 border-t border-gray-800/50 bg-[#181818]/30 flex justify-between items-center text-xs text-gray-500">
           <p>Showing 4 of 12 admins</p>
           <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-800 rounded hover:bg-white/5 disabled:opacity-30 cursor-not-allowed">Prev</button>
              <button className="px-3 py-1 bg-indigo-600/20 text-indigo-400 border border-indigo-500/20 rounded">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAdmins;
