import MovieType from '../Types/movie'
import { useState, createContext, useContext, useEffect, ReactNode } from "react";

interface IfilterContext {
  filter: string,
  lang: string,
  movies: MovieType[],
  setNewFilter: (filter: string) => void,
  setNewLang: (lang: string) => void
}

interface FilterProviderProps {
  children: ReactNode
}

export const filterContext = createContext<IfilterContext>({} as IfilterContext);

export const FiltersProvider = ({ children }: FilterProviderProps) => {
  const [filter, setfilter] = useState<string>('top_rated');
  const [lang, setLang] = useState<string>('en-US');
  const [movies, setMovies] = useState<MovieType[]>([])

  function setNewFilter(filter: string) {
    setfilter(filter)
  }

  function setNewLang(lang: string) {
    setLang(lang)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${filter}?api_key=1b273a82cec9cdead9e0f0e3d1b28e8d&language=${lang}`
        await fetch(url)
        .then(response => {
          return response.json()
        })
        .then(data => setMovies(data.results))
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()

  }, [filter, lang])

  return (
    <filterContext.Provider value={{ filter, lang, movies, setNewFilter, setNewLang }}>
      { children }
    </filterContext.Provider>
  );
};

export function useFilters() {
  const context = useContext(filterContext);
  return context;
}
