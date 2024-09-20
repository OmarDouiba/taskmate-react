import React from 'react';

function AddTask() {
  return (
    <section className="addTask">
      <form>
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
