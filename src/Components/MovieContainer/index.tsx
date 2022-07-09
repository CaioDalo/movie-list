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

interface Request {
    filter: string | null, 
}

export function MovieContainer() {
    
    const [movies, setMovies] = useState<Movie[]>([])
    
    useEffect(() => {
        const movieFilters = document.querySelectorAll('.movie-filter')
        movieFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                const filterValue: Request = {
                    filter: filter.getAttribute('data-value')
                }

                requestMovie(filterValue)
            })
        })

        const filterValue: Request = {
            filter: 'top_rated'
        } 
        requestMovie(filterValue)
    }, [])

    const requestMovie = ({filter}: Request) => {
        const url = `https://api.themoviedb.org/3/movie/${filter}?api_key=1b273a82cec9cdead9e0f0e3d1b28e8d` 

        fetch(url)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }

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
