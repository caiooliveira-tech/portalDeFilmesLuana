import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PaginaFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [diretor, setDiretor] = useState('');
  const apiKey = 'api_key=d585b66222a73fca5fc14f7d1568b41f';
  const urlBase = 'https://api.themoviedb.org/3/movie/';
  const urlImg = 'https://image.tmdb.org/t/p/w1280';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`);
        const movieData = await movieResponse.json();
        setFilme(movieData);

        const creditsResponse = await fetch(`${urlBase}${id}/credits?${apiKey}&language=pt-BR`);
        const creditsData = await creditsResponse.json();
        const diretorData = creditsData.crew.find(member => member.job === 'Director');
        setDiretor(diretorData ? diretorData.name : 'N/A');
      } catch (erro) {
        console.log(erro);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!filme) {
    return <div>Loading...</div>;
  }

  const formatarDataBrasileira = (data) => {
    const [year, month, day] = data.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="max-w-4xl mx-auto mt-9 mb-20 bg-mClaro rounded-lg shadow-md overflow-hidden flex relative">
      <div className="w-1/2">
        <img src={`${urlImg}${filme.poster_path}`} alt={filme.title} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 mx-5 bg-mClaro flex flex-col justify-between relative">
        <div>
          <h1 className="text-4xl font-bold text-white text-center mt-10 mb-10">{filme.title}</h1>
         
          <p className="text-gray-200 text-1xl mb-4"><strong>Diretor:</strong> {diretor}</p>
          <p className="text-gray-200 text-1xl mb-4"><strong>Data de Lançamento:</strong> {formatarDataBrasileira(filme.release_date)}</p>
          <p className="text-gray-200 text-1xl mb-4"><strong>Sinopse:</strong> {filme.overview}</p>
        </div>
        <Link to="/filmes">
          <button type="button" className="absolute bottom-5 right-5 flex items-center justify-center px-5 py-2 text-sm text-white bg-marrom border rounded-lg gap-x-2">
            <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span>Voltar</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PaginaFilme;