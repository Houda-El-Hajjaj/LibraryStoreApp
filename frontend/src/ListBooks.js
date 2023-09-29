import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import Book from "./Book";
import './ListBooks.css'
function ListBooks() {

    const [booksData, setBooksData] = useState([])

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
    return (
        <div>
            <div className="Write"> 
                <h3> You May Like :</h3>
            </div>
        <div className="ListContainer">
      {booksData.map((item, index) => (
        <div key={index} className="BookContainer">
          <Link to={`/BookDetails/${item.rank}`}>
          <Book {...item} />
          </Link>

        </div>
      ))}
    </div>
    </div>
    )
}
export default ListBooks