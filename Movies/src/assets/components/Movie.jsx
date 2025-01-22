import React, { useState } from 'react'
import "../CSS/movie.css"

function Movie() {
    let [movie, setmovie] = useState("");
    let [display, setdisplay] = useState(null)
    let fetchapi = async () => {
        let data = await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=de9694b0`)
        let finaldata = await data.json()
        console.log(finaldata);
        // console.log(finaldata.Search)
        // setmovie(finaldata.Search)
        try {
            if (finaldata.Response==="True") {
                setdisplay(finaldata.Search);
            }else{
                alert("Movie not found")
            }
        } catch (error) {
            console.log(error.message)
        }
        
    }
    // fetchapi()
    return (
        <><div className='title'><h1>Movie DataBase</h1>
        <input type="text" placeholder='Enter the movie' onChange={(e) => { setmovie(e.target.value) }} />
        <button onClick={fetchapi}>Search</button></div>
        <div className='container'>
           
            {display && display.map(({imdbID,Poster,Title,Year,Type}) => {
                return (
                    <section key={imdbID}>
                        <div className='cards'>
                        <img src={Poster} alt="" srcset="" />
                        <h1>Title:{Title}</h1>
                        <h2>Year:{Year}</h2><h2>{Type}</h2></div>
                    </section>
                )
            })}
        </div></>
    )
}

export default Movie
