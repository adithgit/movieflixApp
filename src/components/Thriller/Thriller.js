import React, { useEffect, useState } from 'react'
import axios from '../../API/Axios/Axios'
import { imageURL, thrillerURL } from '../../API/Constants'
import './Thriller.css'
function Thriller() {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(thrillerURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    return (
        <div>
            <div className="thrillerHead">
                <h1>
                    Thriller Movies
                </h1>
            </div>
            <div className="cards">
            {
                movies.map((movie)=>{
                    return(
               <div className="card">
                    <img className ='cardImage' src={imageURL+movie.poster_path} alt="" />
                </div>
                    )
                })
               }
            </div>
        </div>
    )
}

export default Thriller
