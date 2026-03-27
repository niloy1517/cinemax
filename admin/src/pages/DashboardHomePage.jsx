import React from 'react'
import { ArrowUpRight, DollarSign, Film, Filter, Plus, Ticket, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import AnalyticsChart from '../components/DashboardHome/AnalyticsChart';
import StatsCard from '../components/DashboardHome/StatsCard';
import TransactionTable from '../components/DashboardHome/TransactionTable';

const DashboardHomePage = () => {
   const navigate = useNavigate()
    return (
        <div className='w-full h-[92vh] flex flex-col gap-14 overflow-y-auto bg-[#0a0a0a] text-white p-6'>
            <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl font-semibold'>Overview</h1>
                    <p className='text-gray-300'>Real-time overview of your cinema empire.</p>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='px-5 py-2 rounded-xl flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/15 cursor-pointer'>
                        <Filter size={16} />
                        <span>Filter</span>
                    </button>
                    <button onClick={() => navigate('tmdb/movies')} className='px-5 py-2 rounded-xl flex items-center gap-1 cursor-pointer bg-amber-500 hover:bg-amber-600'>
                        <Plus size={14} />
                        <span>Add Movie</span>
                    </button>
                </div>
            </div>

            <StatsCard />
            <TransactionTable />
            
        </div>
    )
}

export default DashboardHomePage