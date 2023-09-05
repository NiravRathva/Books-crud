import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Add = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: "",
        desc: "",
        coverUrl: ""
    })
    
    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
       
    }
    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/api/books", input)
            navigate("/");
        } catch (error) {

        }
    }
    return (
        <div className="add">
        <div className="div">
        <span className="title">Add Book</span>
        <form className="form">
            <label>Name</label>
            <input className="input" type="text" name="name"onChange={handleInput} placeholder="Enter Book name..." />
            <label>Desc</label>
            <input className="input" id="desc"type="text" name="desc"onChange={handleInput} placeholder="Enter Book description..." />
            <label>Book Cover</label>
            <input className="input" type="file" onChange={handleInput} name="coverUrl" />
            <button className="button" onClick={handleAdd}>Add</button>
        </form>
        
        </div>
    </div>
    )
}

export default Add