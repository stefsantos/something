import React from "react";
import "./PostTab.css";


const PostTab = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h2>Create a New Post</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-content">
          <input className="modal-input" type="text" placeholder="Movie Watched" />
          <textarea className="modal-input" placeholder="What about it?"></textarea>
        </div>
        <div className="modal-footer">
          <button className="button cancel-button" onClick={onClose}>Cancel</button>
          <button className="button create-button" type="submit">Create</button>
        </div>
      </div>
    </div>
  );
};

export default PostTab;
