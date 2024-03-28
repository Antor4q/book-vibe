// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import { BarChart,  XAxis, YAxis, CartesianGrid, Bar, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getStoredBooks } from '../../components/utility/localStorage';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import { getStoredId } from '../../components/utility/localStorage';

const PagesRead = () => {

    const books = useLoaderData()
    const [storedBooks,setStoredBooks] = useState([])
   
    useEffect(()=>{
        const savedBooksId = getStoredBooks()
       
       if(books.length > 0){
         const bookAdded = books.filter(book => savedBooksId.includes(book.bookId))
         setStoredBooks(bookAdded)
         console.log(bookAdded)

         
         }
         
     },[books])
  
     
   

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink']
    const data = storedBooks
      const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    return (
        <div className="lg:max-w-[1170px] mx-auto mt-10 lg:mt-0    rounded-2xl">

            
          <div className='py-3  mx-4 lg:p-8 lg:mx-0 rounded-2xl bg-[#1313130D] '>
          <ResponsiveContainer width="95%" height={400}>
         <BarChart
             width={904}
             height={480}
             data={data}
             margin={{
               top: 20,
               right: 30,
               left: 20,
               bottom: 5,
             }}
            >

        <CartesianGrid strokeDasharray="3 3" />
      <XAxis  dataKey={"bookName"} />
      <YAxis />
      <Tooltip></Tooltip>
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
            </BarChart>
         </ResponsiveContainer>
          </div>
        </div>
    );
};

export default PagesRead;