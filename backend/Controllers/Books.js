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
        console.log("run")
    const getBooks =await Books.find()
    res.status(200).json(getBooks)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const updateBook = async (req, res) => {
    try {

    } catch (error) {

    }
}
export const deleteBook = async (req, res) => {
    try {

    } catch (error) {

    }
}