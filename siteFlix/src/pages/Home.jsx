import data from '../../artigos.json'

function Home() {
    console.log(data)
    
    return ( 
        <>
        <input type="text" id="buscar" placeholder='Digite sua busca'/>
        <div className='grid grid-cols-3 gap-4'> 
        {data.map( filme => (
                <div className='card' key={filme.title}>
                    <h1>{filme.title}</h1>
                    <img src={filme.image} alt={filme.title} />
                    <div className='text'>
                            {filme.text.map(text => (
                                <span key={text}> {text} </span>
                            ))}
                    </div>
                    <div className='tag'>
                            {filme.tags.map(tag => (
                                <span key={tag} className='text-purple-900'> {tag} </span>
                            ))}
                    </div><br></br>
                </div>
            ))
        }
        </div>
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