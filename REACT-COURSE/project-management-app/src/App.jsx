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
		projects: [
			{	// Data mẫu
				"id": "16.03.2024-taskID.0jd76t0sn",
				"title": "Dự án búp măng non",
				"description": "dành cho trẻ con",
				"deadline": "2024-03-06"
			},
			{	// Data mẫu
				"id": "16.03.2024-taskID.0jd76t0sn",
				"title": "Dự án bông hồng nhỏ",
				"description": "Dành cho người lớn",
				"deadline": "2024-03-06"
			}
		],
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
		content = <TaskDisplay/>
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<SideBar
				projectList = {projectState.projects} 
				handleCreateProject={handleCreateProject} />

			{/* <NoProject handleCreateProject={handleCreateProject}/> */}
			{content}

			
		</main>
	);
}

export default App;
