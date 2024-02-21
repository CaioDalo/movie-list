import { Movie } from '../Movie'
import { useFilters } from '../../Hooks/handleFilters'
import { Paginator } from '../Paginator';
import translations from '../../translations/translate.json'

import './index.css'

export function MovieContainer() {

  const {movies, lang} = useFilters()

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
