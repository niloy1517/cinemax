import { X } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storeContext } from '../Context/Context';

const SelectFormatAndLanguageModal = ({ formatedDate, selectedMovie, setOpenFormatAndLanguageModal }) => {
  const navigate = useNavigate();

  const {setSelectedMovieData} = useContext(storeContext)

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedShowTime, setSelectedShowTime] = useState('');
  const [selectedHall, setSelectedHall] = useState('');

  // Store unique language in uniqueLanguages
  const uniqueLanguages = [...new Set(selectedMovie?.shows?.map(s => s.language))];
  
  // Update language and default format when movie changes
  useEffect(() => {
    if (uniqueLanguages.length > 0) {
      setSelectedLanguage(uniqueLanguages[0]);
    }
  }, [selectedMovie]);

  const uniqueFormats = [...new Set(
    selectedMovie?.shows
      ?.filter(s => s.language === selectedLanguage)
      .map(s => s.format)
  )];

  // Filter shows based on all selections
  const filteredShows = selectedMovie?.shows?.filter(show => 
    show.language === selectedLanguage && 
    show.format === selectedFormat && 
    show.date === formatedDate
  );

  const handleNavigate = () => {
    setTimeout(() => navigate('/seats'), 1000);
  };

  const closeModal = () => {
    setOpenFormatAndLanguageModal(false);
    setSelectedShowTime('');
    setSelectedFormat('');
  };


   useEffect(() => {
        setSelectedMovieData(prev => ({
            ...prev,
            movie: {
              ...prev.movie,
              language: selectedLanguage,
              format: selectedFormat,
              showTime: selectedShowTime,
              showHall: selectedHall
            }
        }))
    }, [selectedFormat, selectedLanguage, selectedShowTime])

  return (
    <div className='bg-white min-w-[500px] p-6 rounded-2xl shadow-2xl'>
      <div className='w-full flex items-center justify-between mb-2'>
        <p className='text-[18px] font-semibold uppercase tracking-wider text-gray-800'>{selectedMovie.title}</p>
        <X size={20} onClick={closeModal} className='cursor-pointer hover:text-red-600' />
      </div>
      
   

      {/* Language Selection */}
      <div className='flex flex-col space-y-2'>
        <label className='font-medium text-gray-600'>Select Language</label>
        <select 
          value={selectedLanguage} 
          onChange={(e) => { setSelectedLanguage(e.target.value); setSelectedFormat(''); }} 
          className='w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-red-500 outline-none'
        >
          {uniqueLanguages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      {/* Format Selection */}
      <div className='mt-6'>
        <p className='font-medium text-gray-600 mb-1'>Select Format</p>
        <div className='flex gap-2'>
          {uniqueFormats.map(format => (
            <button
              key={format}
              onClick={() => setSelectedFormat(format)}
              className={`text-sm px-4 py-1.5 border rounded-md cursor-pointer transition-all ${
                format === selectedFormat 
                ? 'bg-red-700 text-white border-red-700' 
                : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              {format}
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedFormat && (
        <div className='mt-6'>
          <p className='text-sm font-medium text-gray-600 mb-2'>Available Times</p>
          <div className='flex flex-wrap gap-3'>
            {filteredShows.length > 0 ? (
              filteredShows.map((show, idx) => (
                <button
                  key={show.id || idx}
                  onClick={() => {setSelectedShowTime(show.time), setSelectedHall(show.hall)}}
                  className={`px-4 py-1.5 text-sm border rounded-md cursor-pointer transition-all ${
                    show.time === selectedShowTime 
                    ? 'bg-red-700 text-white border-red-700' 
                    : 'border-gray-300 hover:border-red-700 text-red-700'
                  }`}
                >
                  {show.time}
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-400 italic">No shows available for this selection.</p>
            )}
          </div>
        </div>
      )}

      {/* Navigation Action */}
      <div className='mt-8'>
        <button
          disabled={!selectedShowTime}
          onClick={handleNavigate}
          className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
            selectedShowTime 
            ? 'bg-red-700 text-white shadow-lg cursor-pointer hover:bg-red-800' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {selectedShowTime ? `Book ${selectedShowTime} Show` : 'Select a Time to Continue'}
        </button>
      </div>
    </div>
  );
};

export default SelectFormatAndLanguageModal;
