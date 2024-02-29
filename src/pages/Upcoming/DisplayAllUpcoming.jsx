import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const DisplayAllUpcoming = (item) => {
    const topic = `flex items-center font-bold w-full p-2 justify-center text-primary-100 rounded-md bg-primary-800 tracking-tighter `

    const stringLength = (str) => {

        if (str && str.length > 10) {
            return str.substring(0, 10) + "..."
        }
        return str
    }
    return (
        <div className="flex flex-col space-y-4 ">
            <Link to={`/details/${item.id}`} className="flex relative flex-row w-full h-full " >
                <img className="w-[320px] h-full rounded-lg object-cover hover:scale-110 transition duration-500 " src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                <div className="opacity-0 absolute bottom-0 w-full h-full flex flex-col justify-end p-4 hover:opacity-100 border-image transition duration-300 ease-in-out">
                    <div className="text-primary-100 text-2xl font-bold mb-2 shadow-lg">{item.title}</div>
                    <p className="text-sm text-primary-100 font-medium">
                        Release Date: {item.release_date}
                    </p>
                </div>
            </Link>
            <div className="flex flex-col justify-start items-start gap-1 space-y-2  w-full ">
                <div className="grid grid-flow-col grid-rows-2 gap-x-4 gap-y-2 w-full ">
                    <p className={topic}>{stringLength(item.title)}</p>
                    <p className={topic}>{item.release_date}</p>
                    {
                        item.title === item.original_title ?
                            " "
                            :
                            <>
                                <p className={topic}>{stringLength(item.original_title)}</p>
                            </>
                    }
                </div>
                <div className="flex gap-2 ">
                    <p className={topic}><FaEye />  {item.popularity}</p> <br />
                    <p className={topic}> <AiFillLike /> {item.vote_count}</p>
                </div>
            </div>
        </div >
    )
}
export default DisplayAllUpcoming


