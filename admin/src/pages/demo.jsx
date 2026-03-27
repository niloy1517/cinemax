import React, { useState } from 'react';
import { Search, Plus, CheckCircle, Filter, Globe } from 'lucide-react';

const MovieImporter = () => {
  // ১. জঁরা এবং ল্যাঙ্গুয়েজ লিস্ট (TMDB অনুযায়ী)
  const genres = [
    { id: 28, name: "Action" }, { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" }, { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" }, { id: 18, name: "Drama" },
    { id: 27, name: "Horror" }, { id: 10749, name: "Romance" }
  ];

  const languages = [
    { code: 'en', name: 'English' }, { code: 'bn', name: 'Bengali' },
    { code: 'hi', name: 'Hindi' }, { code: 'ko', name: 'Korean' },
    { code: 'es', name: 'Spanish' }
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-300 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Main Search */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-4">TMDB Movie Importer</h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by movie name..." 
              className="w-full bg-[#161b22] border border-slate-700 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 outline-none text-white text-lg transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Filters Section (Genre, Language, Year) */}
        <div className="flex flex-wrap gap-4 mb-8 bg-[#161b22] p-5 rounded-xl border border-slate-800">
          
          {/* Genre Filter */}
          <div className="flex-1 min-w-[200px]">
            <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase mb-2">
              <Filter size={14} /> Select Genre
            </label>
            <select className="w-full bg-[#0d1117] border border-slate-700 rounded-lg py-2.5 px-3 focus:border-blue-500 outline-none">
              <option value="">All Genres</option>
              {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
            </select>
          </div>

          {/* Language Filter */}
          <div className="flex-1 min-w-[200px]">
            <label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase mb-2">
              <Globe size={14} /> Original Language
            </label>
            <select className="w-full bg-[#0d1117] border border-slate-700 rounded-lg py-2.5 px-3 focus:border-blue-500 outline-none">
              <option value="">Any Language</option>
              {languages.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
            </select>
          </div>

          {/* Year Filter (Optional but useful) */}
          <div className="w-full md:w-32">
            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Release Year</label>
            <input 
              type="number" 
              placeholder="2024"
              className="w-full bg-[#0d1117] border border-slate-700 rounded-lg py-2 px-3 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Fetch/Reset Button */}
          <div className="flex items-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all h-[46px]">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Results Grid - এখানে মুভিগুলো দেখাবে */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Example Movie Card */}
          <div className="bg-[#161b22] rounded-xl border border-slate-800 p-3 group hover:shadow-2xl transition-all">
            <img 
              src="https://via.placeholder.com" 
              alt="Poster" 
              className="rounded-lg mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <h3 className="font-semibold text-white truncate text-sm">Example Movie Name</h3>
            <p className="text-xs text-slate-500 mb-3">Action • 2024</p>
            <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-1 text-xs font-bold">
              <Plus size={14} /> Add to Site
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MovieImporter;
