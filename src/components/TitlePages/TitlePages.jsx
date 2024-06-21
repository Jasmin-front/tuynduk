import React from 'react';
import './TitlePages.css'

const TitlePages = ({bigTitle,title_pages_text }) => {
    return (
        <div className='title_pages_conatiner'>
            <h2 className='mainTitle'>{bigTitle}</h2>
            <h4 className='title_pages_text'>{title_pages_text}</h4>
        </div>
    );
};

export default TitlePages;