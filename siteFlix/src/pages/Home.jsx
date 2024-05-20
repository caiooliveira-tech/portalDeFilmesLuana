import data from '../../artigos.json'

function Home() {
    console.log(data)
    
    return ( 
        <main>
            <input type="text" name="busca" id="busca" placeholder="Digite aqui sua busca"></input>
            <div className='lista-filmes'>
                {
                    data.map(
                        filme => (
                            <h1>{filme.title}</h1>
                        )
                    )
               }
            </div>
        </main>
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