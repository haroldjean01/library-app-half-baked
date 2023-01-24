import BookList from './components/book/BookList.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Book from './components/book/Book.js';
import BookDetail from './components/book/BookDetail.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Switch>
        {/* <h1>Library Catalog</h1> */}
        <Route exact path="/books" component={Book} />
        <Route exact path="/book-list" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
        <BookList />
      </Switch>
    </main>
  );
}

export default App;
