import Books from "../models/Books.js"

export const addBook = async (req, res) => {
    try {

        const newBook = new Books({
            name: req.body.name,
            desc: req.body.desc, coverUrl: req.body.coverUrl
        });
        const saveBook = await newBook.save();
        res.status(200).json(saveBook)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const getAllBooks = async (req, res) => {
    try {
        const getBooks = await Books.find()
        res.status(200).json(getBooks)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const updateBook = async (req, res) => {

    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true }
        console.log("running")
        const updatedBook = await Books.findByIdAndUpdate(id,
            updatedData, options)
        res.status(200).json(updatedBook)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const deleteBook = async (req, res) => {
    try {const id = req.params.id;
        const deleted = await Books.findByIdAndDelete(id)
        res.status(200).json("Book has been deleted")
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}