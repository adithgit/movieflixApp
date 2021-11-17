import axios from '../../API/Axios/Axios'
import React, { useEffect, useState } from 'react'
import { dramaURL, imageURL ,comedyURL} from '../../API/Constants'
import './Drama.css'
function Drama() {
    const [dramas, setDrama] = useState([])
    useEffect(() => {
        axios.get(dramaURL).then((response) => {
            setDrama(response.data.results)
        })
    },[])
    return (
        <div id="dramaHead">
            <div className="dramaHead">
                <h1>
                    Drama Movies
                </h1>
            </div>
            <div className="cards">
            {
                
                dramas.map((movie)=>{
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

export default Drama
