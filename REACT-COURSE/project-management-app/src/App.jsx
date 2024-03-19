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
			  id: "16.03.2024-taskID.0jd76t0snbmn",
			  title: "Dự án búp măng non",
			  description: "",
			  deadline: "2024-03-06",
			  tasks: [
				{ id: "task1", title: "Tìm hiểu đối tượng", done: true },
				{ id: "task2", title: "Lập kế hoạch chi tiết", done: false },
				{ id: "task3", title: "Thuê giáo viên", done: false },
				{ id: "task4", title: "Chuẩn bị tài liệu", done: true },
				{ id: "task5", title: "Quảng cáo dự án", done: false }
			  ]
			},
			{
			  id: "17.03.2024-taskID.1gh56u9klpqr",
			  title: "Dự án xây dựng mới",
			  description: "dự án xây dựng khu vui chơi\n\nPhải hoàn thành trước hạn",
			  deadline: "2024-04-01",
			  tasks: [
				{ id: "task1", title: "Khảo sát mặt bằng", done: false },
				{ id: "task2", title: "Thiết kế sơ bộ", done: true },
				{ id: "task3", title: "Phê duyệt ngân sách", done: false },
				{ id: "task4", title: "Chọn nhà thầu", done: false },
				{ id: "task5", title: "Giám sát thi công", done: false }
			  ]
			},
			{
			  id: "18.03.2024-taskID.2ij78v9wmnxz",
			  title: "Dự án phần mềm",
			  description: "phát triển ứng dụng di động\n\nỨng dụng cho iOS và Android",
			  deadline: "2024-05-15",
			  tasks: [
				{ id: "task1", title: "Nghiên cứu thị trường", done: true },
				{ id: "task2", title: "Thiết kế giao diện người dùng", done: true },
				{ id: "task3", title: "Lập trình giao diện", done: false },
				{ id: "task4", title: "Phát triển API", done: false },
				{ id: "task5", title: "Kiểm thử tích hợp", done: false }
			  ]
			},
			{
			  id: "19.03.2024-taskID.3kl89w0zmxnc",
			  title: "Dự án nghiên cứu",
			  description: "nghiên cứu khoa học\n\nLiên quan đến biến đổi khí hậu",
			  deadline: "2024-06-20",
			  tasks: [
				{ id: "task1", title: "Thu thập dữ liệu hiện trạng", done: false },
				{ id: "task2", title: "Phân tích mẫu", done: true },
				{ id: "task3", title: "Soạn thảo báo cáo sơ bộ", done: false },
				{ id: "task4", title: "Trình bày kết quả tại hội nghị", done: false },
				{ id: "task5", title: "Xuất bản kết quả", done: false }
			  ]
			},
			{
			  id: "19.03.2024-taskID.3kl89w0zmxnc2",
			  title: "Dự án ngồi không",
			  description: "Không làm gì cả",
			  deadline: "2024-06-20",
			  tasks: [
				
			  ]
			}
		  ]
		  
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

			{content}
		</main>
	);
}

export default App;
