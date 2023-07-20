import React, { useState } from 'react';
import jam from '../imagin/jam-bablegum.jpg';
import close from '../imagin/close.png';
import '../CSSComponents/news.css';



const News = () => {
    
    const [Posts, SetPosts] = useState([
    {im: jam, text: "very goood!"}, 
    {im: close, text: "тяжкий груз"}
    ])
    return(
        <div>
            {Posts.map(
                e => 
                    <div className='post'>
                    <div className='text'>{e.text}</div>
                    <img alt='POST-IMG' src={e.im}/>
                    </div>
                
            )}
        </div>
    );
};

export default News 