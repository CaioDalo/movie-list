import {AiOutlineSearch} from "react-icons/ai";

import './index.css'

export function Header () {
    return (
        <header>
            <div className="container header">
                <ul>
                    <li><a href="">Top Rated</a></li>
                    <li><a href="">Popular</a></li>
                    <li><a href="">Recomendations</a></li>
                    <li><a href="">Upcoming</a></li>
                </ul>
                <div className="search-container">
                    <input type="text" placeholder='Search'/>
                    <AiOutlineSearch />
                </div>
            </div>
        </header>
    )
}