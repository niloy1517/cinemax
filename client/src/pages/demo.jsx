// import React, { useState } from 'react';
// import { assets } from '../assets/assets';

// const demo = () => {
//   // ডিজাইন আইডিয়ার জন্য কিছু ডামি মুভি ডেটা
//   const movies = Array.from({ length: 18 }).map((_, i) => ({
//     id: i,
//     title: `Trending Movie ${i + 1}`,
//     year: 2024,
//     rating: (Math.random() * (10 - 7) + 7).toFixed(1),
//     genre: i % 2 === 0 ? "Action" : "Drama",
//     poster: assets.p2
//   }));

//   return (
//     <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100">
      
//       {/* ১. টপ লিডারবোর্ড অ্যাড (Sticky Ad Bar) */}
//       <div className="bg-gray-50 border-b border-gray-100 py-3 flex justify-center sticky top-0 z-50 backdrop-blur-md bg-white/80">
//         <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] px-6 py-1.5 rounded-full border border-dashed border-gray-300">
//           Advertisement - 728x90 Banner
//         </div>
//       </div>

//       <main className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        
//         {/* ২. প্রিমিয়াম হিরো ব্যানার সেকশন */}
//         <div className="relative w-full h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden mb-12 shadow-2xl group">
//           <img 
//             src="https://via.placeholder.com" 
//             className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//             alt="Featured Movie"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-8 md:p-16">
//             <div className="flex items-center gap-3 mb-4">
//               <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider">Must Watch</span>
//               <span className="text-white/70 text-sm font-medium">⭐ 9.2 Rating</span>
//             </div>
//             <h1 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-none">THE LAST JOURNEY</h1>
//             <p className="text-gray-300 max-w-xl text-sm md:text-lg mb-8 line-clamp-2 font-medium">
//               Experience the epic conclusion to the saga that changed cinema forever. Now streaming in IMAX 4K.
//             </p>
//             <div className="flex gap-4">
//               <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30">Watch Trailer</button>
//               <button className="bg-white/10 backdrop-blur-xl text-white px-10 py-4 rounded-2xl font-bold text-sm border border-white/20 hover:bg-white/20 transition-all">Add to List</button>
//             </div>
//           </div>
//         </div>

//         {/* ৩. ক্যাটাগরি চিপস (Filters) */}
//         <div className="flex gap-3 overflow-x-auto pb-10 no-scrollbar items-center">
//           <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Browse:</span>
//           {["All", "Action", "Romance", "Horror", "Sci-Fi", "Animation", "Documentary"].map((cat, i) => (
//             <button key={i} className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-[13px] font-bold border transition-all ${i===0 ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20' : 'bg-white text-slate-500 border-gray-200 hover:border-blue-600 hover:text-blue-600'}`}>
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* ৪. মেইন কন্টেন্ট গ্রিড এবং সাইডবার */}
//         <div className="flex flex-col lg:flex-row gap-12">
          
