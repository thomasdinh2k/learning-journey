import { useState } from "react";
import NoProject from "./Components/NoProjectSelected";
import ProjectForm from "./Components/ProjectForm";
import SideBar from "./Components/Sidebar";
import TaskDisplay from "./Components/TaskDisplay";
import "./index.css";

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [
			{
				// Data mẫu
				id: "16.03.2024-taskID.0jd76t0snbmn",
				title: "Dự án búp măng non",
				description: "dành cho trẻ con\n\nTrẻ con\nnhé",
				deadline: "2024-03-06",
			},
			{
				// Data mẫu
				id: "16.03.2024-taskID.0jd76t0bhn",
				title: "Dự án bông hồng nhỏ",
				description: "Dành cho người lớn",
				deadline: "2024-03-06",
			},
			{
				// Data mẫu
				id: "16.03.2024-taskID.2",
				title: "Dự án hoa thiên vỹ",
				description: "Dành cho người cụ già",
				deadline: "2024-03-06",
			},
		],
	});

	const handleCreateProject = () => {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	};

	const handleDeleteProject = (projectId) => {
		console.log("Deleting", projectId);

		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects].filter( project => project.id != prevState.selectedProjectId)
			};
		});
	};

	let content;

	if (projectState.selectedProjectId === null) {
		content = <ProjectForm setProjectState={setProjectState} />;
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProject handleCreateProject={handleCreateProject} />;
	} else {
		content = (
			<TaskDisplay
				projectState={projectState}
				handleDeleteProject={handleDeleteProject}
			/>
		);
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<SideBar
				currentProjectId={projectState.selectedProjectId}
				setProjectState={setProjectState}
				projectList={projectState.projects}
				handleCreateProject={handleCreateProject}
			/>

			{/* <NoProject handleCreateProject={handleCreateProject}/> */}
			{content}
		</main>
	);
}

export default App;
