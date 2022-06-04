import {useEffect, useState} from 'react';
import {Movie} from '../Movie'

import './index.css'

interface Movie {
    title: string,
    vote_average: number,
    id: string,
    adult: boolean,
    poster_path: string
}

export function MovieContainer() {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=1b273a82cec9cdead9e0f0e3d1b28e8d'

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])

    return (
        <>
            <div className='container movie-container'>
                <ul>
                    {movies.map(movie => {
                        return <Movie key={movie.id} movie={movie} />
                    })}
                </ul>
            </div>
        </>
    );
}