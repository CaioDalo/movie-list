import IMovieInterface from '../Types/movie'
import { useState, createContext, useContext, useEffect, ReactNode, useMemo, } from "react";

interface IfilterContext {
  filter: string,
  lang: string,
  movies: IMovieInterface,
  setNewFilter: (filter: string) => void,
  setNewLang: (lang: string) => void
  setSearchMovie: (movie: string) => void
}

interface FilterProviderProps {
  children: ReactNode
}

export const filterContext = createContext<IfilterContext>({} as IfilterContext);

export const FiltersProvider = ({ children }: FilterProviderProps) => {
  const [filter, setfilter] = useState<string>('top_rated');
  const [lang, setLang] = useState<string>('en-US');
  const [movies, setMovies] = useState<IMovieInterface>({} as IMovieInterface);
  const [search, setSearch] = useState<string>('');


  function setNewFilter(filter: string): void {
    setfilter(filter)
  }

  function setNewLang(lang: string): void {
    setLang(lang)
  }

  function setSearchMovie(movie: string): void {
    setSearch(movie)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = search !== '' ?
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&language=${lang}'` :
        `https://api.themoviedb.org/3/movie/${filter}?api_key=${process.env.REACT_APP_API_KEY}&language=${lang}`

        await fetch(url)
        .then(response => {
          return response.json()
        })
        .then(data => setMovies(data))
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()

  }, [filter, lang, search])

  const providerValues = useMemo(() => ({ filter, lang, movies,setNewFilter, setNewLang, setSearchMovie }), [filter, lang, movies])

  return (
    <filterContext.Provider value={providerValues}>
      { children }
    </filterContext.Provider>
  );
};

export function useFilters() {
  const context = useContext(filterContext);
  return context;
}
