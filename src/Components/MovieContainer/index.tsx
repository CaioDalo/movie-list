import { useEffect } from 'react';
import { Movie } from '../Movie'
import { useFilters } from '../../Hooks/handleFilters'
import { Paginator } from '../Paginator';
import translations from '../../translations/translate.json'

import './index.css'

export function MovieContainer() {

  const {setNewFilter, movies, lang} = useFilters()

  useEffect(() => {
    const movieFilters = document.querySelectorAll('.movie-filter')

    movieFilters.forEach(filter => {
      filter.addEventListener('click', () => {
        const filterElement = document.querySelector('input[name="movie-filter"]:checked') as HTMLInputElement
        const filterValue = filterElement.value
        setNewFilter(filterValue)
      })
    })
  }, [setNewFilter])

  return (
    <div className='container movie-container'>
      {
      movies?.results?.length ?
        <ul>
          {movies.results.map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </ul>
      : <p className='empty-return'>{translations[lang as keyof typeof translations].empty_return}</p>
      }

      <Paginator totalPages={movies?.total_pages} />
    </div>
  );
}
