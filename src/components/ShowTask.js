import React from 'react';

function ShowTask(props) {
  function handleUpdate(id) {
    const selectedTask = props.taskList.find((task) => task.id === id);
    props.setTask(selectedTask);
    console.log(selectedTask);
  }

  function handleDelete(id) {
    const updateTaskList = props.taskList.filter((task) => task.id !== id);
    props.setTaskList(updateTaskList);
  }
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{props.taskList.length}</span>
        </div>
        <button className="clearAll" onClick={() => props.setTaskList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {props.taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              onClick={() => handleUpdate(task.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(task.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShowTask;