//           {/* বাঁদিকের মুভি লিস্ট */}
//           <div className="flex-1">
//             <div className="flex items-center justify-between mb-8">
//               <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
//                 <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
//                 MOVIES IN THEATERS
//               </h2>
//               <select className="bg-gray-50 border-none text-xs font-bold text-slate-500 rounded-lg px-4 py-2 outline-none cursor-pointer">
//                 <option>Newest First</option>
//                 <option>Most Popular</option>
//               </select>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-12">
//               {movies.map((movie, index) => (
//                 <React.Fragment key={movie.id}>
//                   {/* মুভি কার্ড */}
//                   <div className="group cursor-pointer">
//                     <div className="relative aspect-[2/3] rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 bg-gray-50">
//                       <img src={movie.poster} className="w-full h-full object-cover" alt={movie.title} />
//                       {/* হোভার ওভারলে */}
//                       <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                          <div className="bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
//                            <span className="text-xl">▶</span>
//                          </div>
//                       </div>
//                       {/* রেটিং ব্যাজ */}
//                       <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-sm border border-white/50">
//                         <span className="text-[11px] font-black text-slate-800">★ {movie.rating}</span>
//                       </div>
//                     </div>
//                     <div className="mt-4 px-1">
//                       <h3 className="font-extrabold text-sm text-slate-800 group-hover:text-blue-600 transition-colors truncate uppercase tracking-tight">{movie.title}</h3>
//                       <div className="flex items-center gap-2 mt-1.5">
//                         <span className="text-[10px] font-bold text-slate-400">{movie.year}</span>
//                         <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
//                         <span className="text-[10px] font-bold text-blue-500 uppercase">{movie.genre}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* প্রতি ৬টি মুভির পর একটি ইন-গ্রিড অ্যাড */}
//                   {(index + 1) % 6 === 0 && (
//                     <div className="col-span-full h-32 bg-blue-50/50 rounded-3xl border-2 border-dashed border-blue-100 flex flex-col items-center justify-center my-4 group cursor-pointer hover:bg-blue-50 transition-colors">
//                         <span className="text-[9px] font-black text-blue-300 uppercase tracking-[0.5em] mb-2">Sponsored Content</span>
//                         <p className="text-blue-700 font-bold text-sm">Download Our Desktop App for 4K Streaming</p>
//                     </div>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>

//           {/* ডানদিকের সাইডবার (Ads & Trending) */}
//           <div className="lg:w-80 shrink-0">
//             <div className="sticky top-24 space-y-10">
              
//               {/* সাইডবার বিজ্ঞাপন */}
//               <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 text-center flex flex-col items-center">
//                 <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
//                   <span className="text-blue-600 text-xl font-bold">!</span>
//                 </div>
//                 <h4 className="font-black text-slate-800 mb-2">Unlock Premium</h4>
//                 <p className="text-xs text-slate-500 mb-6 leading-relaxed">Get rid of all advertisements and enjoy 8K movies.</p>
//                 <button className="w-full bg-slate-900 text-white py-3 rounded-xl text-xs font-bold hover:shadow-xl transition-all">Upgrade Now</button>
//               </div>

//               {/* ট্রেন্ডিং লিস্ট */}
//               <div>
//                 <h4 className="font-black text-sm uppercase tracking-widest text-slate-400 mb-6">Trending News</h4>
//                 <div className="space-y-6">
//                   {[1, 2, 3].map(i => (
//                     <div key={i} className="flex gap-4 group cursor-pointer">
//                       <div className="w-16 h-16 rounded-xl bg-gray-100 shrink-0 overflow-hidden">
//                          <img src={`https://via.placeholder.com{i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="" />
//                       </div>
//                       <div className="flex flex-col justify-center">
//                         <h5 className="text-[13px] font-bold leading-tight group-hover:text-blue-600 transition-colors">Marvel's Secret Project Leaked in 2024</h5>
//                         <span className="text-[10px] text-slate-400 mt-1 uppercase font-bold">2 Hours Ago</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* স্কাইস্ক্র্যাপার অ্যাড */}
//               <div className="w-full h-[300px] bg-slate-50 rounded-3xl border border-dashed border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-300 uppercase vertical-lr">
//                 300 x 600 Ad Slot
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ৫. ফুটার ব্যানার অ্যাড ও সিম্পল ফুটার */}
//         <div className="mt-24 pb-12">
//             <div className="w-full h-40 bg-slate-900 rounded-[2.5rem] flex flex-col items-center justify-center text-white shadow-2xl relative overflow-hidden group cursor-pointer">
//                 <div className="absolute inset-0 bg-blue-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
//                 <span className="relative z-10 text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em] mb-2">Limited Time Offer</span>
//                 <h3 className="relative z-10 text-xl md:text-2xl font-black italic">GET 50% OFF ON ANNUAL SUBSCRIPTION</h3>
//                 <p className="relative z-10 text-[10px] mt-2 opacity-50 font-bold uppercase tracking-widest">Click to Learn More</p>
//             </div>
            
