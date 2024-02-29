import { Link } from "react-router-dom";

const DisplayTopRated = (movie) => {
    const ImageText = `text-white`;
    return (
        <Link to={`/details/${movie.id}`}>
            <div className="relative max-w-sm rounded-lg overflow-hidden m-4 bg-grey-500  transition duration-300 ease-in-out w-full h-[250px] cursor-pointer" data-id={movie.id}>
                <img className="w-full h-full rounded-t-lg hover:scale-110 transition duration-500 " src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                <div className="opacity-0 absolute bottom-0 w-full h-full flex flex-col justify-end p-4 hover:opacity-100 hover:border-image transition duration-300 ease-in-out">
                    <div className="text-primary-100 text-2xl font-bold mb-2 shadow-lg">{movie.title}</div>
                    <p className={`${ImageText} text-sm`}>
                        Popularity: {movie.popularity}
                    </p>
                </div>
            </div>
            <div className="border-2 border-primary-800 mt-10"></div>
        </Link>
    )
}
export default DisplayTopRated;


