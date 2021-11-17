import React,{useEffect,useState} from 'react'
import axios from '../../API/Axios/Axios'
import { imageURL, seriesURL } from '../../API/Constants'
import './Series.css'
function Series() {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(seriesURL).then((response)=>{
            setMovies(response.data.results);
            console.log("this is series");
            console.log(response.data.results);
        })
    },[])
    return (
        <div id='seriesHead'>
            <div className="seriesHead">
                <h1>
                    Series
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

export default Series
