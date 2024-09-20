import './App.css';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <ShowTask />
    </div>
  );
}

export default App;
