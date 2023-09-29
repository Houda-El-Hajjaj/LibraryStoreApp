import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import './BookDetails.css'
import ListBooks from "../ListBooks";
import { FaShoppingBasket } from 'react-icons/fa';

function BubbleText(props) {
    return (
        <div className="BubbleContainer">
          <p className="BubbleText">{props.name}</p>
          <a href={props.url}>
          <p className="BubblePrice">35$</p>
          </a>
        </div>
      );
      
}

function MiniBubbleText(props) {
    return (
      <div className="BubbleContainer">
        <p className="BubbleText">{props.text}</p>
      </div>
    );
  }


  

function BookDetails() {


        const {bookrank} = useParams()

        const [booksData, setBooksData] = useState([])


        const handleSubmit = (booktitlee, bookrank) => {

          localStorage.setItem(bookrank, booktitlee);

        }

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
               <div>
              {booksData.map((book, index) => {
                if (book.rank == bookrank) { // Change 3 to your specific number
                    return (
                    <div key={index} className="container">
                        <div className="text-section">
                        <h2 className="title">{book.title}</h2>
                        <h2 className="author">{book.author}</h2>
                        <MiniBubbleText text="combined-print-and-e-book-fiction" />
                        <p>{book.description}</p>
                            <div className="BubbleTextContainer">
                            {book.buy_links.slice(0, 2).map((link, linkIndex) => (
                                <div key={linkIndex} >
                                <BubbleText {...link}/>
                                </div>
                            ))}
                            <button className="basket-button" onClick={() => handleSubmit(book.title, book.rank)}>
                              <FaShoppingBasket className="basket-icon" /> 
                            </button>
                            </div>
                            
                        </div>

                        <div className="image-section">
                        <img src={book.book_image} alt="Book Cover" />
                        </div>
                    </div>
                    );
                } else {
                    return null; // Render nothing if index is not equal to your specific number
                }
                })}
                </div> 
                <div className="ListBooks">
                <ListBooks />
                </div>
            </div>
          );
          
          
          
}
export default BookDetails