import { useEffect, useState } from "react"
import { useParams } from "react-router"
import * as apiClient from "../../apiClient/apiClient.js"
import { MdWatchLater } from "react-icons/md";
import { GrLike } from "react-icons/gr";
import { FaImdb } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";


const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null)
    const [imageError, setImageError] = useState(false);


    const headerStyle = ` text-center text-secondary-500 text-5xl font-bold capitalize`

    const fetchDetail = async (id) => {
        try {
            const response = await apiClient.fetchDetails(id)
            setDetails(response)
        } catch (err) {
            console.log("details error");
        }
    }
    useEffect(() => {
        fetchDetail(id);
    }, [id])


    const errorHandler = () => {
        setImageError(true);
    };

    if (!details) {
        return (
            <div className='flex space-x-2 justify-center items-center bg-primary-100 h-screen '>
                <span className='sr-only'>Loading...</span>
                <div className='h-8 w-8 bg-[#000000] rounded-full animate-bounce' style={{ animationDelay: '-0.3s' }}></div>
                <div className='h-8 w-8 bg-[#000000] rounded-full animate-bounce' style={{ animationDelay: '-0.15s' }}></div>
                <div className='h-8 w-8 bg-[#000000] rounded-full animate-bounce'></div>
            </div>
        );
    }
    else {
        return (
            <div className="w-full h-screen rounded-lg ">
                <div className="container mx-auto py-4 w-full  ">
                    <div className="relative h-full w-full roundex-xl details-image">
                        {imageError ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-xl">
                                <span className="text-2xl font-bold text-primary-800">Image not available</span>
                            </div>
                        ) : (
                            <img
                                className="w-full rounded-xl h-full"
                                src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
                                alt={details.id}
                                onError={errorHandler}
                            />
                        )}
                        <div className="opacity-0 absolute h-full p-28 justify-end flex-col flex w-full left-0 bottom-0 rounded-xl space-y-4 details-title hover:opacity-100 border-image">
                            <span className="text-primary-100 font-bold text-2xl capitalize">{details.original_title}</span>
                            <h1 className="text-primary-100 font-bold text-xl">{details.tagline}</h1>
                            <button className="bg-secondary-500 text-primary-100 rounded-xl p-4 w-[300px]">
                                <a href={details.homepage}>Go Original Website</a>
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-[600px]">
                        <div className="flex justify-between items-center mt-2 h-full opacity-70 hover:opacity-100 details-image">
                            <div className="w-1/3 h-full">
                                <img className="object-fill h-full w-full" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt="" />
                            </div>
                            <div className="flex flex-col w-2/3 h-full justify-start">
                                <div>
                                    {
                                        details.title === details.original_title ?
                                            <h1 className={headerStyle}>{details.original_title}</h1>
                                            :
                                            <>
                                                <h1 className={headerStyle}>{details.original_title}({details.title})</h1>
                                            </>
                                    }
                                    <div className="border-2 border-primary-800 mt-5"></div>
                                </div>
                                <p className="text-black font-bold text-xl">{details.overview}</p>
                                <div className="mt-2 flex justify-between">
                                    <div className="flex flex-col">
                                        <div className="flex flex-wrap my-2">
                                            {details.genres.map(genre => (
                                                <span key={genre.id} className="m-2 bg-secondary-500 text-white py-1 px-3 rounded-full font-medium">
                                                    {genre.name}
                                                </span>
                                            ))}
                                        </div>
                                        <h1 className="flex items-center text-2xl font-bold"><MdWatchLater /><span> {details.runtime}m</span></h1>
                                        <p className="text-2xl font-bold">Release Date: {details.release_date}</p>
                                        <div className="flex flex-wrap my-2">
                                            {details.spoken_languages.map(language => (
                                                <span key={language.iso_639_1} className="m-2 font-bold text-xl"> <IoLanguageSharp />{language.name}</span>
                                            ))}
                                        </div>
                                        <span className="flex items-center text-2xl"><GrLike /> {details.popularity}</span>
                                        <span className="flex items-center text-2xl"><FaImdb /> {details.vote_average}</span>
                                    </div>
                                    <div className="flex  flex-col flex-wrap">
                                        {details.production_companies.map(company => (
                                            <div key={company.id} className="m-2 flex items-center">
                                                {company.logo_path && (
                                                    <img src={`https://image.tmdb.org/t/p/w92${company.logo_path}`} alt={`${company.name} logo`} className="mr-2" />
                                                )}
                                                <span className="font-medium">{company.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Details



