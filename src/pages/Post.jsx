import React, { useState } from 'react';
import './HomePage.css';
import './Post.css';

function Post({ post }) {
    
    const [isHeartActive, setIsHeartActive] = useState(false);

    // Event handler for clicking the heart icon
    const toggleHeart = () => {
        setIsHeartActive(!isHeartActive);
    };
    
    return (
        <div className = "post">
            
            <h4>{post.user}</h4>
            <p>{post.content}</p>
            {post.imageUrl && (
                <img src={post.imageUrl} alt="Post visual" className="post-image" />
            )}
            <div className='postactions'>
            <div className={`heart ${isHeartActive ? 'heart-active' : ''}`} onClick={toggleHeart}></div>
                <div className='comment'></div>
                <div className='share'></div>
            </div>
            <small>{post.timestamp}</small>
        </div>

        
    );
}

export default Post;