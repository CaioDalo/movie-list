import {AiOutlineSearch} from "react-icons/ai";

import './index.css'


export function Header() {
    return (
        <header>
            <div className="container header">
                <ul className="filters">
                    <li>
                        <input className="radio movie-filter" type="radio" name="movie-filter" id="top_rated" value='top_rated' defaultChecked/>
                        <label htmlFor="top_rated">Top Rated</label>
                    </li>
                    <li>
                        <input className="radio movie-filter" type="radio" name="movie-filter" id="popular" value='popular' />
                        <label htmlFor="popular">Popular</label>
                    </li>
                    <li>
                        <input className="radio movie-filter" type="radio" name="movie-filter" id="upcoming" value='upcoming' />
                        <label htmlFor="upcoming">Upcoming</label>
                    </li>
                </ul>
                <form className="search-container">
                    <input type="text" placeholder='Search'/>
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