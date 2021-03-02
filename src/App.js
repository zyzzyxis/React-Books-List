
import './App.css';
import React, {useState, useEffect} from 'react';
import Books from './Books'
import axios from 'axios';



function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  // const [showForm, setShowForm] = useState(false)

  //do stuff when loads
  useEffect(() => {
    // do stuff
    loadData()
  }, [])  
  
  const loadData = async () => { /*this is around the 20 minute mark YT */
    try{
      console.log('getting dat')
      let res = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
      setBooks(res.data.data)
      console.log('data loaded')
      setLoading(false)
    }catch(err){
      console.log(err)
      alert('Error occured check log')
      setLoading(false)
    }
  }

  const deleteBook = (isbn) => {
    console.log(books)
    let filterBooks = books.filter( book => book.isbn !== isbn )
    setBooks(filterBooks)
    console.log(filterBooks)
  }
 
  return (
    <div className="App">
      <h1>NavBar</h1>
      {/* <button onClick={() => setShowForm(!{deleteBook}>Click to delete this book</button> */}
      {loading && <p>Loading</p>}
      <Books deleteBook={deleteBook} books={books} />
    </div>
  );
}

export default App;



// make a function to get the data from https://fakerapi.it/api/v1/books?_quantity=5
//async function axios call, will want to make a get request , 
//then use the url, set books to that data from there
// call this function in the useEffect 

// do stuff when loads
