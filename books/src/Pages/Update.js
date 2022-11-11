import { useState } from "react"
import axios from "axios"
import {Link, useLocation, useNavigate } from "react-router-dom"

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
      const res=  await axios.put(`http://localhost:8800/api/books/${bookId}`, input);
      
      navigate("/");
    } catch (error) {
setError(true);
    }
  }
  return (
    <div className="">
      <form>
        <input type="text" placeholder='name' name='name' onChange={handleInput} />
        <input type="text" placeholder='Description' name='desc' onChange={handleInput} />
        <input type="file" accept="image/*" placeholder='img' name='coverUrl' onChange={handleInput} />

      </form>
      <button onClick={handleUpdate}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
    
  )
}

export default Update