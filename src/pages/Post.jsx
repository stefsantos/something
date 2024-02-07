import React from 'react';
import './HomePage.css';
import './Post.css';

function Post({ post }) {
    return (
        <div className = "post">
            
            <h4>{post.user}</h4>
            <p>{post.content}</p>
            {post.imageUrl && (
                <img src={post.imageUrl} alt="Post visual" className="post-image" />
            )}
            <div className='postactions'>
                <div className='heart'></div>
                <div className='comment'></div>
                <div className='share'></div>
            </div>
            <small>{post.timestamp}</small>
        </div>
    );
}

export default Post;