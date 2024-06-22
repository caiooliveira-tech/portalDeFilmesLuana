import data from '../../../noticias.json'

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
                        data.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                <a href={items.href}>
                                    <img src={items.img} loading="lazy" alt={items.title} className="w-70 rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-indigo-600 text-sm">{items.date}</span>
                                        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">{items.title}   </h3>
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