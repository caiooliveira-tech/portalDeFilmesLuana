import { useState } from "react"

function Filmes() {

    const [filmes, setFilmes] = useState([])

    const apiKey='d585b66222a73fca5fc14f7d1568b41f'
    const urlBase='https://api.themoviedb.org/3/movie/'
    const urlImg='https://image.tmdb.org/t/p/w342'

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=d585b66222a73fca5fc14f7d1568b41f')
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch(erro => console.log(erro))

    return ( 
        <>
        <h1>Filmes</h1>
        {
            filmes.map(filme => (
                <div className="card-filme" key={filme.id}>
                    <h1>{filme.title}</h1>
                </div>
            ))
        }
        </>
     );
}

export default Filmes ;