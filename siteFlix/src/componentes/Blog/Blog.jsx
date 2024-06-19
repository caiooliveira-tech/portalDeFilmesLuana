const posts = [
    {
        title: "Heather Graham traz vingança SANGRENTA no trailer de ‘Place of Bones’!",
        desc: "O terror ‘Place of Bones‘, estrelado por Heather Graham (‘Do Inferno’), ganhou o primeiro trailer.",
        img: "cardB1.webp",
        date: "Jun 19 2024",
        href: "javascript:void(0)"
    },
    {
        title: "Disney exibe cenas INÉDITAS de ‘Deadpool & Wolverine’ no CineEurope",
        desc: " Ryan Reynolds apareceu em vídeo irreverente como Deadpool para introduzir um vídeo inédito de doze minutos de ‘Deadpool & Wolverine’",
        img: "cardB2.jpg",
        date: "Jun 19 2024",
        href: "javascript:void(0)"
    },
    {
        title: "‘Cidade de Deus: A Luta Não Para’: Série inspirada no clássico nacional ganha novas imagens.",
        desc: "A produção trará cenas nunca vistas do longa-metragem original, contando com seis episódios.",
        img: "cardB3.jpg",
        date: "Jun 10 2022",
        href: "javascript:void(0)"
    },
    {
        title: "‘Divertida Mente 2’ quebra novo RECORDE histórico nas bilheterias dos EUA",
        desc: "Após somar US$ 29.1 milhões ontem (18), o longa registrou a maior arrecadação de uma animação durante uma terça-feira.",
        img: "cardB4.jpg",
        date: "Jun 18 2024",
        href: "javascript:void(0)"
    },
    {
        title: "‘O Corvo’: Revelado o tempo de duração do reboot com Bill Skarsgård",
        desc: "Lembrando que ‘O Corvo‘ tem estreia agendada para o dia 22 de agosto nos cinemas nacionais.",
        img: "cardB5.png",
        date: "Jun 3 2024",
        href: "javascript:void(0)"
    },
    {
        title: "Ator de ‘A Queda da Casa de Usher’ se junta ao elenco de ‘Mentirosos’, nova série do Prime Video",
        desc: "O ator interpretará Ed, o parceiro de longa data da Carrie (interpretada por Mamie Gummer). ",
        img: "cardB6.png",
        date: "Jun 4 2024",
        href: "javascript:void(0)"
    }
]

function Blog(){
    return (
        <section className="pt-6 pb-6">
            <div className="max-w-screen-xl mx-auto">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-marrom text-3xl font-extrabold sm:text-4xl">Últimas Notícias</h1>
                    <p className="text-marrom">Tudo fresquinho sobre o mundo do cinema.</p>
                </div>
         
                <ul className="grid gap-x-8 gap-y-10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title} className="w-70 rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-indigo-600 text-sm">{items.date}</span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {items.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
export default Blog;