//             <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
//                 <div className="text-xl font-black italic tracking-tighter">MOVIE<span className="text-blue-600">X</span></div>
//                 <div className="flex gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
//                     <span className="hover:text-blue-600 cursor-pointer">Terms</span>
//                     <span className="hover:text-blue-600 cursor-pointer">Privacy</span>
//                     <span className="hover:text-blue-600 cursor-pointer">Cookies</span>
//                 </div>
//                 <p className="text-slate-400 text-[11px] font-medium italic">© 2024 MovieX Network. All Rights Reserved.</p>
//             </div>
//         </div>

//       </main>







//       <div className='flex flex-col gap-8'>
//                 {/* filter by language */}
//                 <div className='w-[320px] h-auto border border-gray-600 p-3 bg-white'>
//                     <div className='flex items-center justify-between'>
//                         <button
//                             onClick={() => setIsLanguageFilter(!isLanguageFilter)}
//                             className='flex items-center gap-1 cursor-pointer'
//                         >
//                             {!isLanguageFilter ? <ChevronDown /> : <ChevronUp />}
//                             <span>Languages</span>
//                         </button>
//                         <button
//                             onClick={() => { setIsLanguageFilter(false), setSelectedLanguages([]) }}
//                             className='cursor-pointer text-gray-500'
//                         >
//                             Clear
//                         </button>
//                     </div>
//                     {
//                         isLanguageFilter &&
//                         <div className='flex flex-wrap gap-3 mt-4'>
//                             {
//                                 languages.map(lan => (
//                                     <button
//                                         key={lan.id}
//                                         onClick={() => handleLanguageChange(lan.name)}
//                                         className={`px-2 py-1 border border-gray-600 rounded ${selectedLanguages.find(lang => lang === lan.name) ? 'bg-red-700' : ''}`}
//                                     >
//                                         {lan.name}
//                                     </button>
//                                 ))
//                             }
//                         </div>
//                     }
//                 </div>

//                 {/* filter by genres */}
//                 <div className='w-[320px] h-auto border border-gray-600 p-3'>
//                     <div className='flex items-center justify-between'>
//                         <button
//                             onClick={() => setIsGenreFilter(!isGenreFilter)}
//                             className='flex items-center gap-1 cursor-pointer'
//                         >
//                             {!isGenreFilter ? <ChevronDown /> : <ChevronUp />}
//                             <span>Genres</span>
//                         </button>
//                         <button
//                             onClick={() => { setIsGenreFilter(false), setSelectedGenres([]) }}
//                             className='cursor-pointer text-gray-500'
//                         >
//                             Clear
//                         </button>
//                     </div>
//                     {
//                         isGenreFilter &&
//                         <div className='flex flex-wrap gap-3 mt-4'>
//                             {
//                                 genres.map(gen => (
//                                     <button
//                                         key={gen.id}
//                                         onClick={() => handleGenresChange(gen.name)}
//                                         className={`px-2 py-1 border border-gray-600 rounded ${selectedGenres.find(genr => genr === gen.name) ? 'bg-red-700' : ''}`}
//                                     >
//                                         {gen.name}
//                                     </button>
//                                 ))
//                             }
//                         </div>
//                     }
//                 </div>

