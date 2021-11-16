import React from 'react'
import './header.css'
function Header() {
    return (
        <div>
            <nav className='Header'>
                <div className='logo'>
                    <img src='https://ik.imagekit.io/hbsbcognwwd/Movie_-a_30b5-2qU.png?updatedAt=1637081792149' alt="logo" />
                </div>
                <div className='headerOptions'>
                    <ul>
                        <li>Action</li>
                        <li>Thriller</li>
                        <li>Comedy</li>
                        <li>Drama</li>
                        <li>Series</li>
                    </ul>
                    <div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
