import React from 'react';
import './friends_page.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
                        <img src="images/Screenshot_16.png" alt="avatar" class="friend_avatar " />
                        <div className="friend_name">
                            Yco Santos
                        </div>
                        <Link to="/profile2_page" className="visit_button">Visit</Link>
                    </div>

                    <div className="friend_profile">
                        <img src="images/Screenshot_16.png" alt="avatar" class="friend_avatar " />
                        <div className="friend_name">
                            Yco Santos
                        </div>
                        <button class="visit_button">Visit</button>
                    </div>

                    <div className="friend_profile">
                        <img src="images/Screenshot_16.png" alt="avatar" class="friend_avatar " />
                        <div className="friend_name">
                            Yco Santos
                        </div>
                        <button class="visit_button">Visit</button>
                    </div>

                    <div className="friend_profile">
                        <img src="images/Screenshot_16.png" alt="avatar" class="friend_avatar " />
                        <div className="friend_name">
                            Yco Santos
                        </div>
                        <button class="visit_button">Visit</button>
                    </div>

                    <div className="friend_profile">
                        <img src="images/Screenshot_16.png" alt="avatar" class="friend_avatar " />
                        <div className="friend_name">
                            Yco Santos
                        </div>
                        <button class="visit_button">Visit</button>
                    </div>
                    
                </div>
            </div>

            <div className="request_container">
                <div className="request_header">
                    Friend Requests
                </div>

                <div className="friendrequest_container">
                    <div className="friend_request">
                        <img src="images/Screenshot_16.png" alt="avatar" class="request_avatar " />
                        
                        <div className="request_text">
                            <div className="request_name">
                                    Yco Santos
                            </div>
                            
                            <div className="mutual_box">
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <div className="mutual_text">
                                    3 Mutual Contacts
                                </div>
                            </div> 
                        </div>

                        <button class="decline_button">Decline</button>
                        <button class="accept_button">Accept</button>
                    </div>

                    <div className="friend_request">
                        <img src="images/Screenshot_16.png" alt="avatar" class="request_avatar " />
                        
                        <div className="request_text">
                            <div className="request_name">
                                    Yco Santos
                            </div>
                            
                            <div className="mutual_box">
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <div className="mutual_text">
                                    3 Mutual Contacts
                                </div>
                            </div> 
                        </div>

                        <button class="decline_button">Decline</button>
                        <button class="accept_button">Accept</button>
                    </div>
                    
                    <div className="friend_request">
                        <img src="images/Screenshot_16.png" alt="avatar" class="request_avatar " />
                        
                        <div className="request_text">
                            <div className="request_name">
                                    Yco Santos
                            </div>
                            
                            <div className="mutual_box">
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <div className="mutual_text">
                                    3 Mutual Contacts
                                </div>
                            </div> 
                        </div>

                        <button class="decline_button">Decline</button>
                        <button class="accept_button">Accept</button>
                    </div>
                    
                    <div className="friend_request">
                        <img src="images/Screenshot_16.png" alt="avatar" class="request_avatar " />
                        
                        <div className="request_text">
                            <div className="request_name">
                                    Yco Santos
                            </div>
                            
                            <div className="mutual_box">
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <div className="mutual_text">
                                    3 Mutual Contacts
                                </div>
                            </div> 
                        </div>

                        <button class="decline_button">Decline</button>
                        <button class="accept_button">Accept</button>
                    </div>

                    <div className="friend_request">
                        <img src="images/Screenshot_16.png" alt="avatar" class="request_avatar " />
                        
                        <div className="request_text">
                            <div className="request_name">
                                    Yco Santos
                            </div>
                            
                            <div className="mutual_box">
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <img src="images/Screenshot_16.png" alt="avatar" class="mutual_avatar" />
                                <div className="mutual_text">
                                    3 Mutual Contacts
                                </div>
                            </div> 
                        </div>

                        <button class="decline_button">Decline</button>
                        <button class="accept_button">Accept</button>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default friends_page;
