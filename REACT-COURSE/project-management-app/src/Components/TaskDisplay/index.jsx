import Button from "../SharedComponents/Button";
import EnglishSpan from "../SharedComponents/EnglishSpan";
import TodoList from "./Components/ProjectsTodoList";

const TaskDisplay = ({ projectState, handleDeleteProject }) => {
	// projects: [
	//     {
	//         // Data mẫu
	//         id: "16.03.2024-taskID.0jd76t0snbmn",
	//         title: "Dự án búp măng non",
	//         description: "dành cho trẻ con",
	//         deadline: "2024-03-06",
	//     },
	//     {
	//         // Data mẫu
	//         id: "16.03.2024-taskID.0jd76t0bhn",
	//         title: "Dự án bông hồng nhỏ",
	//         description: "Dành cho người lớn",
	//         deadline: "2024-03-06",
	//     },
	//     {
	//         // Data mẫu
	//         id: "16.03.2024-taskID.2",
	//         title: "Dự án hoa thiên vỹ",
	//         description: "Dành cho người cụ già",
	//         deadline: "2024-03-06",
	//     },
	// ],

	const { selectedProjectId: currentSelectedProject, projects: projectList } =
		projectState;

	const currentProject = projectList.find(
		(project) => project.id === currentSelectedProject
	);

	console.log(projectState.projects);

	return (
		<div className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold text-stone-600 mb-2">
						{currentProject.title} <EnglishSpan>project: {currentProject.id}</EnglishSpan>
					</h1>
					<Button
						onClick={() => {
							handleDeleteProject(currentProject.id);
						}}>
						Xóa
					</Button>
				</div>
				<p>Deadline: {currentProject.deadline}</p>
				<p>Description:</p>
				{currentProject.description.split("\n").map((line) => (
					<p>{line}</p>
				))}
			</header>
			<TodoList todoList={currentProject.tasks} />
		</div>
	);
};

export default TaskDisplay;
