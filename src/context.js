// import React, { useState, useContext, useEffect } from "react";

// import { useCallback } from 'react';

// const URL = "https://openlibrary.org/search.json?title=";

// const AppContext = React.createContext();


// //fetch data from the API

// // const AppProvider = ({ children }) => {
// //     const [searchTerm, setSearchTerm] = useState('The lost world');
// //     const [books, setBooks] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [resultTitle, setResultTitle] = useState("");

// //     const fetchBooks = useCallback(async () => {
// //         setLoading(true);
// //         try {
// //             const response = await fetch(`${URL}&q=${encodeURIComponent(searchTerm)}`);


// //             const data = await response.json();
// //             console.log(data)
// //             const {docs} = data;

// //             if(docs){
// //                 const newBooks = docs.slice(0, 20).map((bookSingle)=>{
// //                     const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

// //                     return {
// //                         id: key,
// //                         author: author_name,
// //                         cover_id: cover_i,
// //                         edition_count: edition_count,
// //                         first_publish_year: first_publish_year,
// //                         title: title


// //                     }

// //                 });
// //                 setBooks(newBooks);
// //             }
// //         } catch (err) {
// //             console.error(err);
// //         } finally {
// //             setLoading(false);
// //         }
// //     }, [searchTerm]);

// //     useEffect(() => {
// //         fetchBooks();

// //     }, [searchTerm, fetchBooks]);


// //     return (
// //         <AppContext.Provider value={{ setSearchTerm, books, loading, setResultTitle, resultTitle}}>
// //             {children}
// //         </AppContext.Provider>
// //     )
// // }

// // ... (imports and constants)

// const AppProvider = ({ children }) => {
//     const [searchTerm, setSearchTerm] = useState('The lost world');
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [resultTitle, setResultTitle] = useState("");

//     const fetchBooks = useCallback(async () => {
//         setLoading(true);
//         try {
//             const response = await fetch(`${URL}${encodeURIComponent(searchTerm)}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const data = await response.json();
//             console.log(data)
//             // Check if the 'docs' property exists in the response
//             const booksData = data.docs || [];
//             const {docs} =data
//             console.log(booksData);
//             setBooks(booksData);
//             if(docs){
//        const newBooks = docs.slice(0,20).map((bookSingle)=>{
//         const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;
//     return {
//         id:key,
//         author:author_name,
//         cover_id: cover_i,
//         edition_count: edition_count,
//         first_publish_year: first_publish_year,
//         title:title
//     }
//     });
//            setBooks(newBooks);
//            if(newBooks.length > 1){
//             setResultTitle("your Search Result");
//            }else{
//             setResultTitle("no search result found!")
//            }
//     }  else {
//         setBooks([]);
//         setResultTitle("No Books Found!");
//     }
//     setLoading(false);

//         } catch (err) {
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     }, [searchTerm]);

//     useEffect(() => {
//         fetchBooks();
//     }, [searchTerm, fetchBooks]);

//     return (
//         <AppContext.Provider value={{ setSearchTerm, books, loading, setResultTitle, resultTitle }}>
//             {children}
//         </AppContext.Provider>
//     );
// }

// // ... (export statements)

// export const useGlobalContext =()=>{
//     return useContext(AppContext);
// };

// export {AppContext, AppProvider};


import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${encodeURIComponent(searchTerm)}`);
            const data = await response.json();
            // console.log(data)
            // Check if the 'docs' property exists in the response
            const booksData = data.docs || [];
            const { docs } = data
            // console.log(booksData);
            setBooks(booksData);

            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value={{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };