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
        <div className="">
            <form>
                <input type="text" placeholder='name' name='name' onChange={handleInput} />
                <input type="text" placeholder='Description' name='desc' onChange={handleInput} />
                <input type="file"accept="image/*" placeholder='img' name='coverUrl' onChange={handleInput} />

            </form>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Add