import React, { useState } from 'react';
import './news-page.css';
import newsData from '/data/news.json'

const NewPage = () => {
    const [selectedNews, setSelectedNews] = useState(null);

    const openModal = (news) => {
        setSelectedNews(news);
    };

    const closeModal = () => {
        setSelectedNews(null);
    };

    return (
        <div className='newsPage'>
            <div className='news-heading'>
                <hr className="news-line" />
                <div className='news-title'>
                    AIMS News
                </div>
                <hr className="news-line" />
            </div>
            <div className='news-cont'>
                {newsData.map((news, index) => {
                    return (
                        <div className='news-indv'>
                            <div className='news-title'>{news.title}</div>
                            <div className='news-cont-indv'>
                                <div className='news-img'>
                                    <img src={news.img} alt={`${news.img}`} className='news-pic' />
                                </div>
                                <div className='newsWords'>
                                    <div className='news-date'><strong>Date:</strong> {news.date}</div>
                                    { news.link && (
                                        <div className='news-link'>
                                            <strong>Link:</strong> <a href={news.link} target="_blank" rel="noopener noreferrer">Link</a>
                                        </div>
                                    )}
                                    <div className='news-about'><strong>Description: </strong>{news.subheading}</div>
                                    <button className='read-more'  onClick={() => openModal(news)}>Read More</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>

                {selectedNews && (
                <div className="news-modal-overlay" onClick={closeModal}>
                    <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-button" onClick={closeModal}>✖</button>
                    <div className="news-modal-header">
                        <div className='news-modal-title'>{selectedNews.title}</div>
                        <img src={selectedNews.img} alt={`${selectedNews.title}`} className="news-modal-image" />
                    </div>
                    <div className='news-date'><strong>Date:</strong> {selectedNews.date}</div>
                    {selectedNews.link && (
                        <div className='news-link'>
                            <strong>Link:</strong> <a href={selectedNews.link} target="_blank" rel="noopener noreferrer">Link</a>
                        </div>
                    )}
                    <div className="news-modal-body">
                        <div className='about-section'>{selectedNews.content}</div>
                    </div>
                    </div>
                </div>
                )}
        </div>
    );
};

export default NewPage;