import './App.css';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <ShowTask taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}

export default App;
