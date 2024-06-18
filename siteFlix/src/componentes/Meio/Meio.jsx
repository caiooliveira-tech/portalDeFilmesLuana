import filmes from '../../../public/filmes.svg'
import { Button } from "@material-tailwind/react";
import {Link} from 'react-router-dom'

function Meio(){
    return(
        <>
            <div className='pt-4 pb-4 relative flex items-end gap-4 ' >
                <div className="flex bg-marrom w-full text-white overflow-x-scroll lg:overflow-visible">
                    <img
                        className="object-cover h-96"
                        src={filmes}
                        alt="nature image"
                    />
                    <h1 className= "absolute right-20 text-4xl ">
                    Acompanhe as tendências e organize seus filmes 
                    </h1>
                    <div className="absolute bottom-10 right-60">
                    <Button size="lg" className='bg-white text-marrom' ><Link to="filmes">Ir para a página de filmes</Link></Button>
                    </div>
                </div>
                
            </div>  

            <h1 className="text-4xl flex justify-around font-bold tracking-tight bg-marrom text-white sm:text-3xl md:text-4xl p-4">
                <span className="block">
                    Comentários da comunidade
                </span>
            </h1>
        </>
    )
}
export default Meio;