import { useState, useEffect } from "react"
import React from "react"
import './BookBasket.css'
import Book from "../Book.js";
function BookBasket () {
    const [booksData, setBooksData] = useState([])
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        const numberOfItems = localStorage.length;
        const items = [];

        for (let i = 0; i < numberOfItems; i++) {
          const key = localStorage.key(i); 
          const value = localStorage.getItem(key); 
          items.push({ key, value }); 
        }
        setAllItems(items);
      }, []);


    useEffect(() => {
        fetch('https://api.nytimes.com/svc/books/v3/lists/combined-print-and-e-book-fiction.json?api-key=yzINKSSbrUWVtEYWeGm3zDBuM9N1f544')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setBooksData(data.results.books); // Update the state with the fetched data
          })
          .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
          });
      }, []);

      const filteredBooks = booksData.filter((book) =>
        allItems.some((item) => item.key == book.rank)
        );

    return (
        <div>
            <div className="HeaderText">
            <h2> Keep The Story Going </h2>
            <p>  Don't let the story end just yet,<br></br> 
            Continue reading your last book and immerse yourself in the world of literature </p>
           
            </div>
            <div className="BookText">
            <h2> My Books </h2>
            </div>
            <div className="container">
                    {filteredBooks.map((book, index) => (
                    <div className="card">
                    <Book key={index} {...book} />
                    </div>
                    ))} 
            </div>

        </div>
        
        
    )
}
export default BookBasket