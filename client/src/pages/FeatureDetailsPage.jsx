import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FeatureNews } from '../assets/assets';
import HeroVideoLayout from '../components/FeatureNews/HeroVideoLayout';
import StandardArticleLayout from '../components/FeatureNews/StandardArticleLayout';
import ListicleCardLayout from '../components/FeatureNews/ListicleCardLayout';
import NewAndComingSoonMovies from './NewAndComingSoonMovies';

const FeatureDetailsPage = () => {
    const { id } = useParams();
    const [data, setData] = useState('')

    useEffect(() => {
        const news = FeatureNews.find(news => news.id === id);
        setData(news)
    }, [])

    const renderLayout = () => {
        switch (data.layout_type) {
            case "hero_video":
                return <HeroVideoLayout data={data} />
            case "standard_article":
                return <StandardArticleLayout data={data} />
            case "listicle_card":
                return <ListicleCardLayout data={data} />
            default:
                return <div>Data Loading...</div>;
        }
    }

    return (
        <div className='bg-[#121212] text-white'>
            <div className='flex p-10 mb-10'>
                <div className='w-[70%]'>
                    {renderLayout()}
                </div>
                <div className='w-[30%]'>
                    <p>Add slot</p>
                </div>
            </div>
            <NewAndComingSoonMovies />
        </div>
    )

}

export default FeatureDetailsPage