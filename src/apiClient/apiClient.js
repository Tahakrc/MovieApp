const fetchPopularData = async () => {
    // POPULAR 
    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_APIKEY}`);
        const data = await response.json();
        return data.results
    } catch (error) {
        console.error("Data fetching error:");
    }
};
// Trends
const TrendMovies = async () => {
    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_APIKEY}`);
        const trending = await response.json();
        return trending.results
    } catch {
        console.error("Data fetching error Trending:");
    }
}
// Detail
const fetchDetails = async (id) => {
    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_APIKEY}`)
        const data = await response.json()
        return data
    } catch (err) {
        console.log("Data Details Error");
    }
}
const fetchUpcoming = async (page_number = 1) => {
    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_APIKEY}&language=en-US&page=${page_number}`)
        const data = await response.json()
        return data.results
    } catch (err) {
        console.log("Data Upcoming Error");
    }
}
const fetchMovieFromCategories = async (genre, page = 1) => {
    try {
        // eslint-disable-next-line no-undef
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_APIKEY}&with_genres=${genre}&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log("Data MovieFromCategories Error");
    }
}
const fetchSearchMovie = async (searchValue) => {
    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_APIKEY}&query=${encodeURIComponent(searchValue)}`)
        const data = await response.json();
        return data
    } catch (err) {
        console.log("Data fetchSearchMovie Error");
    }

}

export { fetchPopularData, TrendMovies, fetchDetails, fetchUpcoming, fetchMovieFromCategories, fetchSearchMovie }

