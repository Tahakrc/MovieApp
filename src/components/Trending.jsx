import { Link } from "react-router-dom"
const Trending = (trend) => {
    return (
        <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5">
            <Link to={`/details/${trend.id}`} className="flex relative w-full h-full">
                <img className="rounded-lg object-cover hover:scale-110 transition duration-500 w-full" src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`} alt={trend.title} />
                <div className="opacity-0 absolute inset-0 flex flex-col justify-end p-4 hover:opacity-100 transition duration-300 ease-in-out border-image">
                    <div className="text-primary-100 text-xl md:text-2xl font-bold mb-2 shadow-lg">{trend.title}</div>
                    <p className="text-sm md:text-base text-primary-100 font-medium">
                        Release Date: {trend.release_date}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Trending

