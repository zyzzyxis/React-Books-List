import React from 'react'

const Book = (props) => {
  const {isbn, title, author, description, deleteBook} = props
  return (
    <div style={{border:'10px solid lightpink', margin:'10px'}}>
      <p>isbn: {isbn}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Description: {description}</p>
      <button onClick={() => deleteBook(isbn)}>Delete This Book</button>
    </div>
  )
}

export default Book


// title, author, isbn, description