import {AiOutlineSearch} from "react-icons/ai";

import './index.css'


export function Header () {
    return (
        <header>
            <div className="container header">
                <ul>
                    <li><button className="movie-filter" data-value='top_rated'>Top Rated</button></li>
                    <li><button className="movie-filter" data-value='popular'>Popular</button></li>
                    <li><button className="movie-filter" data-value='upcoming'>Upcoming</button></li>
                </ul>
                <div className="search-container">
                    <input type="text" placeholder='Search'/>
                    <AiOutlineSearch />
                </div>
            </div>
        </header>
    )
}