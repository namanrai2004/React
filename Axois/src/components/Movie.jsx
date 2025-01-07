import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const Movie = () => {
    const [data, setData] = useState([])

    const getMovieData = async () => {
        try {
            const res = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1');
            console.log(res.data)
            setData(res.data.Search)

        } catch (error) {
            console.log('Error', error);
            return <h1></h1>
        }
    }

    useEffect(() => {
        getMovieData()
    }, [])


    return (
        <ul>
            {data.map((val) => {
                return <Card key={val.imdbID} movieData = {val}/>
            })}
        </ul>

    )
}

export default Movie    