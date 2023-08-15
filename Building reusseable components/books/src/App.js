import {useState} from 'react';
import BookCreate from './component/bookCreate';
function App(){

    const [books, setBooks] = useState([])//To add adition book to the array
    const createBook = (title)=>{ //event handler
        console.log('Need to add book with:', title);
    }
    return (
        <div>
            <bookCreate onCreate={createBook}/>
        </div>
    );
}
export default App;