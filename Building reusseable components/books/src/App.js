import {useState} from 'react';
import BookCreate from './component/BookCreate';
import BookList from './component/BookList'
function App(){
    const [books, setBooks] = useState([]);


    const editBookById = (id,newTitle)=>{
        const updatedBooks = books.map((book) =>{
            if (book.id === id){
                return {...book, title: newTitle}
            }
            return book;
        });

        setBooks(updatedBooks);
    }

    const deleteBookById= (id) =>{
        const updatedBooks = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(updatedBooks);
    }
   
    const createBook = (title) =>{
        const updatedBook = [...books, {id:Math.round(Math.random()*9999),title}];
        setBooks(updatedBook);
    };
    return (
    <div className='app'>
        <h1>Reading list</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
        <BookCreate onCreate={createBook}/>
    </div>
    )
   
}
export default App;