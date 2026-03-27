import React from 'react'
import { ArrowUpRight, DollarSign, Film, Ticket, Users } from 'lucide-react'

const StatsCard = () => {
    const stats = [
        { label: 'Total Revenue', val: '$48,250', icon: <DollarSign size={20} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
        { label: 'Active Movies', val: '24', icon: <Film size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/10' },
        { label: 'Total Tickets', val: '1,840', icon: <Ticket size={20} />, color: 'text-amber-400', bg: 'bg-amber-500/10' },
        { label: 'Total Users', val: '12,500', icon: <Users size={20} />, color: 'text-violet-400', bg: 'bg-violet-500/10' },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
                <div key={i} className="bg-[#141414] p-6 rounded-2xl border border-gray-800/50 hover:border-gray-700 cursor-pointer">
                    <div className="flex items-center justify-between">
                        <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>{stat.icon}</div>
                        <span className="text-xs font-bold text-emerald-500 flex items-center bg-emerald-500/10 px-2 py-1 rounded-lg">
                            <ArrowUpRight size={14} /> 12%
                        </span>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">{stat.label}</p>
                        <h3 className="text-2xl font-bold text-white mt-1 tracking-tight">{stat.val}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StatsCard