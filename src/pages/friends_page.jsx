import React from 'react';
import './friends_page.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUser } from '../../src/UserContext';

// Mock data for friends
const friendsData = [
    { id: 1, name: 'Yco Santos', avatar: 'images/yco.png', profileLink: '/profile/Yco Santos' },
    { id: 2, name: 'Austin Gan', avatar: 'images/austin.jpg', profileLink: '/profile/Austin Gan' },
    { id: 3, name: 'Philipp Matthew Suarez', avatar: 'images/philipp.jpg', profileLink: '/profile/Philipp Matthew Suarez' },
    { id: 4, name: 'Javi del Rosario', avatar: 'images/javi.jpg', profileLink: '/profile/Javi del Rosario' },
    { id: 5, name: 'Charles White', avatar: 'images/moist.png', profileLink: '/profile/Charles White' },
];

function friends_page() {
    const { activeusername } = useUser();
    console.log('Username:', activeusername);

    return (
        <div className="page_container">
            <div className="friends_container">
                <div className="friends_header">
                    Friends
                    <div className="textbox">
                        <FaSearch style={{ marginLeft: '10px', marginRight: '10px', height: '36px' }} />
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>

                <div className="friendprofiles_container">
                    {friendsData.map((friend) => (
                        // Check if the friend's username is different from the current user's username
                        // If it's the same, don't render the friend profile
                        friend.name !== activeusername && (
                            <div key={friend.id} className="friend_profile">
                                <img src={friend.avatar} alt="avatar" className="friend_avatar" />
                                <div className="friend_name">
                                    {friend.name}
                                </div>
                                <Link to={friend.profileLink} className="visit_button">Visit</Link>
                            </div>
                        )
                    ))}
                </div>
            </div>
            <div className="request_container">
                <div className="request_header">
                    Friend Requests
                </div>

                <div className="friendrequest_container">
                    
                    <div className="friend_request">
                        <img src="images/Screenshot_16.png" alt="avatar" className="request_avatar" />
                        <div className="request_text">
                            <div className="request_name">
                                Yco Santos
                            </div>
                            <div className="mutual_box">
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <div className="mutual_text">
                                    3 Mutual Contacts
                                </div>
                            </div>
                        </div>
                        <button className="decline_button">Decline</button>
                        <button className="accept_button">Accept</button>
                    </div>

                    <div className="friend_request">
                        <img src="images/Screenshot_16.png" alt="avatar" className="request_avatar" />
                        <div className="request_text">
                            <div className="request_name">
                                Yco Santos
                            </div>
                            <div className="mutual_box">
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <div className="mutual_text">
                                    3 Mutual Contacts
                                </div>
                            </div>
                        </div>
                        <button className="decline_button">Decline</button>
                        <button className="accept_button">Accept</button>
                    </div>

                    <div className="friend_request">
                        <img src="images/Screenshot_16.png" alt="avatar" className="request_avatar" />
                        <div className="request_text">
                            <div className="request_name">
                                Yco Santos
                            </div>
                            <div className="mutual_box">
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <div className="mutual_text">
                                    3 Mutual Contacts
                                </div>
                            </div>
                        </div>
                        <button className="decline_button">Decline</button>
                        <button className="accept_button">Accept</button>
                    </div>

                    <div className="friend_request">
                        <img src="images/Screenshot_16.png" alt="avatar" className="request_avatar" />
                        <div className="request_text">
                            <div className="request_name">
                                Yco Santos
                            </div>
                            <div className="mutual_box">
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <div className="mutual_text">
                                    3 Mutual Contacts
                                </div>
                            </div>
                        </div>
                        <button className="decline_button">Decline</button>
                        <button className="accept_button">Accept</button>
                    </div>

                    <div className="friend_request">
                        <img src="images/Screenshot_16.png" alt="avatar" className="request_avatar" />
                        <div className="request_text">
                            <div className="request_name">
                                Yco Santos
                            </div>
                            <div className="mutual_box">
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" className="mutual_avatar" />
                                <div className="mutual_text">
                                    3 Mutual Contacts
                                </div>
                            </div>
                        </div>
                        <button className="decline_button">Decline</button>
                        <button className="accept_button">Accept</button>
                    </div>
                    {/* Repeat or map through actual friend requests here */}
                </div>
            </div>
        </div>
    );
}

export default friends_page;
