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
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
          task.completed
            ? "bg-cyan-500 border-cyan-500"
            : "border-zinc-600 hover:border-cyan-500"
        }`}
      >
        {task.completed && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
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

      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 p-1 text-zinc-500 hover:text-red-400 transition-all"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
export default Task;
