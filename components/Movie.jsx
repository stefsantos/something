import React, { useEffect, useState } from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie() {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentCategory, setCurrentCategory] = useState('popular');
    const [url, setUrl] = useState('https://api.themoviedb.org/3/movie/popular?api_key=3c4682174e03411b1f2ea9d887d0b8f3');

    const categoryUrls = {
        nowPlaying: 'https://api.themoviedb.org/3/movie/now_playing?api_key=3c4682174e03411b1f2ea9d887d0b8f3',
        popular: 'https://api.themoviedb.org/3/movie/popular?api_key=3c4682174e03411b1f2ea9d887d0b8f3',
        toprated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=3c4682174e03411b1f2ea9d887d0b8f3',
        upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=3c4682174e03411b1f2ea9d887d0b8f3'
    };

    const getMovie = () => {
        let currentUrl = searchTerm
            ? `https://api.themoviedb.org/3/search/movie?api_key=3c4682174e03411b1f2ea9d887d0b8f3&query=${encodeURIComponent(searchTerm)}`
            : url;

        fetch(`${currentUrl}&page=${page}`)
        .then(response => response.json())
        .then(data => {
            setMovieList(searchTerm ? data.results : [...movieList, ...data.results]);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    }

    useEffect(() => {
        getMovie();
    }, [url, page, searchTerm]);

    const loadMoreMovies = () => {
        if (!searchTerm) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const changeCategory = (newCategory) => {
        if (currentCategory !== newCategory) {
            setUrl(categoryUrls[newCategory]);
            setPage(1);
            setMovieList([]);
            setCurrentCategory(newCategory);
            setSearchTerm('');
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setPage(1);
        setMovieList([]);
    };

    return (
        
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', minWidth: '100%', textAlign: 'center' }}>
            <h1>Find a Movie</h1>
            <input
                type="text"
                placeholder="Search for a movie..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ width: '300px', padding: '10px', marginBottom: '20px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <button onClick={() => changeCategory('nowPlaying')} style={{ padding: '10px 20px', marginRight: '10px' }}>
                    Now Playing
                </button>
                <button onClick={() => changeCategory('popular')} style={{ padding: '10px 20px', marginRight: '10px' }}>
                    Popular
                </button>
                <button onClick={() => changeCategory('toprated')} style={{ padding: '10px 20px', marginRight: '10px' }}>
                    Top Rated
                </button>
                <button onClick={() => changeCategory('upcoming')} style={{ padding: '10px 20px' }}>
                    Upcoming
                </button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                {movieList.map(movie => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                    <img
                        key={movie.id}
                        className="movie-poster"
                        style={{ width: '200px', height: '250px', margin: '10px' }}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    </Link>
                ))}
            </div>
            {movieList.length > 0 && !searchTerm && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button onClick={loadMoreMovies} style={{ padding: '10px 20px' }}>
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}

export default Movie;
