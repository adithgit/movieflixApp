import React from 'react'
import './header.css'

function Header() {
    return (
        <div>
            <nav className='Header'>
                <div className='logo'>
                    <img className='imgValue' src='https://ik.imagekit.io/hbsbcognwwd/Movie_-a_30b5-2qU.png?updatedAt=1637081792149' alt="logo" />
                </div>
                <div className='headerOptions'>
                    <ul>
                        <li><a href="#actionHead">Action</a></li>
                        <li><a href="#thrillerHead">Thriller</a></li>
                        <li><a href="#comedyHead">Comedy</a></li>
                        <li><a href="#dramaHead">Drama</a></li>
                        <li><a href="#seriesHead">Series</a></li>
                    </ul>
                    <div class="dropdown">
                        <button class="dropbtn">Menu</button>
                        <div class="dropdown-content">
                            <a href="#actionHead">Action</a>
                            <a href="#thrillerHead">Thriller</a>
                            <a href="#comedyHead">Comedy</a>
                            <a href="#dramaHead">Drama</a>
                            <a href="#seriesHead">Series</a>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
