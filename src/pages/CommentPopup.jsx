
import React from 'react';
import './CommentPopup.css'; // Create this CSS file to style the pop-up

const CommentPopup = ({ isOpen, onClose, post }) => {
  if (!isOpen) return null;

  return (
    <div className="comment-popup-overlay" onClick={onClose}>
      <div className="comment-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-popup" onClick={onClose}>×</button>
        {/* Display the post content or any other details here */}
        <div className="post-content">
          <p>{post.content}</p>
          {/* Include the image if there is one */}
          {post.imageUrl && (
            <img src={post.imageUrl} alt="Post visual" />
          )}
        </div>
        {/* Placeholder for comment submission, you can add a form here */}
        <div className="submit-comment">
          <input type="text" placeholder="Write a comment..." />
          <button type="button">Submit</button>
        </div>
        {/* Placeholder for existing comments, you'd populate this from state or props */}
        <div className="comments-list">
          <p>No comments yet.</p>
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;
