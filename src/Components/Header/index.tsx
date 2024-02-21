import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useFilters } from "../../Hooks/handleFilters";
import translations from "../../translations/translate.json";

import "./index.css";

export function Header() {
  const { setNewFilter, setSearchMovie, setNewLang, lang, filter } =
    useFilters();

  const [search, setSearch] = useState<string>("");

  function handleSearch(e: any): void {
    e.preventDefault();
    setSearchMovie(search);
  }

  function handleLanguage(e: any): void {
    setNewLang(e.target.value);
  }

  function handleFilters(e: any): void {
    setNewFilter(e.target.value);
  }

  return (
    <header>
      <div className="container header">
        <ul className="filters">
          <li>
            <button
              className={`movie-filter ${filter === "top_rated" && "selected"}`}
              type="button"
              name="movie-filter"
              value="top_rated"
              onClick={(e) => handleFilters(e)}
            >
              {translations[lang as keyof typeof translations].top_rated}
            </button>
          </li>
          <li>
            <button
              className={`movie-filter ${filter === "popular" && "selected"}`}
              type="button"
              name="movie-filter"
              value="popular"
              onClick={(e) => handleFilters(e)}
            >
              {translations[lang as keyof typeof translations].popular}
            </button>
          </li>
          <li>
            <button
              className={`movie-filter ${filter === "upcoming" && "selected"}`}
              type="button"
              name="movie-filter"
              value="upcoming"
              onClick={(e) => handleFilters(e)}
            >
              {translations[lang as keyof typeof translations].upcoming}
            </button>
          </li>
        </ul>

        <form className="search-container" onSubmit={handleSearch}>
          <input
            type="text"
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
              <button
                className={`language ${lang === "en-US" && "selected"}`}
                name="language"
                value="en-US"
                type="button"
                onClick={(e) => handleLanguage(e)}
              >
                EN
              </button>
            </li>
            <li>
              <button
                className={`language ${lang === "pt-BR" && "selected"}`}
                name="language"
                value="pt-BR"
                type="button"
                onClick={(e) => handleLanguage(e)}
              >
                PT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
