import React from 'react'
import './Action.css'
import axios from '../../API/Axios/Axios'
import {useEffect , useState} from 'react'
import {actionURL , imageURL} from '../../API/Constants'
function Action() {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(actionURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    return (
        <div id="actionHead">
            <div className="actionHead">
                <h1>
                    Action Movies
                </h1>
            </div>
            <div className="cards">{
                
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

export default Action
