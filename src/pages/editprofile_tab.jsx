import React from "react";
import "./editprofile_Tab.css";


const EditProfileTab = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h2>Edit Profile</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-content">
          <input className="modal-input" type="text" placeholder="Change Profile Name" />
          <textarea className="modal-input" placeholder="Change Bio"></textarea>
        </div>
        <div className="modal-footer">
          <button className="button cancel-button" onClick={onClose}>Cancel</button>
          <button className="button create-button" type="submit">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileTab;
