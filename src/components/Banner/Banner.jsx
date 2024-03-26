import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="lg:max-w-[1170px] mx-auto">
           <div className="hero lg:h-[554px] lg:px-20 lg:rounded-3xl rounded-xl  bg-[#1313130D]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={"./book.png"} className="w-full lg:h-[393px] flex justify-end lg:w-[318px]  rounded-lg " />
                <div>
                <h1 className="lg:text-[56px] lg:leading-[84px] leading-10 lg:mb-12 mb-8 text-4xl text-[#131313] font-bold ">Books to freshen up <br></br>your bookshelf</h1>
              
                <Link to={"/listedBooks"} className="rounded-lg py-3 lg:py-5 items-center bg-[#23BE0A] text-white text-[20px] font-bold lg:px-7 px-5">View Ths List</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;