import { useState } from "react";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [errorMessage, seterrorMessage] = useState();
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React hooks", completed: true },
    { id: 2, text: "Build a todo app", completed: true },
    { id: 3, text: "Add Tailwind styling", completed: false },
    { id: 4, text: "Deploy to production", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      return;
    }
    if (newTask.trim() === 0) {
      seterrorMessage("Input cannot be empty");
      return;
    }
    if (newTask.trim().length < 3) {
      seterrorMessage("Input length cannot be smaller than 3!");
      return;
    }
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask.trim(), completed: false },
    ]);
    setNewTask("");
    seterrorMessage("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <section id="center">
        <header>
          <h1>My Todo List</h1>
        </header>
      </section>
      <main>
        <section className="todo-input-section ">
          <form onSubmit={addTask} id="todo-form" className="todo-form">
            <div className="input-group">
              <input
                type="text"
                id={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new todo..."
                required
                aria-label="New todo item"
                className="todo-input w-full"
              />
              <button type="submit" className="add-btn">
                Add Todo
              </button>
            </div>
            <div id="error-message" className="error-message" role="alert">
              {errorMessage}
            </div>
          </form>
        </section>

        <section className="todo-list-section ">
          {tasks.length === 0 ? (
            <p className="text-center text-zinc-500 py-8">
              No tasks yet. Add one above!
            </p>
          ) : (
            tasks.map((task) => (
              <Task
                style="margin-bottom=20px"
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </section>
      </main>
    </>
  );
}

export default App;
