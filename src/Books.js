import React from 'react'
import Book from './Book'

const Books = (props) => {
  const {books} = props
  const renderBooks = () => {
    if (books.length === 0){
      return (<p>No Books Available</p>)
    }

    return books.map( book => {
      
      return <Book key={book.isbn} {...book} />
    })
  }
  return(
    <div>
      <h1>Books</h1>
      {renderBooks()}
    </div>
  )
}

export default Books



