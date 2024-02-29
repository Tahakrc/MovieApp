import { useContext, useEffect } from "react"
import { MovieContext } from "../../context/context"
import DisplayAllUpcoming from "./DisplayAllUpcoming";

const AllUpcoming = () => {
    const { upcoming, page, setPage } = useContext(MovieContext);
    const buttonStyle = `font-medium text-xl text-primary-800 border-2 border-grey-500 p-2 rounded-md capitalize`

    useEffect(() => {
        setPage(1);
    }, [setPage])

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-primary-800 font-bold text-3xl mt-10">Yakın Tarihte </h1>
                    <div className="flex ">
                        {
                            page === 1 ?
                                <button className={buttonStyle} onClick={() => setPage(page + 1)}>Sonraki Sayfa</button>
                                :
                                <>
                                    <button className={buttonStyle} onClick={() => setPage(page - 1)}>Önceki Sayfa</button>
                                    <button className={buttonStyle} onClick={() => setPage(page + 1)}>Sonraki Sayfa</button>
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 w-full">
                {
                    upcoming.map((item, index) => (
                        <DisplayAllUpcoming key={index} {...item} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllUpcoming