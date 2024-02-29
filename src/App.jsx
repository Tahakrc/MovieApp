import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieContextProvider from './context/context';
import Toprated from './pages/Home/Home.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllTrends from './pages/trends/allTrends';
import Details from './pages/details/deatils';
import Upcoming from './pages/Upcoming/Upcoming.jsx';
import Categories from './pages/Kategoriler/Categories.jsx';
import Search from './pages/search/search.jsx';

function App() {
  return (
    <BrowserRouter>
      <MovieContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Toprated />}></Route>
          <Route path='/trends' element={<AllTrends />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
          <Route path='/Upcoming' element={<Upcoming />}></Route>
          <Route path='/Categories' element={<Categories />}></Route>
          <Route path='/Search' element={<Search />}></Route>
        </Routes>
      </MovieContextProvider>
    </BrowserRouter >

  );
}

export default App;
