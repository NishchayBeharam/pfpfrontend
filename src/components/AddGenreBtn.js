import React from 'react'

export const AddGenreBtn = ({genre,selectGenres,selectedGenres,setSelectGenres,setSelectedGenres}) => {

    const addGenre = () => {
        setSelectedGenres(...selectedGenres,genre)
        const temparray = selectGenres.filter((gen)=>{
            if(gen.name==genre.name){
                return false
            } else {
                return true
            }
        })
        console.log(temparray);
    }

  return (
    <div className="add-genre-btn" onClick={addGenre}>
        {genre.name}
    </div>
  )
}
