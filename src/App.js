import BookList from './components/book/BookList.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Book from './components/book/Book.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Switch>
        {/* <h1>Library Catalog</h1> */}
        <Route exact path="/books" component={Book} />
        <Route exact path="/booklist" component={BookList} />
        <BookList />
      </Switch>
    </main>
  );
}

export default App;
