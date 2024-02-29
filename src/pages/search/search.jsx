import { useEffect, useState } from "react"
import * as apiClient from "../../apiClient/apiClient"
import DisplaySearchMovie from "./DisplaySearchMovie"


const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        const fetchSearchMovies = async (searchValue) => {
            try {
                const data = await apiClient.fetchSearchMovie(searchValue)
                setResults(data.results)
            } catch (err) {
                console.error(err);
            }
        }
        if (searchValue) fetchSearchMovies(searchValue);
    }, [searchValue]);

    useEffect(() => {
        localStorage.setItem("SearchValue", searchValue);
    }, [searchValue]);

    console.log(results);

    const handleSearchValue = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <div className="container mx-auto w-full h-full mt-10">
            <label className="mx-auto h-full w-full relative min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl search-image">
                <input id="search-bar" value={searchValue} placeholder="Search Movie" className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-primary-100" onChange={handleSearchValue} />
                <button className="w-full md:w-auto px-6 py-3 text-primary-100 active:scale-95 duration-200 border overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                    <div className="flex items-center transition-all opacity-1">
                        <span className="text-sm font-semibold mx-auto">
                            Search
                        </span>
                    </div>
                </button>
            </label>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 w-full">
                {
                    results.map((result, index) => (
                        <DisplaySearchMovie key={index} {...result} />
                    ))
                }
            </div>
        </div >
    )
}

export default Search