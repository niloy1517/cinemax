import React from 'react'
import { ChevronsLeft, ChevronsRight, MoveLeft, MoveRight } from 'lucide-react'


const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
    const onchangePage = () => {
        const visiablePage = 9;
        const pages = [];
        const startPage = Math.max(1, currentPage - Math.floor(visiablePage / 2))
        const endPage = Math.min(totalPage, startPage + visiablePage - 1);

        // if (endPage - startPage < visiablePage - 1) {
        //     startPage = Math.max(1, endPage - visiablePage + 1)
        // }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i)
        }
        return pages
    }

    const buttons = onchangePage()

    return (
        <div className='flex items-center gap-3 text-gray-400 my-10'>
            {
                currentPage !== 1 &&
                <div className='flex items-center gap-3'>
                    <button onClick={() => setCurrentPage(1)} className='cursor-pointer'><ChevronsLeft /></button>
                    <button onClick={() => setCurrentPage(currentPage - 1)} className='cursor-pointer'><MoveLeft /></button>
                </div>
            }
            <div className='flex items-center gap-3'>
                {
                    buttons.map(button => (
                        <button key={button} onClick={() => setCurrentPage(button)} className={`w-8 h-8 rounded border border-white/15 cursor-pointer ${currentPage === button && 'bg-amber-500 text-black font-semibold'}`}>{button}</button>
                    ))
                }
            </div>
            {
                currentPage !== totalPage &&
                <div className='flex items-center gap-3'>
                    <button onClick={() => setCurrentPage(currentPage + 1)} className='cursor-pointer'><MoveRight /></button>
                    <button onClick={() => setCurrentPage(totalPage)} className='cursor-pointer'><ChevronsRight /></button>
                </div>
            }
        </div>
    )
}

export default Pagination