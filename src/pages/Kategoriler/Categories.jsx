import { Link } from "react-router-dom";
import * as apiClient from "../../apiClient/apiClient"
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/context";

const Categories = () => {
    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])
    const [selectedGenre, setSelectedGenre] = useState(localStorage.getItem("selectedGenre") || '');
    const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem("currentPage")) || 1);
    const { loading } = useContext(MovieContext)

    const topic = `bg-secondary-500 text-primary-100 rounded-xl p-4   `

    useEffect(() => {
        const fetchMovie = async (genre) => {
            try {
                const response = await apiClient.fetchMovieFromCategories(genre, currentPage);
                setMovie(response.results);
            } catch (error) {
                console.log("error");
            }
        };

        if (selectedGenre) fetchMovie(selectedGenre);
    }, [selectedGenre, currentPage]);

    useEffect(() => {
        localStorage.setItem("selectedGenre", selectedGenre);
        localStorage.setItem("currentPage", currentPage.toString());
    }, [selectedGenre, currentPage]);

    useEffect(() => {
        const fetchGenres = async () => {
            setCurrentPage(1)
            try {
                // eslint-disable-next-line no-undef
                const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_APIKEY}&language=en-US`);
                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error("Error fetching genres:", error);
            }
        };
        fetchGenres();
    }, []);

    const selectedGenreChange = (event) => {
        setSelectedGenre(event.target.value);
        setCurrentPage(1);
    };
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
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
            <div className="container mx-auto flex flex-col mt-10 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end space-x-4">
                    <h1 className="font-bold text-primary-500 text-xl">Kategorinizi Seçiniz:</h1>
                    <select className="w-full sm:w-auto" value={selectedGenre} onChange={selectedGenreChange}>
                        {genres.map(genre => (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
                    {movie.map((movieItem) => (
                        <div key={movieItem.id} className="p-2">
                            <Link to={`/details/${movieItem.id}`} className="flex relative flex-col w-full h-full">
                                <img className="w-full h-full rounded-lg object-cover hover:scale-110 transition duration-500" src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`} alt={movieItem.title} />
                                <div className="opacity-0 absolute bottom-0 w-full h-full flex flex-col justify-end p-4 hover:opacity-100 border-image transition duration-300 ease-in-out">
                                    <div className="text-primary-100 text-xl font-bold mb-2 shadow-lg">{movieItem.title}</div>
                                    <p className="text-sm text-primary-100 font-medium">
                                        Release Date: {movieItem.release_date}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-10 justify-end mt-10" style={{ display: selectedGenre ? 'flex' : 'none' }}>
                    <button className={topic} onClick={prevPage}>Önceki Sayfa</button>
                    <span className={topic}>{currentPage}</span>
                    <button className={topic} onClick={nextPage}>Sonraki Sayfa</button>
                </div>
            </div>
        )
    }

}

export default Categories




