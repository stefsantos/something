import React from 'react';
import './SharePopup.css';

const SharePopup = ({ isOpen, onClose, post }) => {
  // Function to copy post link to clipboard
  const handleShare = () => {
    // Assuming `post.link` is the URL you want to share
    navigator.clipboard.writeText(post.link)
      .then(() => alert('Post link copied to clipboard!')) // Success feedback
      .catch(err => console.error('Failed to copy link: ', err)); // Error handling
  };

  if (!isOpen) return null;

  return (
    <div className="share-popup-overlay" onClick={onClose}>
      <div className="share-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-popup" onClick={onClose}>×</button>
        <div className="post-content">
          <p>{post.content}</p>
          {post.imageUrl && (
            <img src={post.imageUrl} alt="Post visual" style={{ maxWidth: '100%', marginTop: '10px' }} />
          )}
        </div>
        <button className="share-button" onClick={handleShare}>Copy Link</button>
      </div>
    </div>
  );
};

export default SharePopup;
