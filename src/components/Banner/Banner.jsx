import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="lg:max-w-[1170px] mx-auto p-5 lg:p-0">
           <div className="hero lg:h-[554px] lg:px-20  lg:rounded-3xl rounded-xl  bg-[#1313130D]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={"./book.png"} className="w-[250px] lg:h-[393px] flex justify-end lg:w-[318px]  rounded-lg " />
                <div>
                <h1 className="lg:text-[56px] lg:leading-[84px] leading-10 lg:mb-12 mb-8 text-4xl text-[#131313] font-bold font-[playfair]">Books to freshen up your bookshelf</h1>
              
                <Link to={"/listedBooks"} className="rounded-lg py-2 lg:py-5 items-center bg-[#23BE0A] text-white text-lg lg:text-xl font-bold lg:px-7 px-3 mb-4 lg:mb-0 font-[work-sans]">View The List</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;