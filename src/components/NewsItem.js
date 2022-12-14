import React from 'react';

export default function NewsItems({news}) {
    return (
        <li className='news-item'>
            <div className='news-item-icon'>
                <img src={news.icon}/>
            </div>
            <div>{news.title}</div>
        </li>
    )

}