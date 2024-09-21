import React from 'react';

function AddTask(props) {
  function handleSubmit(event) {
    event.preventDefault();

    const date = new Date();
    const newtask = {
      id: date.getTime(),
      name: event.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    props.setTaskList([...props.taskList, newtask]);
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AddTask;
