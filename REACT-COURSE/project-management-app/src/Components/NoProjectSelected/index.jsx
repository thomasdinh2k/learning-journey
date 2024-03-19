import noProjectImage from "../../assets/no-projects.png";
import Button from "../SharedComponents/Button";

const NoProject = ( {handleCreateProject} ) => {
	return (
		<div className="mt-24 text-center w-2/3">
			<img
				src={noProjectImage}
				alt="no-project-indicator"
				className="w-16 h-16 object-contain mx-auto"
			/>
			<h2 className="text-xl font-bold text-stone-500 my-4">
				Không có dự án đã chọn
			</h2>
			<p className="text-stone-400 mb-4">Chọn dự án hoặc tạo dự án mới</p>
			<p>
				<Button onClick={handleCreateProject}>Tạo dự án đầu tiên</Button>
			</p>
		</div>
	);
};

export default NoProject;
