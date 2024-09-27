import React from 'react';

function AddTask(props) {
  function handleSubmit(event) {
    event.preventDefault();

    if (props.task.id) {
      const date = new Date();
      const updateTask = props.taskList.map((task) =>
        task.id === props.task.id
          ? {
              id: task.id,
              name: props.task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : task
      );
      props.setTaskList(updateTask);
      props.setTask({});
    } else {
      const date = new Date();
      const newtask = {
        id: date.getTime(),
        name: event.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      props.setTaskList([...props.taskList, newtask]);
      props.setTask({});
    }
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
          value={props.task.name || ''}
          onChange={(e) =>
            props.setTask({ ...props.task, name: e.target.value })
          }
        />
        <button type="submit">{props.task.id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
}

export default AddTask;
