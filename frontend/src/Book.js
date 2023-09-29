
import './Book.css'
function Book(props) {
    return <>
          <div id="handmaid" className="book">
  <div className="gloss"></div>
  <img className="cover" src={props.book_image} ></img>
  <div className="description">
    <h1>{props.title}</h1>
    <hr></hr>
    <p>{props.description}</p>
    
  </div>
</div>



    </>
}
export default Book