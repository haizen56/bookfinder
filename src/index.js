import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";

import { AppProvider } from './context';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./Components/BooksList/BookList";
import BookDetails from "./Components/BookDetails/BookDetails";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  //   <></>
  // </React.StrictMode>
  <AppProvider>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />}>

          <Route path='about' element={<About />} />
          <Route path='book' element={<BookList />} />
          <Route path='/book/:id' element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </AppProvider>

);

