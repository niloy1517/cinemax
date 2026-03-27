import React from 'react';

const StandardArticleLayout = ({ data }) => {
  if (!data) return null;

  return (
    <article className="standard-article-container">
      {/* ১. ক্যাটাগরি ব্যাজ (লাল রঙে ফ্যানডাঙ্গো স্টাইল) */}
      <div className="category-badge">
        {data.metadata.category.toUpperCase()}
      </div>

      {/* ২. বড় হেডলাইন */}
      <h1 className="article-headline">{data.headline}</h1>

      {/* ৩. মেটাডেটা (Author & Date) */}
      <div className="article-metadata">
        <span className="by-text">By</span>
        <span className="author-name">{data.metadata.author}</span>
        <span className="separator">|</span>
        <span className="publish-date">{data.metadata.date}</span>
      </div>

      {/* ৪. মেইন ফিচার ইমেজ */}
      <div className="main-image-wrapper">
        <img 
          src={data.media.thumbnail} 
          alt={data.media.image_alt || data.title} 
          className="featured-image"
        />
        {data.media.image_alt && (
          <p className="image-caption">{data.media.image_alt}</p>
        )}
      </div>

      {/* ৫. আর্টিকেলের মূল বর্ণনা */}
      <div className="article-body">
        <p className="intro-text">{data.description}</p>
        {/* এখানে আপনি চাইলে আরও লম্বা টেক্সট বা ডামি প্যারাগ্রাফ যোগ করতে পারেন */}
        <p>
          As the film industry prepares for a major shift in romantic comedies, 
          this latest project stands out for its unique blend of cultural 
          authenticity and universal appeal...
        </p>
      </div>
    </article>
  );
};

export default StandardArticleLayout;
