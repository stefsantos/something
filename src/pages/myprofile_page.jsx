import React, { useState } from 'react';
import './myprofile_page.css';
import { Link } from 'react-router-dom';
import EditProfileTab from '../../src/pages/editprofile_tab';
import Post from './Post';
import { useUser } from '../../src/UserContext';

function myprofile_page() {

    const [trendingMovies, setTrendingMovies] = React.useState([]);
    const { username } = useUser();
    console.log('Username:', username);
    
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

    const [posts, setPosts] = React.useState([
        { id: 1, user: 'Yco Santos', movie: '(500) Days of Summer', movieId: '19913', content: 'I love 500 days of summer it makes me sad LOL.', timestamp: '2024-22-02' },
        { id: 2, user: 'Yco Santos', movie: 'Her', movieId: '152601', content: 'Its so over :((', timestamp: '2024-16-02' },
        { id: 3, user: 'Yco Santos', movie: 'The Boy and the Heron', movieId: '508883', content: 'IM TWEAKING RAAHHHHH', timestamp: '2024-11-02' },
        { id: 4, user: 'Yco Santos', movie: 'Minecraft: The Story of Mojang', movieId: '151870', content: 'MINEcraft is my favorite game! <3 :D', timestamp: '2024-09-02' },
        { id: 5, user: 'Yco Santos', movie: 'About Time', movieId: '122906', content: 'WE ARE SO UP GRAH!', imageUrl: 'https://i.redd.it/t5dmyn6ll49a1.jpg', timestamp: '2024-01-02' },
    ]);

    return (
        <div className="page">
            <div className="content_container">
            <div className="profile_container">

                    {username === 'Yco Santos' && (
                        <img src="images/yco.png" className="profile_banner" alt="Yco Santos" />
                    )}
                    {username === 'Austin Gan' && (
                        <img src="images/austin.jpg" className="profile_banner" alt="Austin Gan" />
                    )}
                    {username === 'Philipp Matthew Suarez' && (
                        <img src="images/philipp.jpg" className="profile_banner" alt="Philipp Matthew Suarez" />
                    )}
                    {username === 'Javi del Rosario' && (
                        <img src="images/javi.jpg" className="profile_banner" alt="Javi del Rosario" />
                    )}
                    {username === 'Charles White' && (
                        <img src="images/moist.png" className="profile_banner" alt="Charles White" />
                    )}

                    {username === 'Yco Santos' && (
                        <img src="images/yco.png" className="profile_avatar avatar" alt="Yco Santos" />
                    )}
                    {username === 'Austin Gan' && (
                        <img src="images/austin.jpg" className="profile_avatar avatar" alt="Austin Gan" />
                    )}
                    {username === 'Philipp Matthew Suarez' && (
                        <img src="images/philipp.jpg" className="profile_avatar avatar" alt="Philipp Matthew Suarez" />
                    )}
                    {username === 'Javi del Rosario' && (
                        <img src="images/javi.jpg" className="profile_avatar avatar" alt="Javi del Rosario" />
                    )}
                    {username === 'Charles White' && (
                        <img src="images/moist.png" className="profile_avatar avatar" alt="Charles White" />
                    )}

                    <div className="profile_name">
                        {username}
                    </div>

                    <div className="profile_bio">
                        I am CCS ID 122 
                    </div>

                    <button className="button edit_profile" onClick={handleEditProfileClick}>
                        Edit Profile
                    </button>

                    
                </div>
                
                <div className="post_container">
                    {posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
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
