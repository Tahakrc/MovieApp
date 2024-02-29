import { Link } from "react-router-dom";
const Upcomes = (upcomes) => {
    return (
        <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5">
            <Link to={`/details/${upcomes.id}`} className="flex relative flex-row w-full h-full " >
                <img className="w-[320px] h-full rounded-lg object-cover hover:scale-110 transition duration-500 " src={`https://image.tmdb.org/t/p/w500${upcomes.poster_path}`} alt={upcomes.title} />
                <div className="opacity-0 absolute bottom-0 w-full h-full flex flex-col justify-end p-4 hover:opacity-100 border-image transition duration-300 ease-in-out">
                    <div className="text-primary-100 text-2xl font-bold mb-2 shadow-lg">{upcomes.title}</div>
                    <p className="text-sm text-primary-100 font-medium">
                        Release Date: {upcomes.release_date}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Upcomes