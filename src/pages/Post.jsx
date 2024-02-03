import React from 'react';
import './HomePage.css';

function Post({ post }) {
    return (
        <div className = "post">
            
            <h4>{post.user}</h4>
            <p>{post.content}</p>
            {post.imageUrl && (
                <img src={post.imageUrl} alt="Post visual" className="post-image" />
            )}
            <br></br>
            <small>{post.timestamp}</small>
        </div>
    );
}

export default Post;