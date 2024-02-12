import React, { useState } from 'react';
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
    { id: 6, name: 'Mutahar Anas', avatar: 'images/muta.png', profileLink: '/profile/Mutahar Anas' },
];

// Mock data for friend requests
const friendRequestsData = [
    { id: 1, name: 'Mutahar Anas', avatar: 'images/muta.png', mutualContacts: 1 },
    { id: 2, name: 'zookee76', avatar: 'https://avatars.githubusercontent.com/u/135536455?v=4', mutualContacts: 0 },
    { id: 3, name: 'Sn3s', avatar: 'https://avatars.githubusercontent.com/u/84768613?v=4', mutualContacts: 0 },
    { id: 4, name: 'KAFuccino', avatar: 'https://avatars.githubusercontent.com/u/139977647?v=4', mutualContacts: 0 },
  ];


function friends_page() {
  const { activeusername } = useUser();
  const [friendRequests, setFriendRequests] = useState(friendRequestsData);

  const handleAccept = (id) => {
    setFriendRequests((prevRequests) => prevRequests.filter((request) => request.id !== id));
  };

  const handleDecline = (id) => {
    setFriendRequests((prevRequests) => prevRequests.filter((request) => request.id !== id));
  };

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
                        // check if the friend username is different from the current activeusernafme
                        // if current user is Charles White, render Mutahar Anas (id: 6)
                        (friend.name !== activeusername && friend.id <= 5 || (activeusername === 'Charles White' && friend.id == 6)) && (
                            <div key={friend.id} className="friend_profile">
                                <img src={friend.avatar} alt="avatar" className="friend_avatar" />
                                <div className="friend_name" data-fullname={friend.name} title={friend.name}>
                                    {friend.name}
                                </div>
                                <Link to={friend.profileLink} className="visit_button">Visit</Link>
                            </div>
                        )
                    ))}
                </div>
            </div>
      <div className="request_container">
        <div className="request_header">Friend Requests</div>
        <div className="friendrequest_container">
          {friendRequests.map((request) => (
            (activeusername !== 'Charles White' || activeusername === 'Charles White' && request.name !== 'Mutahar Anas') && (
              <div key={request.id} className="friend_request">
                <img src={request.avatar} alt="avatar" className="request_avatar" />
                <div className="request_text">
                  <div className="request_name">{request.name}</div>
                  <div className="mutual_box">
                    {Array.from({ length: request.mutualContacts }).map((_, index) => (
                      <img key={index} src="images/moist.png" alt="avatar" className="mutual_avatar" />
                    ))}
                    <div className="mutual_text">{request.mutualContacts} Mutual Contacts</div>
                  </div>
                </div>
                <button
                  className="decline_button"
                  onClick={() => {
                    handleDecline(request.id);
                  }}
                >
                  Decline
                </button>
                <button
                  className="accept_button"
                  onClick={() => {
                    handleAccept(request.id);
                  }}
                >
                  Accept
                </button>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default friends_page;
