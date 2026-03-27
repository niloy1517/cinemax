import { Camera, Trash, Users, Plus } from 'lucide-react'
import React, { useRef, useState } from 'react'
import Select from 'react-select'
import axiosInstance from '../../config/axios';

const MovieAdd = () => {
  const movieGenres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Sports",
    "Thriller",
    "War",
    "Western"
  ];

  const movieLanguages = [
    "English",
    "Bengali",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Japanese",
    "Korean",
    "Mandarin",
    "Tamil",
    "Telugu",
    "Malayalam",
    "Kannada",
    "Arabic",
    "Russian"
  ];


  const posterRef = useRef();
  const bannerRef = useRef();
  const memberImageRef = useRef(null);

  const [formData, setFormData] = useState({});
  const [castMemberList, setCastMemberList] = useState([{ id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, name: '', image: '', role: '' }])
  const [crewMemberList, setCrewMemberList] = useState([{ id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, name: '', image: '', role: '' }])




  const handleOnchange = (e) => {
    setFormData(prev => (
      { ...prev, [e.target.name]: e.target.value }
    ))
  }

  console.log(formData)

  const handleImageOnchange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    if (file) {
      setFormData({
        ...formData,
        [name]: URL.createObjectURL(file),
        [`${name}-path`]: file
      })
    }
  }

  const imageUpload = (image) => {
    if (image === 'poster') {
      posterRef.current.click();
    }
    if (image === 'banner') {
      bannerRef.current.click();
    }
  }


  const customSelectStyles = {
    container: (base) => ({
      ...base,
      flex: 1,
      maxWidth: '100%',
    }),
    control: (base, state) => ({
      ...base,
      background: '#0a0a0a',
      minHeight: '42px',
      borderColor: state.isFocused ? '#f59e0b' : 'rgba(255, 255, 255, 0.15)',
      boxShadow: 'none',
      '&:hover': {
        borderColor: state.isFocused ? '#f59e0b' : 'rgba(255, 255, 255, 0.25)',
      },
    }),
    menu: (base) => ({
      ...base,
      background: '#0a0a0a',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      zIndex: 50,
    }),
    option: (base, state) => ({
      ...base,
      background: state.isFocused ? 'rgba(255, 255, 255, 0.1)' : 'black',
      color: 'white',
      cursor: 'pointer',
      '&:active': {
        background: 'rgba(255, 255, 255, 0.2)',
      }
    }),
    multiValue: (base) => ({
      ...base,
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '4px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: 'white',
    }),
  };


  const addMember = (member) => {
    if (member === 'cast') {
      setCastMemberList(prev => (
        [...prev, { id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, name: "", image: '', role: '' }]
      ))
    } else {
      setCrewMemberList(prev => (
        [...prev, { id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, name: "", image: '', role: '' }]
      ))
    }

  }


  const handleInputChange = (id, field, value) => {
    console.log(field)

    setCastMemberList(prev =>
      prev.map(cast => cast.id === id ? { ...cast, [field]: value } : cast)
    );

    setCrewMemberList(prev =>
      prev.map(crew => crew.id === id ? { ...crew, [field]: value } : crew)
    );

  }

  const deleteMember = (id, type) => {
    if (castMemberList.length > 1 && type === 'cast') {
      setCastMemberList(castMemberList.filter(cast => cast.id !== id))
    }

    if (crewMemberList.length > 1 && type === 'crew') {
      setCrewMemberList(crewMemberList.filter(crew => crew.id !== id))
    }
  }


  const addMovietoDatabase = async () => {
    const payload = {
      ...formData,
      casts: castMemberList,
      crews: crewMemberList
    }

    console.log(payload)
    try {
      const response = await axiosInstance.post('/movie/add', payload);
      console.log(response.data)
    } catch (error) {
      
    }
  }

  return (
    <div className='w-full h-full p-4 md:p-6'>
      <h1 className='text-2xl font-semibold tracking-tighter mb-8'>Add New Movie</h1>

      <div className='flex flex-col xl:flex-row gap-4 xl:gap-6 text-sm md:base'>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold'>Movie Poster</p>
          <div onClick={() => imageUpload('poster')} className='w-40 h-50 lg:w-60 lg:h-85 border border-dashed border-white/15 hover:border-white cursor-pointer'>
            <input ref={posterRef} type="file" name="poster" id="" onChange={handleImageOnchange} className='hidden' />
            {
              formData.poster ?
                <img className='w-full h-full' src={formData.poster} alt="" />
                :
                <div className='w-full h-full flex flex-col gap-2 justify-center items-center text-gray-400 cursor-pointer'>
                  <Camera size={30} />
                  <p className='font-semibold'>Upload Poster</p>
                </div>
            }
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold'>Movie Banner</p>
          <div onClick={() => imageUpload('banner')} className='h-40 lg:w-[600px] lg:h-60 border border-dashed border-white/15 hover:border-white cursor-pointer'>
            <input ref={bannerRef} type="file" name="banner" id="" onChange={handleImageOnchange} className='hidden' />
            {
              formData.banner ?
                <img className='w-full h-full' src={formData.banner} alt="" />
                :
                <div className='w-full h-full flex flex-col gap-2 justify-center items-center text-gray-400 cursor-pointer'>
                  <Camera size={30} />
                  <p className='font-semibold'>Upload Banner</p>
                </div>
            }
          </div>
        </div>
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-6 text-sm md:base'>
        <div className='flex-1 flex flex-col gap-1'>
          <label htmlFor="title" className='font-medium text-gray-300'>Movie title</label>
          <input
            id='title'
            name="title"
            className="w-full p-2 border border-white/15 rounded focus:ring focus:ring-amber-500 outline-none"
            placeholder="e.g. Inception"
            onChange={handleOnchange}
          />
        </div>
        <div className='flex-1 flex flex-col gap-1'>
          <label htmlFor="trailerUrl" className='font-medium text-gray-300'>Trailer Url</label>
          <input
            id='trailerUrl'
            name="trailerUrl"
            className="w-full p-2 border border-white/15 rounded focus:ring focus:ring-amber-500 outline-none"
            placeholder="e.g. Inception"
            onChange={handleOnchange}
          />
        </div>
      </div>


      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-sm md:base'>
        <div className='flex-1 flex flex-col gap-1'>
          <label htmlFor="release" className='font-medium text-gray-300'>Release Date</label>
          <input
            type='date'
            id='release'
            name="release"
            className="w-full p-2 border border-white/15 rounded focus:ring focus:ring-amber-500 outline-none"
            placeholder="e.g. Inception"
            onChange={handleOnchange}
          />
        </div>
        <div className='flex-1 flex flex-col gap-1'>
          <label htmlFor="duration" className='font-medium text-gray-300'>Duration</label>
          <input
            id='duration'
            name="duration"
            className="w-full p-2 border border-white/15 rounded focus:ring focus:ring-amber-500 outline-none"
            placeholder="e.g. Inception"
            onChange={handleOnchange}
          />
        </div>
        <div className='flex-1 flex flex-col gap-1'>
          <label htmlFor="rating" className='font-medium text-gray-300'>Rating</label>
          <input
            id='rating'
            name="rating"
            className="w-full p-2 border border-white/15 rounded focus:ring focus:ring-amber-500 outline-none"
            placeholder="e.g. Inception"
            onChange={handleOnchange}
          />
        </div>
        <div className='flex-1 flex flex-col gap-1'>
          <label htmlFor="status" className='font-medium text-gray-300'>Status</label>
          <select name="status" id="status" onChange={handleOnchange} className="bg-[#0a0a0a] w-full p-2 border border-white/15 rounded focus:ring focus:ring-amber-500 outline-none">
            <option value="Coming Soon">Coming Soon</option>
            <option value="Now Showing">Now Showing</option>
            <option value="Ended">Ended</option>
          </select>
        </div>
      </div>


      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-sm md:base'>
        <div className='w-full'>
          <label htmlFor="genres" className='font-medium text-gray-300'>Genres</label>
          <div className='min-w-[50%]'>
            <Select
              isMulti
              options={movieGenres.map(genre => ({ value: genre, label: genre }))}
              onChange={(selected) => setFormData(prev => ({ ...prev, genres: selected.map(select => select.value) }))}
              styles={customSelectStyles}
            />
          </div>
        </div>
        <div className='w-full'>
          <label htmlFor="languages" className='font-medium text-gray-300'>Languages</label>
          <div className='min-w-[50%]'>
            <Select
              isMulti
              options={movieLanguages.map(language => ({ value: language, label: language }))}
              onChange={(selected) => setFormData(prev => ({ ...prev, languages: selected.map(select => select.value) }))}
              styles={customSelectStyles}
            />
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col gap-3 mt-6'>
        <label htmlFor="description" className='font-medium text-gray-300 text-sm md:base'>Description</label>
        <textarea
          name="description"
          id="description"
          placeholder='Description...'
          onChange={handleOnchange}
          className='w-full min-h-30 p-2 border border-white/15 rounded focus:ring focus:ring-amber-500 outline-none'
        ></textarea>
      </div>

      <div className='flex flex-col xl:flex-row gap-6 mt-6 text-sm md:base'>
        <div className='flex-1 flex flex-col gap-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3 font-semibold text-gray-300'>
              <Users />
              <p>Cast Members</p>
            </div>
            <button onClick={() => addMember('cast')} className='px-2 py-0.5 rounded cursor-pointer flex items-center gap-1 bg-blue-600'><Plus size={16} /> Add</button>
          </div>

          <div className='flex flex-col gap-2'>
            {
              castMemberList.map(cast => (
                <div key={cast.id} className='w-full flex items-center gap-3 md:gap-4 border border-white/15 p-2 rounded-[6px]'>
                  <div className='w-14 h-14 md:w-20 md:h-20 relative flex items-center justify-center rounded-full overflow-hidden bg-white/5'>
                    <input type="file"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const imageUrl = URL.createObjectURL(file);
                          setCastMemberList(prev =>
                            prev.map(item => item.id === cast.id ? { ...item, image: imageUrl } : item)
                          )
                        }
                      }}
                      className='absolute h-full opacity-0 cursor-pointer'
                    />
                    {
                      cast.image ?
                        <img src={cast.image} alt="" className='w-full h-full object-cover' />
                        :
                        <Camera className='text-gray-400' />
                    }
                  </div>
                  <div className='w-[60%] md:w-[80%] flex flex-wrap items-center gap-4'>
                    <input
                      type="text"
                      placeholder='Name'
                      onChange={(e) => handleInputChange(cast.id, 'name', e.target.value)}
                      className='flex-1 border-b pb-1 border-white/15 outline-0'
                    />
                    <input
                      type="text"
                      placeholder='Role'
                      onChange={(e) => handleInputChange(cast.id, 'role', e.target.value)}
                      className='flex-1 border-b pb-1 border-white/15 outline-0'
                    />
                  </div>
                  <button onClick={() => deleteMember(cast.id, 'cast')} className='cursor-pointer'><Trash size={20} /></button>
                </div>
              ))
            }
          </div>
        </div>

        <div className='flex-1 flex flex-col gap-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3 font-semibold text-gray-300'>
              <Users />
              <p>Crew Members</p>
            </div>
            <button onClick={() => addMember('crew')} className='px-2 py-0.5 rounded cursor-pointer flex items-center gap-1 bg-green-600'><Plus size={16} /> Add</button>
          </div>

          <div className='flex flex-col gap-2'>
            {
              crewMemberList.map(crew => (
                <div key={crew.id} className='flex items-center gap-3 md:gap-4 border border-white/15 p-2 rounded-[6px]'>
                  <div className='w-14 h-14 md:w-20 md:h-20 relative flex items-center justify-center rounded-full overflow-hidden bg-white/5'>
                    <input type="file"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const imageUrl = URL.createObjectURL(file);
                          setCrewMemberList(prev =>
                            prev.map(item => item.id === crew.id ? { ...item, image: imageUrl } : item)
                          )
                        }
                      }}
                      className='absolute h-full opacity-0 cursor-pointer'
                    />
                    {
                      crew.image ?
                        <img src={crew.image} alt="" className='w-full h-full object-cover' />
                        :
                        <Camera className='text-gray-400' />
                    }
                  </div>
                  <div className='w-[60%] md:w-[80%] flex flex-wrap items-center gap-4'>
                    <input
                      type="text"
                      placeholder='Name'
                      onChange={(e) => handleInputChange(crew.id, 'name', e.target.value)}
                      className='flex-1 border-b pb-1 border-white/15 outline-0'
                    />
                    <input
                      type="text"
                      placeholder='Role'
                      onChange={(e) => handleInputChange(crew.id, 'role', e.target.value)}
                      className='flex-1 border-b pb-1 border-white/15 outline-0'
                    />
                  </div>
                  <button onClick={() => deleteMember(crew.id, 'crew')} className='cursor-pointer'><Trash size={20} /></button>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <button onClick={addMovietoDatabase} className='mt-10 mb-30 px-4 py-2 rounded-[6px] bg-amber-500 font-medium cursor-pointer'>Save Movie to Database</button>
    </div>
  )
}

export default MovieAdd