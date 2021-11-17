import React,{useState,useEffect} from 'react'
import axios from '../../API/Axios/Axios'
import { comedyURL, imageURL } from '../../API/Constants'
import './Comedy.css'
function Comedy() {
    const [movies,setMovies] = useState([])
   useEffect(()=>{
       axios.get(comedyURL).then((response)=>{
           setMovies(response.data.results)
       })
   },[])
    return (
        <div>
            <div className="comedyHead">
                <h1>
                    Comedy Movies
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

export default Comedy
