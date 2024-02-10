import React from 'react';
import './myprofile_page.css';

function myprofile_page() {
    return (
        <div className="page">
            <div className="profile_container">
                <img src="images/Screenshot_15.png" class="profile_banner" alt="banner"/>
                <img src="images/Screenshot_16.png" class="profile_avatar avatar" alt="avatar"/>
                <div className="profile_name">
                    Yco Santos
                </div>
                <div className="profile_bio">
                    I am CCS ID 122 thats dating a 17 year old minor
                </div>

                <button className="button edit_profile">
                    Edit Profile
                </button>

                <button className="button more_profile">
                    ...
                </button>
            </div>
            
        </div>
    );
}

export default myprofile_page;
