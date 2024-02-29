import { useContext } from "react"
import { MovieContext } from "../../context/context"
import DisplayTopRated from "../../components/displaytoprated";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Trending from "../../components/Trending";
import { Link } from "react-router-dom";
import Upcomes from "../../components/Upcomes";


const Toprated = () => {
  const { movies, trending, upcoming, loading } = useContext(MovieContext);

  const limitedUpcoming = upcoming.slice(0, 5);
  const limitedTrending = trending.slice(0, 5);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <FaArrowRight color="#12372A" style={{ display: "block" }} className={className} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <FaArrowLeft color="#12372A" style={{ display: "block" }} className={className} onClick={onClick} />;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className='flex space-x-2 justify-center items-center bg-primary-100 h-screen '>
        <span className='sr-only'>Loading...</span>
        <div className='h-8 w-8 bg-[#000000] rounded-full animate-bounce' style={{ animationDelay: '-0.3s' }}></div>
        <div className='h-8 w-8 bg-[#000000] rounded-full animate-bounce' style={{ animationDelay: '-0.15s' }}></div>
        <div className='h-8 w-8 bg-[#000000] rounded-full animate-bounce'></div>
      </div>
    );
  } else {
    return (
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto mt-10 flex flex-col items-center">
        {/* Home Slider - Popular Movies */}
        <div className="container mx-auto gap-4 p-5 space-y-4">
          <p className="font-bold text-3xl text-primary-800 text-left flex items-center mx-2">Popüler Filmler</p>
          <Slider {...settings} className="rounded-md">
            {movies.map((movie, index) => (
              <DisplayTopRated key={index} {...movie} />
            ))}
          </Slider>
        </div>
        {/* Home Trends */}
        <div className="container mx-auto bg-primary-800 flex flex-col rounded-xl mt-10">
          <div className="h-1/3 w-full flex justify-around items-center">
            <div className="flex flex-col m-10">
              <h1 className="text-3xl font-bold text-primary-100">Trend Filmler</h1>
              <h3 className="text-3xl font-medium text-primary-100">Haftanın En Çok İzlenen 20 Filmi</h3>
            </div>
            <Link to="/trends" className="font-medium text-xl text-primary-100 border-2 border-grey-500 p-2 rounded-md">
              Tümünü Gör
            </Link>
          </div>
          <div className="flex flex-wrap w-full px-5 mt-5">
            {limitedTrending.map((trend, index) => (
              <Trending key={index} {...trend} />
            ))}
          </div>
        </div>
        <div className="container mx-auto border-2 border-primary-800 mt-20 mb-20 w-full"></div>
        {/* Upcoming */}
        <div className="container mx-auto bg-secondary-500 flex flex-col rounded-xl">
          <div className="h-1/3 w-full flex justify-around items-center">
            <div className="flex flex-col m-10">
              <h1 className="text-3xl font-bold text-primary-100">Yakında</h1>
              <h3 className="text-2xl font-medium text-primary-100">Yakın Tarihte Yayınlanan ve Yayınlanacak</h3>
            </div>
            <Link to="/Upcoming" className="font-medium text-xl text-primary-100 border-2 border-grey-500 p-2 rounded-md">
              Tümünü Gör
            </Link>
          </div>
          <div className="flex flex-wrap w-full px-5 mt-5">
            {limitedUpcoming.map((upcomes, index) => (
              <Upcomes key={index} {...upcomes} />
            ))}
          </div>
        </div>
        <div className="container mx-auto border-2 border-primary-800 mt-20 mb-20 w-full"></div>
      </div>
    );
  }
};

export default Toprated;

