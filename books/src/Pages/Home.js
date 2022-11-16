import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom"
const Home = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/books/get")
        setbooks(res.data)
      } catch (error) {

      }
    }; fetchBooks();
  }, [])
  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:8800/api/books/delete/${_id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="maindiv">
      <h1> Book </h1>
      <div className="books">
        {books.map((book) => (
          <div key={book._id} className="book">
            <img src={book.coverUrl} alt="" />
            <h2>{book.name.slice(0, 20)}...</h2>
            <p>{book.desc.slice(0, 150)}...</p>
            <span>${book.price}</span>
            <button className="btndelete" onClick={() => handleDelete(book._id)}>Delete</button>
            <button className="btnupdate">
              <Link
                to={`/update/${book._id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addbtn">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>


  )
}

export default Home