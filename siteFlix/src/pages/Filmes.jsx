import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

function Filmes() {

    const [filmes, setFilmes] = useState([])
    const apiKey='api_key=d585b66222a73fca5fc14f7d1568b41f'
    const urlBase='https://api.themoviedb.org/3/movie/'
    const urlImg='https://image.tmdb.org/t/p/w342'

    useEffect(() => {

        fetch(`${urlBase}popular?${apiKey}`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(erro => console.log(erro))


    },[])
    

    return ( 
        <>
        <h1>Filmes</h1>
        <div className="listaFilmes flex flex-row gap-3">
            {
                filmes.map(filme => (
                    <div className="card-filme" key={filme.id}>
                        <img src={`${urlImg}${filme.poster_path}`}/>
                        <h1>{filme.title}</h1>
                        <Link className="bg-blue-500" to={`${filme.id}`}>Saber Mais</Link>
                        
                    </div>
                ))
            }
        </div>
        
        </>
     );
}

export default Filmes ;