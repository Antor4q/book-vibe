import PropTypes from 'prop-types'
import { GoStar } from "react-icons/go";
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {image,tags,bookName,author,category,rating,bookId} = book;
    
    return (
       <Link to={`/bookDetails/${bookId}`}>
        <div className="rounded-2xl">
            <div className="card  h-[527px]  bg-base-100 border border-[#13131326] rounded-2xl p-4 lg:p-6">
            <figure className="p-10 h-[210px] bg-[#F3F3F3] rounded-2xl mb-6">
                <img src={image} alt="Shoes" className="" />
            </figure>
            <div className="card-body p-0">
                <div className='flex gap-3'>
                {
                    tags.map(tag =>{
                        return <div  key={tag.length}>
                            <p className='text-[#23BE0A] px-4 py-2 bg-[#23BE0A0D] font-medium rounded-[30px]'>{tag}</p>
                        </div>
                    })
                }
                </div>
                <h2 className="text-[#131313] my-4 text-2xl font-bold">{bookName}</h2>
                <p className='text-[#131313CC] font-medium'>By: {author}</p>
                <hr className='border-dashed border-[#13131326] my-5'></hr>
                <div className='flex justify-between  text-[#131313CC] font-medium'>
                    <p>{category}</p>
                    <p className=' flex justify-end items-center gap-2'>{rating} <GoStar /></p>
                </div>
            </div>
            </div>
        </div>
       </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;