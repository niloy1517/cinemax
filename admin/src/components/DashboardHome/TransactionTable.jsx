import React from 'react'

const TransactionTable = () => {
    const tableColumLabel = ['Customer', 'Movie', 'Amount', 'Status'];

    const transactions = [
        {
            id: 1,
            customer: "Rahat Chowdhury",
            type: "Premium User",
            movie: "Interstellar 4K",
            amount: "$24.00",
            status: "PAID",
            statusColor: "text-emerald-500 bg-emerald-500/10"
        },
        {
            id: 2,
            customer: "Arifin Shuvo",
            type: "Regular User",
            movie: "John Wick: Chapter 4",
            amount: "$18.50",
            status: "PAID",
            statusColor: "text-emerald-500 bg-emerald-500/10"
        },
        {
            id: 3,
            customer: "Nusrat Faria",
            type: "VIP Guest",
            movie: "Avatar: Way of Water",
            amount: "$35.00",
            status: "PENDING",
            statusColor: "text-amber-500 bg-amber-500/10"
        },
        {
            id: 4,
            customer: "Tanvir Ahmed",
            type: "Premium User",
            movie: "The Dark Knight",
            amount: "$22.00",
            status: "PAID",
            statusColor: "text-emerald-500 bg-emerald-500/10"
        },
        {
            id: 5,
            customer: "Safa Kabir",
            type: "Regular User",
            movie: "Inception (Re-run)",
            amount: "$12.00",
            status: "FAILED",
            statusColor: "text-rose-500 bg-rose-500/10"
        }
    ];


    const getStatusStyles = (status) => {
        switch (status) {
            case 'PAID':
                return 'text-emerald-500 bg-emerald-500/10 border border-emerald-500/20';
            case 'PENDING':
                return 'text-amber-500 bg-amber-500/10 border border-amber-500/20';
            case 'FAILED':
                return 'text-rose-500 bg-rose-500/10 border border-rose-500/20';
            default:
                return 'text-gray-400 bg-gray-400/10 border border-gray-400/20';
        }
    };

    return (
        <div className='min-w-[600px] border border-white/15 rounded-2xl'>
            <div className='w-full h-14 flex items-center justify-between bg-white/5 px-4'>
                <h1 className='font-semibold text-[18px]'>Recent Transaction</h1>
                <button className='text-amber-500 hover:text-amber-600 cursor-pointer font-medium'>View All</button>
            </div>

            <div className='w-full px-4'>
                <table className='w-full text-left'>
                    <thead className=''>
                        <tr className='border-b border-white/15'>
                            {
                                tableColumLabel.map((label, index) => (
                                    <th key={index} className='py-4'>{label}</th>
                                ))
                            }
                        </tr>
                    </thead>


                    <tbody className='text-gray-400 text-sm'>
                        {
                            transactions.map((transaction, index) => (
                                <tr className={`${index !== transactions.length -1 && 'border-b'} border-white/15`}>
                                    <td className='py-4'>{transaction.customer}</td>
                                    <td>{transaction.movie}</td>
                                    <td>{transaction.amount}</td>
                                    <td>
                                        <span className={`inline-block w-20 text-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider border transition-all ${getStatusStyles(transaction.status)}`}>
                                            {transaction.status}
                                        </span>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default TransactionTable