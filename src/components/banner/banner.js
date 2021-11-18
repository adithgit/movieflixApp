import React from 'react'
import './banner.css'
import { useState, useEffect } from 'react'
import axios from '../../API/Axios/Axios'
import {trendingURL , imageURL} from '../../API/Constants'
function Banner() {
    const [banner,setBanner] = useState({})
    useEffect(()=>{
        axios.get(trendingURL).then((response)=>{
            setBanner( response.data.results[Math.floor(Math.random() * response.data.results.length)])
            console.log(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
        })
    },[])
    return (
        <div>
            <div className="Banner">
                <div className='imageSection' style = {{backgroundSize: `cover` , background:`url(${imageURL+banner.backdrop_path}) no-repeat` }}>
                    <div className="leftSection">
                        <h1>{banner.original_title}</h1>
                        <h4><ul><li>lang-{banner.original_language} </li></ul></h4>
                        <span>{banner.overview}</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
