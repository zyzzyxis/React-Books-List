import React, {useState} from 'react'


const BookForm = (props) => {
  const {addBook} = props
  const [bookTitle, setTitle] = useState('')
  const [bookAuthor, setAuthor] = useState('')
  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    console.log(bookTitle)
    console.log(bookAuthor)
    addBook({title: bookTitle, author: bookAuthor})
    setTitle('')
    setAuthor('')
  }
  return(
    <div>
      <h1>New Book Form</h1>
      <form onSubmit={handleSubmit}>
        <h3>Title</h3>
        <input
          value={bookTitle}
          onChange={(e=>{setTitle(e.target.value)})}
        />
        <h3>Author</h3>
        <input
          value={bookAuthor}
          onChange={(e=>{setAuthor(e.target.value)})}
        />
        <p>
       <button type='submit'>Add New Book</button>
       </p>
      </form>
    </div>
  )
}

export default BookForm