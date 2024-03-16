import { useState } from "react";
import NoProject from "./Components/NoProjectSelected";
import ProjectForm from "./Components/ProjectForm";
import SideBar from "./Components/Sidebar";
import TaskDisplay from "./Components/TaskDisplay";
import "./index.css";
import Input from "./Components/ProjectForm/Components/InputField";

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	console.log("Current projectState", projectState);

	function handleCreateProject() {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	let content;

	if (projectState.selectedProjectId === null) {
		content = 
		<ProjectForm 
			setProjectState={setProjectState}/>;
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProject handleCreateProject={handleCreateProject} />;
	} else {
		//
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<SideBar handleCreateProject={handleCreateProject} />

			{/* <NoProject handleCreateProject={handleCreateProject}/> */}
			{content}

			<TaskDisplay />
		</main>
	);
}

export default App;
