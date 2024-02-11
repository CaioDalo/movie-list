export default interface Movie {
  title: string,
  vote_average: number,
  id: string,
  adult: boolean,
  poster_path: string
}

export default interface IMovieInterface {
  results: Movie[],
  total_pages: number
  page: number
  total_results: number
}
