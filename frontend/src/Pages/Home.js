import Book from "../Book"
import '../Pages/Home.css'
import ListBooks from "../ListBooks";
function Header () {
    return (
        <div className="header-container">
          <div className="content">
            
            <div className="image-container">
          <img
            src="https://static.vecteezy.com/system/resources/previews/026/988/008/original/single-continuous-line-drawing-young-woman-sitting-on-floor-reading-book-reading-studying-girl-love-to-read-literature-education-library-concept-dynamic-one-line-draw-design-illustration-png.png" // Replace with the actual image URL
            alt="Description of the image"
            className="image" // Apply the CSS class
          />
          <div className="overlay-text">
          <div className="text">
              <h1>Hi Houda</h1>
              <div className="quote-container">
                <p>Improve your theory of mind</p>
                <blockquote>"Today a reader<br></br>
                    tomorrow a leader"</blockquote>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      );
}

function Home () {
    return <>
        <Header />
        <ListBooks />
    </>
}
export default Home