//                 {/* filter by formats */}
//                 <div className='w-[320px] h-auto border border-gray-600 p-3'>
//                     <div className='flex items-center justify-between'>
//                         <button
//                             onClick={() => setIsFormatFilter(!isFormatFilter)}
//                             className='flex items-center gap-1 cursor-pointer'
//                         >
//                             {!isFormatFilter ? <ChevronDown /> : <ChevronUp />}
//                             <span>Format</span>
//                         </button>
//                         <button
//                             onClick={() => { setIsFormatFilter(false), setSelectedFormats([]) }}
//                             className='cursor-pointer text-gray-500'
//                         >
//                             Clear
//                         </button>
//                     </div>
//                     {
//                         isFormatFilter &&
//                         <div className='flex flex-wrap gap-3 mt-4'>
//                             {
//                                 formats.map(format => (
//                                     <button
//                                         key={format.id}
//                                         onClick={() => handleFormatsChange(format.name)}
//                                         className={`px-2 py-1 border border-gray-600 rounded ${selectedFormats.find(form => form === format.name) ? 'bg-red-700' : ''}`}
//                                     >
//                                         {format.name}
//                                     </button>
//                                 ))
//                             }
//                         </div>
//                     }
//                 </div>
//             </div>
//     </div>
//   );
// };

// export default demo;




// import React, { useState } from 'react';
// import { Info, RockingChair, MapPin } from 'lucide-react';

// const MovieShowtimeCard = () => {
//   // ডাইনামিক ডেটা স্ট্রাকচার
//   const movieData = {
//     title: "Nirvanna the Band the Show the Movie (2025)",
//     rating: "R",
//     duration: "1 hr 39 min",
//     poster: "https://via.placeholder.com", 
//     theater: "Star Cineplex, Bashundhara City",
//     options: [
//       {
//         lang: "English",
//         formats: [
//           { name: "STANDARD 2D", times: ["12:30 PM", "03:30 PM", "06:00 PM"] },
//           { name: "IMAX 3D", times: ["01:00 PM", "09:15 PM"] }
//         ]
//       },
//       {
//         lang: "Bengali",
//         formats: [
//           { name: "STANDARD 2D", times: ["11:00 AM", "04:00 PM"] }
//         ]
//       },
//       {
//         lang: "Hindi",
//         formats: [
//           { name: "STANDARD 2D", times: ["02:15 PM", "07:30 PM"] },
//           { name: "4DX", times: ["10:30 PM"] }
//         ]
//       }
//     ]
//   };

//   const [selectedLang, setSelectedLang] = useState(movieData.options[0].lang);
//   const currentLangData = movieData.options.find(opt => opt.lang === selectedLang);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 sm:p-8">
//       <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-2xl">
        
//         {/* বাম পাশ: পোস্টার সেকশন */}
//         <div className="w-full md:w-[30%] relative group">
//           <img 
//             src={movieData.poster} 
//             alt="Poster" 
//             className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]" 
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden"></div>
//           <div className="absolute bottom-4 left-6 md:hidden text-white">
//             <h2 className="text-2xl font-black italic uppercase leading-none">{movieData.title}</h2>
//           </div>
//         </div>

//         {/* ডান পাশ: ইনফরমেশন ও শো-টাইম */}
//         <div className="flex-1 p-6 md:p-10 flex flex-col">
          
//           {/* হেডার পার্ট */}
//           <div className="mb-8 hidden md:block">
//             <div className="flex items-center gap-3 text-red-600 mb-2">
//                 <MapPin size={18} />
//                 <span className="text-sm font-bold tracking-wide uppercase">{movieData.theater}</span>
//             </div>
//             <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-3 italic uppercase">
//                 {movieData.title}
//             </h1>
//             <div className="flex items-center gap-4">
//               <span className="bg-gray-900 text-white px-2 py-0.5 text-[10px] rounded font-black tracking-widest">{movieData.rating}</span>
//               <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{movieData.duration}</span>
//             </div>
//           </div>

