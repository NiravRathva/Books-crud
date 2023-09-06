import { useState } from "react"
import axios from "axios"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [error,setError] = useState(false)
  const [input, setInput] = useState({
    name: "",
    desc: "",
    coverUrl: ""
  })
  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  }


  const bookId = location.pathname.split("/")[2];

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://books-ik9q.onrender.com/api/books/${bookId}`, input);

      navigate("/");
    } catch (error) {
      setError(true);
    }
  }
  return (
    <div className="add">
      <div className="div">
        <span className="title">Update</span>
        <form className="form">
          <label>Name</label>
          <input className="input" type="text" name="name" onChange={handleInput} placeholder="Enter Book name..." />
          <label>Desc</label>
          <input className="input" type="text" name="desc" onChange={handleInput} placeholder="Enter Book description..." />
          <label>Book Cover</label>
          <input className="input" type="file" name="coverUrl" />
          <button className="button" onClick={handleUpdate}>Update</button>

          {error && "Something went wrong!"}
          <Link to="/" className="link"><button className="button">See all books</button></Link>
        </form>

      </div>
    </div>
  )
}

export default Update