import { useState } from "react";
import Button from "../SharedComponents/Button";
import EnglishSpan from "../SharedComponents/EnglishSpan";
import TodoList from "./Components/Todos/TodoList";

const TaskDisplay = ({
	projectState,
	handleDeleteProject,
	handleCreateTodo,
	handleDeleteTodo,
}) => {
	const { selectedProjectId: currentSelectedProject, projects: projectList } =
		projectState;

	const currentProject = projectList.find(
		(project) => project.id === currentSelectedProject
	);

	console.log(currentProject);

	return (
		<div className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold text-stone-600 mb-2">
						{currentProject.title}{" "}
						<EnglishSpan>project: {currentProject.id}</EnglishSpan>
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
					<p key={line}>{line}</p>
				))}
			</header>
			<TodoList
				todoList={currentProject.tasks}
				handleCreateTodo={handleCreateTodo}
				selectedProjectId={currentSelectedProject}
				handleDeleteTodo={handleDeleteTodo}
			/>
		</div>
	);
};

export default TaskDisplay;
