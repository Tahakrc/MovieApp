import { useContext } from "react"
import { MovieContext } from "../../context/context"
import DisplayAllTrends from "./DisplayAllTrends";

const AllTrends = () => {
    const { trending } = useContext(MovieContext)
    const { loading } = useContext(MovieContext)

    if (loading) {
        return (
            <div className='flex space-x-2 justify-center items-center bg-primary-100 h-screen '>
                <span className='sr-only'>Loading...</span>
                <div className='h-8 w-8 bg-[#000000] rounded-full animate-bounce' style={{ animationDelay: '-0.3s' }}></div>
                <div className='h-8 w-8 bg-[#000000] rounded-full animate-bounce' style={{ animationDelay: '-0.15s' }}></div>
                <div className='h-8 w-8 bg-[#000000] rounded-full animate-bounce'></div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="container mx-auto">
                    <h1 className="text-primary-800 font-bold text-3xl mt-10">Trend Filmler</h1>
                    <h3 className="text-primary-800 font-bold text-xl">Haftanın En çok izlenen Filmleri</h3>
                </div>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 w-full ">
                    {
                        trending.map((trend, index) => (
                            <DisplayAllTrends key={index} {...trend} />
                        ))
                    }
                </div>
            </div>

        )
    }

}

export default AllTrends