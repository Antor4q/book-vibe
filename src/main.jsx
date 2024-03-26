import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ListedBooks from './pages/ListedBooks/ListedBooks.jsx';
import PagesRead from './pages/PagesRead/PagesRead.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import Error from './pages/Error/Error.jsx';
import Read from './components/Read/Read.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      
     {
      path: "/listedBooks",
      element: <ListedBooks></ListedBooks>,
      children: [
        {

          index: true,
          element: <Read></Read>,
          loader: ()=> fetch("/data.json")
        },
        {
          path: "wishlist",
          element: <Wishlist></Wishlist>
        }
      ]
     },
     {
      path:"/pagesRead",
      element:<PagesRead></PagesRead>
     },
     {
      path: "/bookDetails/:id",
      element: <BookDetails></BookDetails>,
      loader: ()=> fetch("/data.json")
     }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
