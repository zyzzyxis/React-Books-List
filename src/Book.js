import React from 'react'

const Book = (props) => {
  const {isbn, title, author, description} = props
  return (
    <div>
      <p>isbn: {isbn}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Description: {description}</p>
    </div>
  )
}

export default Book


// title, author, isbn, description