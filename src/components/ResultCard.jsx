import React from 'react';

import './ResultCard.css';

export default function ResultCard(props) {
    return (
        <div className="blog-post-card31-blog-post-card">
            <img
                alt={props.image_alt}
                src={props.image_src}
                className="blog-post-card31-image"
            />
            <div className="blog-post-card31-container">
                <span className="blog-post-card31-text">{props.label}</span>
                <h1 className="blog-post-card31-text1">{props.title}</h1>
                <div className="blog-post-card31-container1">
                    <span className="blog-post-card31-text2">{props.description}</span>
                    <span className='blog-post-card31-text2'>{props.company_name}</span>
                    <span className="blog-post-card31-text3">Read More</span>
                </div>
                <span className="blog-post-card31-text4">{props.author}</span>
            </div>
        </div>
    );
}



