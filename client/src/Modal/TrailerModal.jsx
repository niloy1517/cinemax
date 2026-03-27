import React, { useContext } from 'react'
import { trailers } from '../assets/assets'
import { storeContext } from '../Context/Context'
import { X } from 'lucide-react'
import { useScrollLock } from '../Hooks/useScrollLock'
import { useSelector } from 'react-redux'

const TrailerModal = () => {
  const { isOpenTrailerModal, setIsOpenTrailerModal} = useContext(storeContext);

  useScrollLock(isOpenTrailerModal);

  const selectedMovieData = useSelector((state) => state.movie.selectedMovie);

  if (!isOpenTrailerModal) return null

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/90"
        onClick={() => setIsOpenTrailerModal(false)}
      />

      {/* Video wrapper */}
      <div className="relative z-40 w-[90%] max-w-4xl aspect-video">
        
        {/* Close icon ON video */}
        <X
          onClick={() => setIsOpenTrailerModal(false)}
          className="absolute -top-4 -right-4 bg-black text-white p-1 rounded-full cursor-pointer z-50"
          size={28}
        />

        <iframe
          src={`https://www.youtube.com/embed/${selectedMovieData.videoUrl}?autoplay=1`}
          className="w-full h-full rounded-lg"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default TrailerModal
