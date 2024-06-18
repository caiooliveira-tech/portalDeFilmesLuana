import data from '../../articles.json'
import Banner from '../componentes/Banner/Banner';
import Footer from '../componentes/Footer/Footer';
import Meio from '../componentes/Meio/Meio';
import Pesq from '../componentes/Pesq/Pesq';

function Home() {
    return ( 
        <>
        <Pesq/>
        <Banner/>
        <Meio/>
        <div className='block max-w-sm gap-4 p-5 '>
            {
                data.map( (artigo, index) => (
                    <div className='card pb-5' key={index}>
                        <h2>{artigo.title}</h2> 
                        <img className="mb-2" src={artigo.image} alt={artigo.title} />
                        <div className='tags'>
                            {artigo.tags.map( (tag, index) => (
                                <span className="bg-purple-600 p-1 m-1 rounded " key={index}>{tag}</span>
                            ))}
                        </div>
                        <div className='texto'>
                        {artigo.text.map( (paragrafo,index) => (
                            <p key={index}>{paragrafo}</p>
                        ))}
                        </div>

                    </div>
                ))
            }
            </div>
        <Footer/>
        </>
    );
}

export default Home ;

/*

<div className='card'>
    <h1>Titulo do filme</h1>
    <img src='/' alt=''/>
    <div className='tag'>
        <span>Tags</span>
    </div>
    <p></p>
</div> */