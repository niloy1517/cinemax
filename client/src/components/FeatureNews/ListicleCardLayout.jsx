import React from 'react';

const ListicleCardLayout = ({ data }) => {
  if (!data || !data.list_data) return null;

  return (
    <div className="listicle-layout-container">
      {/* ১. হেডার সেকশন */}
      <div className="listicle-header">
        <span className="category-tag">{data.metadata.category.toUpperCase()}</span>
        <h1 className="listicle-title">{data.headline}</h1>
        <p className="listicle-date">Updated: {data.metadata.date}</p>
      </div>

      {/* ২. মেইন ফিচার ইমেজ (ঐচ্ছিক) */}
      <div className="listicle-main-media">
        <img src={data.media.thumbnail} alt={data.title} className="listicle-hero-img" />
      </div>

      {/* ৩. র‍্যাঙ্কিং লিস্ট */}
      <div className="ranking-list-container">
        {data.list_data.map((item) => (
          <div key={item.rank} className="ranking-item">
            {/* বড় র‍্যাঙ্ক নাম্বার */}
            <div className="rank-number">{item.rank}</div>
            
            <div className="item-details">
              <div className="item-top-row">
                <h3 className="movie-name">{item.movie_name}</h3>
                <span className={`status-badge ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </div>
              
              <div className="item-bottom-row">
                <div className="score-container">
                  <span className="score-label">AUDIENCE SCORE:</span>
                  <span className="score-value">🍿 {item.score}</span>
                </div>
                <button className="get-tickets-btn">GET TICKETS</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListicleCardLayout;
