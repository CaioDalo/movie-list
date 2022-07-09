import './index.css'

interface MovieItemProps {
    movie: {
        title: string,
        vote_average: number,
        id: string,
        adult: boolean,
        poster_path: string
    }
}

export function Movie(props: MovieItemProps) {

    const movieImg = `https://image.tmdb.org/t/p/w1280${props.movie.poster_path}`

    let adult

    if( props.movie.adult === false ) {
        adult = 'No'
    } else {
        adult = 'Yes'
    }

    return (
        <li className='movie'>
            <img src={movieImg} alt="" />
            <div className='infos-container'>
                <strong>{props.movie.title}</strong>
                <p className='rate'>{props.movie.vote_average}</p>
            </div>
            <p className='adult'>Adult: {adult}</p>
        </li>
    )
}