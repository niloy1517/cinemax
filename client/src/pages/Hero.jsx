import { heroMovies } from "../assets/assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {

  return (
    <div className="w-full bg-[#121212]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
      >
        <div className="w-full hidden md:block">
          {
            heroMovies.map(movie => (
              <SwiperSlide key={movie.id} className="w-full h-0 md:min-h-[380px] lg:min-h-[420px] xl:min-h-[450px]">
                <img className="w-full h-70 lg:h-80 object-cover blur-[20px]" src={movie.cover} alt="cover" />
                
                {/* Changed: Light gradient to Dark #121212 gradient */}
                <div className="absolute w-full inset-0 top-0 left-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent z-10"></div>
                
                <div className="fixed w-full h-full flex items-center justify-between px-10 lg:px-20 z-30 top-0 left-0">
                  <div className="flex flex-col gap-3">
                    {/* Changed: text-gray-900 to white */}
                    <p className="text-5xl font-semibold text-white">{movie.title}</p>
                    
                    {/* Changed: text-gray-800 to gray-400 (Professional Muted) */}
                    <p className="text-3xl font-medium text-gray-300">{movie.genre}</p>
                    
                    {/* Changed: bg-black to bg-[#E50914] (Cinema Red) */}
                    <button className="max-w-50 h-14 rounded-2xl bg-amber-500 hover:bg-amber-600 transition-colors text-white text-[22px] font-medium mt-6 cursor-pointer shadow-lg shadow-red-900/20">
                        Book Now
                    </button>
                  </div>
                  
                  {/* Added: subtle border to poster for depth */}
                  <img className="min-w-54 lg:min-w-66 h-[86%] rounded-2xl border border-white/10 shadow-2xl" src={movie.poster} alt="" />
                </div>
              </SwiperSlide>
            ))
          }
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
