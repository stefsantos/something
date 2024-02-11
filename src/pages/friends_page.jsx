import React from 'react';
import './friends_page.css';
import { FaSearch } from 'react-icons/fa';

function friends_page() {
    return (
       <div className="page_container">
            <div className="friends_container">
                <div className="friends_header">
                    Friends
                    <div class="textbox">
                        <FaSearch style={{ marginLeft: '10px', marginRight: '10px', height: '36px' }}/>
                        <input type="text" placeholder="Search..."></input>
                    </div>
                </div>

                <div className="friendprofiles_container">
                    
                    <div className="friend_profile">
                        hi
                    </div>

                    <div className="friend_profile">
                        hiiii
                    </div>

                    <div className="friend_profile">
                        hiiii
                    </div>

                    <div className="friend_profile">
                        hiiii
                    </div>

                    <div className="friend_profile">
                        hiiii
                    </div>
                </div>
            </div>

            <div className="request_container">
                <div className="request_header">
                    Friend Requests
                </div>

                <div className="friendrequest_container">
                    <div className="friend_request">hi</div>
                    <div className="friend_request">hi</div>
                    <div className="friend_request">hi</div>
                    <div className="friend_request">hi</div>
                    <div className="friend_request">hi</div>
                </div>
            </div>
       </div>
    );
}

export default friends_page;
