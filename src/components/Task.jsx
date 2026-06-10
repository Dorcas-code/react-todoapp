import "/src/App.css";

function Task({ task, onToggle, onDelete }) {
  return (
    <div
      className={`  flex items-center gap-2 p-4  mb-3 rounded-xl border transition-all ${
        task.completed
          ? "bg-white-900/30 border-zinc-800/50"
          : "bg-white-900/50 border-zinc-800"
      }`}
    >
      <button
        onClick={() => onToggle(task.id)}
        className={`w-8 h-8 rounded-md border-2 flex items-center justify-center transition-all ${
          task.completed
            ? "bg-purple-500 border-purple-500"
            : "border-zinc-600 hover:border-cyan-500"
        }`}
      >
        {task.completed && (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 ${task.completed ? "text-zinc-500 line-through" : "text-zinc"}`}
      >
        {task.text}
      </span>

      <button onClick={() => onDelete(task.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}
export default Task;
