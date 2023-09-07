import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useFilters } from "../../Hooks/handleFilters";
import translations from '../../translations/translate.json'

import './index.css'

export function Header() {

  const [search, setSearch] = useState<string>('');
  const { setSearchMovie, lang } = useFilters()

  function handleSearch(e: any): void {
    e.preventDefault()
    setSearchMovie(search)
  }

  return (
    <header>
      <div className="container header">
        <ul className="filters">
          <li>
            <input className="radio movie-filter" type="radio" name="movie-filter" id="top_rated" value='top_rated' defaultChecked/>
            <label htmlFor="top_rated">{translations[lang as keyof typeof translations].top_rated}</label>
          </li>
          <li>
            <input className="radio movie-filter" type="radio" name="movie-filter" id="popular" value='popular' />
            <label htmlFor="popular">{translations[lang as keyof typeof translations].popular}</label>
          </li>
          <li>
            <input className="radio movie-filter" type="radio" name="movie-filter" id="upcoming" value='upcoming' />
            <label htmlFor="upcoming">{translations[lang as keyof typeof translations].upcoming}</label>
          </li>
        </ul>
        <form className="search-container" onSubmit={handleSearch}>
          <input type="text"
            placeholder={translations[lang as keyof typeof translations].search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
        <div>
          <ul className="languages">
            <li>
              <input className="radio language" type="radio" name="language" id="EN" value='en-US' defaultChecked/>
              <label htmlFor="EN">EN</label>
            </li>
            <li>
              <input className="radio language" type="radio" name="language" id="PT" value='pt-BR'/>
              <label htmlFor="PT">PT</label>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
