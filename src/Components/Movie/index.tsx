import MovieType from '../../Types/movie'
import translations from '../../translations/translate.json'
import { useFilters } from "../../Hooks/handleFilters";
import './index.css'

interface MovieItemProps {
  movie: MovieType,
}

export function Movie(props: MovieItemProps) {

  const { lang } = useFilters()

  const {poster_path, title, vote_average, adult} = props.movie

  const movieImg = `https://image.tmdb.org/t/p/w1280${poster_path}`

  return (
    <li className='movie'>
        <img src={movieImg} alt="Poster" />
        <div className='infos-container'>
          <strong>{title}</strong>
          <p className='rate'>{vote_average.toFixed(2)}</p>
        </div>
        <p className='adult'>
          {translations[lang as keyof typeof translations].adult}:&nbsp;
          {
            adult ?
            translations[lang as keyof typeof translations].yes :
            translations[lang as keyof typeof translations].no
          }
        </p>
    </li>
  )
}
