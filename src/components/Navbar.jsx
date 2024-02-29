import { Link } from "react-router-dom";
import { TbCategoryFilled } from "react-icons/tb";

const listStyle = "float-left  mr-10 rounded-xl list-none text-3xl text-primary-100 font-bold";

const redirectToLink = () => {
    window.location.href = 'http://localhost:5173/Search';
};

const Navbar = () => {
    return (
        <header className='w-screen navbar-image h-auto'>
            <div className='space-y-2 w-screen flex flex-col h-full justify-center'>
                <div className="container mx-auto flex flex-row justify-between items-center px-5 md:px-12 lg:px-20">
                    <Link to={"/"}> <h1 className="text-4xl font-bold text-[primary-800]">Asortik</h1></Link>
                    <Link to={"/Categories"} className="flex items-center">
                        <TbCategoryFilled className="text-2xl mr-2 text-primary-100" />
                        <span className={listStyle}>Kategoriler</span>
                    </Link>
                </div>
                <div className="container mx-auto flex justify-center px-5 md:px-12 lg:px-20">
                    <form className='w-full max-w-xl'>
                        <input type="search" placeholder="Film Ara" onClick={redirectToLink} className="w-full rounded-xl h-10 bg-grey-300  mb-10" />
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
