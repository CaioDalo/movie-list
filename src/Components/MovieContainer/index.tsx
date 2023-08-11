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

interface Filter {
    filter: string | null,
    lang: string | null
}

export function MovieContainer() {
    
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        const movieFilters = document.querySelectorAll('.movie-filter')

        movieFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                const languageElement = document.querySelector('input[name="language"]:checked') as HTMLInputElement
                const languageValue = languageElement.value

                const filterValue: Filter = {
                    filter: filter.getAttribute('value'),
                    lang: languageValue
                }

                requestMovie(filterValue)
            })
        })
    }, [])

    useEffect(() => {
        const languages = document.querySelectorAll('.language')

        languages.forEach(language => {
            language.addEventListener('click', () => {
                const filterElement = document.querySelector('input[name="movie-filter"]:checked') as HTMLInputElement
                const filterValue = filterElement.value

                const languageValue: Filter = {
                    filter: filterValue,
                    lang: language.getAttribute('value')
                }

                requestMovie(languageValue)
            })
        })
    }, [])

    useEffect(() => {
        const filterInitialValue: Filter = {
            filter: 'top_rated',
            lang: 'en-US'
        } 
        requestMovie(filterInitialValue)
    }, [])

    const requestMovie = ({filter, lang}: Filter) => {
        try {
            const url = `https://api.themoviedb.org/3/movie/${filter}?api_key=1b273a82cec9cdead9e0f0e3d1b28e8d&language=${lang}` 
            fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data.results))
        } catch (error) {
            console.error(error)
        }
        
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