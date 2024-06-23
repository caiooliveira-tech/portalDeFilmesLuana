import filmes from '../../../public/filmes.svg'

import {Link} from 'react-router-dom'

function Meio(){
    return(
        <>
            <div className=" mx-auto mt-6 mb-6 bg-gray-200 rounded-lg shadow-md overflow-hidden flex">
      <div className="w-2/3">
        <img src={filmes} alt="Filmes" className="w-full h-full object-cover" />
      </div>
      <div className="w-1/3 bg-marrom flex flex-col justify-center items-center text-white p-6">
        <h2 className="text-5xl mb-12 text-center font-bold">Acompanhe as tendênciase organize seus filmes</h2>
        <Link to="/filmes">
          <button className="px-6 py-3 bg-white text-[#5c2c26] rounded-full font-bold">
            Ir para a página de filmes
          </button>
        </Link>
      </div>
    </div>
        </>
    )
}
export default Meio;