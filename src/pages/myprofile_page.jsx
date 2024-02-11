import React, { useState } from 'react';
import './myprofile_page.css';
import { Link } from 'react-router-dom';
import EditProfileTab from '../../src/pages/editprofile_tab';

function myprofile_page() {

    const [trendingMovies, setTrendingMovies] = React.useState([]);

    React.useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3c4682174e03411b1f2ea9d887d0b8f3`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setTrendingMovies(data.results);
            } catch (error) {
                console.error("Error fetching trending movies:", error);
            }
        };
        
        fetchTrendingMovies();
    }, []);

    const [isEditProfileTabVisible, setIsEditProfileTabVisible] = useState(false);

    const toggleEditProfileTab = () => {
        setIsEditProfileTabVisible(!isEditProfileTabVisible);
    };

    const handleEditProfileClick = (event) => {
        event.preventDefault();
        toggleEditProfileTab();
    };

    return (
        <div className="page">
            <div className="content_container">
                <div className="profile_container">
                    <img src="images/Screenshot_15.png" class="profile_banner" alt="banner"/>
                    <img src="images/Screenshot_16.png" class="profile_avatar avatar" alt="avatar"/>
                    <div className="profile_name">
                        Yco Santos
                    </div>
                    <div className="profile_bio">
                        I am CCS ID 122 
                    </div>

                    <button className="button edit_profile" onClick={handleEditProfileClick}>
                        Edit Profile
                    </button>

                    <button className="button more_profile">
                        ...
                    </button>
                </div>
                
                <div className="post_container">
                    hi
                </div>

                <div className="favorites_container">
                    <div className="favorites_header">
                        Top 6 Favorites
                    </div>

                    <div className="favorites_content">
                        {trendingMovies.slice(0,6).map(movie => (
                            <Link to={`/movie/${movie.id}`} key={movie.id}>
                            <img
                                key={movie.id}
                                className="movie-poster"
                                style={{ width: '111px', height: '150px', margin: '10px', boxShadow: '0px 0px 5px rgba(255, 255, 255, 0.5)'  }}
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {isEditProfileTabVisible && <EditProfileTab isVisible={isEditProfileTabVisible} onClose={toggleEditProfileTab} />}
        </div>
        
    );
}

export default myprofile_page;
