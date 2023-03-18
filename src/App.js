
import './App.css';
import MovieList from './components/MovieList';
import GenreFilter from './components/GenreFilter';

function App() {
  return (
    <div className="App">
      <div> <h2> Top 15 Movies of all time </h2></div>
      <GenreFilter/>
      <MovieList/>
    </div>
  );
}

export default App;
