import AddTask from "./AddTask.jsx"
import TaskList from "./TaskList.jsx"
import { useImmerReducer } from "use-immer"

const reducer = (draft, action) => {
	switch (action.type) {
		case "ADD_TASK":
			draft.push({
				id: action.payload.id,
				text: action.payload.taskName,
				done: false,
			})
			break;
		case "CHANGE_TASK":
			const index = draft.findIndex( task => task.id === action.payload.task.id);
			draft[index] = action.payload.task;
			break;

		case "DELETE_TASK":
			return draft.filter( task => task.id !== action.payload.id)
		default:
			break
	}
}

export default function TaskApp() {
	const [taskList, dispatch] = useImmerReducer(
		reducer,
		initialTasks
	)

	function handleAddTask(text) {
		dispatch({
			type: "ADD_TASK",
			payload: { taskName: text, id: nextId++ },
		})
	}

	function handleChangeTask(task) {
		
		console.log("Changed task received", task);
		
		dispatch({
			type: "CHANGE_TASK",
			payload: { task: task },
		})
	}

	function handleDeleteTask(id) {
		dispatch({
			type: "DELETE_TASK",
			payload: { id },
		})
	}
	return (
		<>
			<h1>Prague itinerary</h1>
			<AddTask onAddTask={handleAddTask} />
			<TaskList
				tasks={taskList}
				onChangeTask={handleChangeTask}
				onDeleteTask={handleDeleteTask}
			/>
		</>
	)
}

let nextId = 3
const initialTasks = [
	{ id: 0, text: "Visit Kafka Museum", done: true },
	{ id: 1, text: "Watch a puppet show", done: false },
	{ id: 2, text: "Lennon Wall pic", done: false },
]
