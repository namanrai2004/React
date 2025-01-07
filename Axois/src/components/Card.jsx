import React from 'react'

const Card = ({movieData}) => {
  return (
    <>
    <img src={movieData.Poster} alt={movieData.Title} />
    <h2>{movieData.Year}</h2>
    <h2>{movieData.Title}</h2>
    </>
  )
}

export default Card