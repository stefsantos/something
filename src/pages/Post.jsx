import React, { useState } from 'react';
import './HomePage.css';
import './Post.css';
import CommentPopup from './CommentPopup';

function Post({ post }) {
    
    const [isHeartActive, setIsHeartActive] = useState(false);
    const [showComments, setShowComments] = useState(false);
    // Event handler for clicking the heart icon
    const toggleHeart = () => {
        setIsHeartActive(!isHeartActive);
    };

    // Function to open the comment pop-up
    const openComments = () => {
        setShowComments(true);
    };

    // Function to close the comment pop-up
    const closeComments = () => {
        setShowComments(false);
    }
    
    return (
        <div className = "post">
            
            <h4>{post.user}</h4>
            <p>{post.content}</p>
            {post.imageUrl && (
                <img src={post.imageUrl} alt="Post visual" className="post-image" />
            )}
            <div className='postactions'>
            <div className={`heart ${isHeartActive ? 'heart-active' : ''}`} onClick={toggleHeart}></div>
            <div className='comment' onClick={openComments}></div>
                <div className='share'></div>
            </div>
            <small>{post.timestamp}</small>
            <CommentPopup isOpen={showComments} onClose={closeComments} post={post} />    
        </div>

        
    );
}

export default Post;