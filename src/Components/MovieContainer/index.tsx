import { useEffect } from 'react';
import { Movie } from '../Movie'
import { useFilters } from '../../Hooks/handleFilters'

import './index.css'

export function MovieContainer() {

  const {setNewFilter, setNewLang, movies} = useFilters()

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

  useEffect(() => {
    const languages = document.querySelectorAll('.language')

    languages.forEach(language => {
      language.addEventListener('click', () => {
        const languageElement = document.querySelector('input[name="language"]:checked') as HTMLInputElement
        const languageValue = languageElement.value
        setNewLang(languageValue)
      })
    })
  }, [setNewLang])

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
