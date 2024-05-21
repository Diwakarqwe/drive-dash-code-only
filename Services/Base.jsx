import React from 'react';
function Base({url,name,content,button}){
return(
        
        <div className='Service__two'>
            <img src={url} alt='imageService' className='img-responsive'/>
            <h3>{name}</h3>
            <p>{content}</p>
            <a href='/' >{button}</a>
        </div>             
    
);
}
export default Base;