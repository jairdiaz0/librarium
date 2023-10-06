import { useEffect, useState } from 'react';
import './App.css'
import BookCard from './components/books/BookCard';
import Navbar from './components/shared/Navbar';

import { books } from './data/books';
import AddBook from './components/books/AddBook';
import ModalEdit from './components/books/ModalEdit';

function App() {
  const [booksArray, setBooksArray] = useState(Array<any>);
  const [bookSelected, setBookSelected] = useState();
  useEffect(() => {
    setBooksArray(books);
  }, [books])

  function changeBookSelected(book: any) {
    setBookSelected(book);
  }
  function changeQuantity(book: any, value: any) {
    let newBooksArray = [...booksArray];
    let bookItem = newBooksArray.find((bookItem) => bookItem.id === book.id);
    bookItem.quantity += value;
    if (bookItem.quantity <= 0) newBooksArray = newBooksArray.filter((bookItem) => bookItem.id !== book.id);
    setBooksArray(newBooksArray);
  }
  function addBook(book: any) {
    let lastID = booksArray.length > 0 ? booksArray[booksArray.length - 1].id : 1;
    book.id = lastID + 1;
    setBooksArray([...booksArray, book]);
  }
  function editBook(book: any) {
    const indexBook = booksArray.findIndex((bookItem) => bookItem.id === book.id);
    if (indexBook >= 0) {
      let newBooksArray = [...booksArray];
      newBooksArray[indexBook] = book;
      setBooksArray(newBooksArray);
    }
  }
  function deleteBook(book: any) {
    const newBooksArray = [...booksArray].filter((bookItem) => bookItem.id !== book.id);
    setBooksArray(newBooksArray);
  }
  return (
    <>
      <ModalEdit deleteBook={deleteBook} editBook={editBook} bookSelected={bookSelected}></ModalEdit>
      <header className='containter-fluid'>
        <Navbar></Navbar>
      </header>
      <main className='container'>
        <div className="row">
          {
            booksArray.map((book) => {
              return <BookCard key={book.id} book={book} changeQuantity={changeQuantity} changeBookSelected={changeBookSelected}></BookCard>
            })
          }
        </div>
      </main>
      <footer className='container-fluid'>
        <AddBook addBook={addBook}></AddBook>
      </footer>
    </>
  )
}

export default App
