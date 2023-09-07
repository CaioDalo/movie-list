import MovieType from '../../Types/movie'
import './index.css'

interface MovieItemProps {
  movie: MovieType,
}

export function Movie(props: MovieItemProps) {

  const {poster_path, title, vote_average, adult} = props.movie

  const movieImg = `https://image.tmdb.org/t/p/w1280${poster_path}`

  return (
    <li className='movie'>
        <img src={movieImg} alt="" />
        <div className='infos-container'>
          <strong>{title}</strong>
          <p className='rate'>{vote_average}</p>
        </div>
        <p className='adult'>Adult: {adult ? 'Yes' : 'No'}</p>
    </li>
  )
}