//           <div className="flex-1">
//             {/* ১. ভাষা সিলেকশন */}
//             <div className="mb-8">
//               <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-4">Select Language</p>
//               <div className="flex gap-4 sm:gap-8 border-b border-gray-100">
//                 {movieData.options.map((opt) => (
//                   <button
//                     key={opt.lang}
//                     onClick={() => setSelectedLang(opt.lang)}
//                     className={`text-sm font-black pb-3 transition-all cursor-pointer relative ${
//                       selectedLang === opt.lang 
//                       ? "text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600" 
//                       : "text-gray-300 hover:text-gray-600"
//                     }`}
//                   >
//                     {opt.lang.toUpperCase()}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* ২. শো-টাইম গ্রিড */}
//             <div className="space-y-8">
//               {currentLangData.formats.map((format) => (
//                 <div key={format.name} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="w-1 h-4 bg-red-600 rounded-full"></div>
//                     <p className="text-[11px] text-gray-500 font-black tracking-widest uppercase italic">
//                         {format.name}
//                     </p>
//                   </div>
//                   <div className="flex flex-wrap gap-3">
//                     {format.times.map((time) => (
//                       <button 
//                         key={time}
//                         className="bg-white border-2 border-gray-100 hover:border-red-600 hover:bg-red-50 text-gray-800 hover:text-red-600 px-6 py-3 rounded-xl font-black text-sm transition-all cursor-pointer active:scale-95 shadow-sm"
//                       >
//                         {time}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ৩. ফুটার: ইনফো ও বাটন */}
//           <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6">
//             <div className="flex items-start gap-3 text-gray-400 text-[11px] leading-relaxed max-w-sm">
//               <Info size={18} className="shrink-0 text-red-600/50" />
//               <p>Reserved seating, Recliner Seats, Accessibility devices available, Dine-In Delivery to Seat, Ad Free Preshow</p>
//             </div>
//             <button className="w-full lg:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.1em] flex items-center justify-center gap-3 shadow-lg shadow-red-600/30 transition-all hover:-translate-y-1 active:scale-95 cursor-pointer">
//               <RockingChair size={20} strokeWidth={3} />
//               Check Seats
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieShowtimeCard;



// import React, { useState } from 'react';
// import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 font-sans">
//       <div className="max-w-md w-full bg-[#121212] rounded-[32px] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
        
//         {/* Background Decorative Glow */}
//         <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/20 blur-[80px] rounded-full"></div>
        
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-red-600 text-3xl font-black italic uppercase tracking-tighter mb-2">
//             Cine<span className="text-white">Max</span>
//           </h1>
//           <h2 className="text-white text-xl font-bold italic uppercase tracking-widest">
//             {isLogin ? 'Welcome Back' : 'Join the Club'}
//           </h2>
//           <p className="text-gray-500 text-xs mt-2 font-medium">
//             {isLogin ? 'Login to book your favorite shows' : 'Create an account to start booking'}
//           </p>
//         </div>

//         {/* Form */}
//         <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//           {!isLogin && (
//             <div className="relative group">
//               <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-600 transition-colors" size={20} />
//               <input 
//                 type="text" 
//                 placeholder="Full Name" 
//                 className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 outline-none focus:border-red-600/50 transition-all font-medium"
//               />
//             </div>
//           )}

//           <div className="relative group">
//             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-600 transition-colors" size={20} />
//             <input 
//               type="email" 
//               placeholder="Email Address" 
//               className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 outline-none focus:border-red-600/50 transition-all font-medium"
//             />
//           </div>

