import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import '../css/getstarted.css'
import axios from 'axios'

export const GetStarted = () => {

    const [searchResult, setSearchResult] = useState([])

    const[selectGenres,setSelectGenres] = useState([
        {
            t_id: 10759,
            name: 'Action & Adventure'
        },
        {
            t_id: 16,
            name: 'Animation'
        },
        {
            t_id: 35,
            name: 'Comedy'
        },
        {
            t_id: 80,
            name: 'Crime'
        },
        {
            t_id: 18,
            name: 'Drama'
        },
        {
            t_id: 10751,
            name: 'Family'
        },

        {
            t_id: 9648,
            name: 'Mystery'
        },
        {
            t_id: 10764,
            name: 'Reality'
        },
        {
            t_id: 10765,
            name: 'Fantasy'
        },
        {
            t_id: 10765,
            name: 'Sci-Fi'
        },
        {
            t_id: 10768,
            name: 'War & Politics'
        },
        {
            t_id: 37,
            name: 'Western'
        },
    ])
    const[selectedGenres, setSelectedGenres] = useState([])

    const [error, setError] = useState()

    const addGenres = async (genre) => {

        if(selectedGenres.length>=3) return setError('You can only select upto 3 genres')

        setSelectedGenres([...selectedGenres,genre])

        setSelectGenres(selectGenres.filter((gen)=>{
            if(gen.name === genre.name) {
                return false
            } else{
                return true
            }
        }))
        
    }
    const removeGenres = async (genre) => {

        setSelectGenres([...selectGenres,genre])
        
        setSelectedGenres(selectedGenres.filter((gen)=>{
            if(gen.name === genre.name) {
                return false
            } else{
                return true
            }
        }))

        setError('')

    }

    const search = async () => {

        const genreIds = []

        for (let i = 0; i < selectedGenres.length; i++) {

            genreIds.push(selectedGenres[i].t_id)
            
        }

        const genreIdsString = await genreIds.join('%20')

        const results = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=02c08aca1dd12d9fc1a83e8bf47fa0cc&with_genres=${genreIdsString}&sort_by=vote_count.desc`)
        setSearchResult(results.data.results)
        console.log(results.data.results);
    }

  return (
    <>
        <div className="background-a"></div>
        <NavBar />
        <div className="gs-content">
            <div className="selectGenres">
                <div className="select-genres-container">
                    <div className="sg-header">
                        <p style={{fontSize:'24px'}}>Select Upto 3 Genres</p> 
                        <p style={{color:'#555555'}}>{error}</p>
                    </div>
                    <div className="select-genres">
                        {selectGenres.map((genre)=>(
                            <div className='add-genre-btn' key={genre.name} onClick={()=>{addGenres(genre)}}> 
                                {genre.name}
                            </div>
                        ))}
                    </div>
                    <div className="sg-header">
                    <p style={{fontSize:'24px'}}>Selected Genres</p> 
                    </div>
                    <div className="selected-genres">
                        {selectedGenres.map((genre)=>(
                            <div className='add-genre-btn' key={genre.name} onClick={()=>{removeGenres(genre)}}>
                                {genre.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="search-btn" onClick={()=>{search()}}>
                    Search
                </div>
                <div className="search-results">
                    {searchResult.map((result)=>(
                        <div className="result-card" key={result.id}>
                                <div className="poster">
                                    <img style={{width:'100%'}} src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} alt="" />
                                </div>
                                <div className="title">
                                    {result.original_name}
                                </div>
                                <div className="ratings">
                                    Rated: {result.vote_average}/10
                                </div>
                                <div className="overview">
                                    {result.overview}
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}
