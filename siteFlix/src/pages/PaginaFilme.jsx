import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PaginaFilme(){
    const {id} = useParams();

    const [filme, setFilme] = useState([])
    const apiKey='api_key=d585b66222a73fca5fc14f7d1568b41f'
    const urlBase='https://api.themoviedb.org/3/movie/'
    const urlImg='https://image.tmdb.org/t/p/w1280'

    useEffect(() => {

        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(erro => console.log(erro))


    },[])

    return(
        <>
        
        <img src={`${urlImg}${filme.backdrop_path}`}/>
        <h1>{filme.title}</h1>
        <p>{filme.overview}</p>
        <p>{filme.vote_average}</p>
        
        </>
    )
}
export default PaginaFilme;