//           <div className="relative group">
//             <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-600 transition-colors" size={20} />
//             <input 
//               type={showPassword ? "text" : "password"} 
//               placeholder="Password" 
//               className="w-full bg-[#1a1a1a] border border-white/5 rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-gray-700 outline-none focus:border-red-600/50 transition-all font-medium"
//             />
//             <button 
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           {isLogin && (
//             <div className="text-right">
//               <button className="text-[11px] text-red-600 font-bold uppercase tracking-widest hover:text-red-500 transition-colors cursor-pointer">
//                 Forgot Password?
//               </button>
//             </div>
//           )}

//           <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm cursor-pointer mt-4">
//             {isLogin ? 'Login Now' : 'Create Account'}
//             <ArrowRight size={18} />
//           </button>
//         </form>

//         {/* Footer Toggle */}
//         <div className="mt-8 text-center">
//           <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">
//             {isLogin ? "Don't have an account?" : "Already have an account?"}
//             <button 
//               onClick={() => setIsLogin(!isLogin)}
//               className="ml-2 text-red-600 hover:text-red-500 transition-colors cursor-pointer"
//             >
//               {isLogin ? 'Register' : 'Login'}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;



// import { heroMovies } from "../assets/assets";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import { Ticket } from 'lucide-react'; // Adding an icon for flair

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';

// const Hero = () => {
//   return (
//     <div className="w-full bg-[#0a0a0a]">
//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]}
//         effect="fade" // Smoother cinematic transition
//         speed={1000}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false
//         }}
//         pagination={{
//           clickable: true,
//           dynamicBullets: true,
//         }}
//         className="hero-swiper"
//       >
//         {heroMovies.map((movie) => (
//           <SwiperSlide key={movie.id} className="relative w-full h-[550px] overflow-hidden">
//             {/* Background: Blurred Cover with Dark Overlay */}
//             <div className="absolute inset-0 z-0">
//                 <img 
//                     className="w-full h-full object-cover scale-110 blur-[40px] opacity-40" 
//                     src={movie.cover} 
//                     alt="background" 
//                 />
//                 {/* Cinematic Gradient: Fades to black at the bottom to blend with page */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
//             </div>

//             {/* Content Container */}
//             <div className="relative z-20 h-full max-w-[1440px] mx-auto flex items-center justify-between px-20">
              
//               {/* Left Side: Movie Details */}
//               <div className="flex flex-col gap-4 max-w-2xl animate-fade-in-up">
//                 <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm">Now Showing</span>
//                 <h1 className="text-6xl font-black text-white leading-tight drop-shadow-lg">
//                     {movie.title}
//                 </h1>
//                 <div className="flex items-center gap-4">
//                     <span className="px-3 py-1 border border-gray-500 text-gray-300 text-xs rounded uppercase font-bold tracking-widest">4K Ultra HD</span>
//                     <p className="text-xl font-medium text-gray-300 italic">{movie.genre}</p>
//                 </div>
                
//                 {/* RED CARPET BUTTON */}
//                 <button className="group relative flex items-center justify-center gap-3 w-56 h-16 bg-gradient-to-r from-red-700 to-red-500 text-white rounded-xl shadow-[0_10px_20px_rgba(220,38,38,0.3)] transition-all hover:scale-105 active:scale-95 mt-6 overflow-hidden">
//                     <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
//                     <Ticket size={24} />
//                     <span className="text-lg font-bold uppercase tracking-tighter">Book Now</span>
//                 </button>
//               </div>

//               {/* Right Side: Sharp Poster */}
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
//                 <img 
//                     className="relative w-72 h-[420px] object-cover rounded-2xl shadow-2xl border border-white/10" 
//                     src={movie.poster} 
//                     alt={movie.title} 
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom CSS for Pagination (Add this to your globals.css or a style tag) */}
//       <style>{`
//         .hero-swiper .swiper-pagination-bullet {
//           background: #fff !important;
//           opacity: 0.5;
//         }
//         .hero-swiper .swiper-pagination-bullet-active {
//           background: #dc2626 !important;
//           width: 24px !important;
//           border-radius: 4px !important;
//           opacity: 1;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import { MoveRight, Mail, Lock, User, Github } from 'lucide-react';

// const SignupPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
//       <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
        
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
//           <p className="text-gray-400">Join us to book your favorite movies!</p>
//         </div>

//         {/* Social Logins */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-600 rounded-lg text-white hover:bg-gray-700 transition-all">
//             <img src="https://www.svgrepo.com" className="w-5 h-5" alt="Google" />
//             <span className="text-sm">Google</span>
//           </button>
//           <button className="flex items-center justify-center gap-2 py-2.5 bg-[#1877F2] rounded-lg text-white hover:bg-blue-600 transition-all">
//             <img src="https://www.svgrepo.com" className="w-5 h-5 brightness-200" alt="Facebook" />
//             <span className="text-sm">Facebook</span>
//           </button>
//         </div>

//         <div className="relative mb-6">
//           <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-700"></span></div>
//           <div className="relative flex justify-center text-xs uppercase"><span className="bg-gray-800 px-2 text-gray-500">Or continue with</span></div>
//         </div>

//         {/* Form */}
//         <form className="space-y-4">
//           <div className="relative">
//             <User className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
//             <input type="text" placeholder="Full Name" className="w-full pl-10 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" />
//           </div>

//           <div className="relative">
//             <Mail className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
//             <input type="email" placeholder="Email Address" className="w-full pl-10 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" />
//           </div>

//           <div className="relative">
//             <Lock className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
//             <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" />
//           </div>

//           {/* Submit Button with Hover Animation */}
//           <button className="group w-full flex items-center justify-center gap-4 mt-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-900/20">
//             Create Account
//             <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
//           </button>
//         </form>

//         <p className="mt-8 text-center text-gray-400 text-sm">
//           Already have an account? 
//           <a href="/login" className="text-red-500 hover:underline ml-1 font-medium">Login here</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

import React from 'react';
import { Ticket, Armchair, CheckCircle } from 'lucide-react';

const BookingGuide = () => {
  const steps = [
    {
      id: "01",
      title: "SELECT YOUR SHOW",
      desc: "Browse through the latest blockbusters and pick a showtime that fits your schedule.",
      icon: <Ticket className="w-6 h-6" />,
      // Solid Red accent for white theme
      accent: "bg-red-600 shadow-[0_10px_20px_rgba(220,38,38,0.2)]",
    },
    {
      id: "02",
      title: "PICK THE BEST SEATS",
      desc: "Use our interactive map to choose your preferred viewing angle and comfort level.",
      icon: <Armchair className="w-6 h-6" />,
      accent: "bg-black shadow-[0_10px_20px_rgba(0,0,0,0.1)]",
    },
    {
      id: "03",
      title: "INSTANT CHECKOUT",
      desc: "Secure payment with one-click options and get your QR ticket instantly via email.",
      icon: <CheckCircle className="w-6 h-6" />,
      accent: "bg-red-600 shadow-[0_10px_20px_rgba(220,38,38,0.2)]",
    }
  ];

  return (
    <div className="bg-white py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs">How it works</span>
          <h2 className="text-5xl md:text-6xl font-black text-black mt-4 tracking-tighter">
            BOOK TICKETS IN <br className="md:hidden" /> 
            <span className="text-red-600 uppercase"> 3 Easy Steps</span>
          </h2>
          <div className="w-20 h-1.5 bg-black mx-auto mt-6"></div>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) - Sharp Gray Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group cursor-default">
                <div className="flex flex-col items-center">
                  
                  {/* Icon Square (Professional Sharp Corners) */}
                  <div className={`w-16 h-16 flex items-center justify-center text-white ${step.accent} transform group-hover:-translate-y-2 transition-all duration-500 rounded-sm`}>
                    {step.icon}
                  </div>

                  {/* Step Number - Large Outline/Gray Text */}
                  <div className="mt-8 text-6xl font-black text-gray-100 group-hover:text-red-600/10 transition-colors duration-500 uppercase">
                    {step.id}
                  </div>

                  {/* Text Content */}
                  <div className="text-center mt-4">
                    <h3 className="text-lg font-black text-black tracking-widest group-hover:text-red-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-gray-500 leading-relaxed text-sm font-medium px-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA - Solid Black/Red Professional Button */}
        <div className="flex justify-center mt-24">
          <button className="relative group overflow-hidden bg-black px-12 py-5 transition-all duration-300">
            <span className="absolute inset-0 w-0 bg-red-600 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative text-white font-black tracking-widest text-sm uppercase">
              Start Your Experience
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingGuide;
