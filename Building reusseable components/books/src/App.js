import {useState} from 'react';
import BookCreate from './component/bookCreate';
function App(){
    const [books, setBooks] = useState([]);
   
    const createBook = (title) =>{
        const updatedBook = [...books, {id:123,title}];
        setBooks(updatedBook);
    };
    return (
    <div>
        {books.length}
        <BookCreate onCreate={createBook}/>
    </div>
    )
   
}
export default App;