import { createContext, useEffect, useState } from 'react';
import { fetchPopularData, TrendMovies } from '../apiClient/apiClient.js'
import * as apiClient from "../apiClient/apiClient.js"

export const MovieContext = createContext();

// eslint-disable-next-line react/prop-types
const MovieContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [trending, setTrending] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchInitialData = async () => {
            try {
                const data = await fetchPopularData();
                const trend = await TrendMovies();
                setMovies(data);
                setTrending(trend);
            } catch (error) {
                console.error("Veri yükleme hatası:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchInitialData();
    }, []);

    useEffect(() => {
        setLoading(true);
        const fetchUpcomingMovies = async (page) => {
            const upcome = await apiClient.fetchUpcoming(page);
            setUpcoming(upcome);

        };
        fetchUpcomingMovies(page);
    }, [page]);

    return (
        <MovieContext.Provider value={{ movies, setMovies, trending, setTrending, page, setPage, upcoming, setUpcoming, loading, setLoading }}>
            {children}
        </MovieContext.Provider>
    );
};
export default MovieContextProvider;
