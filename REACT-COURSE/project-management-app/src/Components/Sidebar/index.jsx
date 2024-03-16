import AddProject from "../SharedComponents/AddProjectBtn";
import ProjectItems from "./ProjectItems";

const SideBar = ({handleCreateProject}) => {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Dự án hiện có</h2>
            <AddProject onClick={handleCreateProject}>+ Thêm dự án mới</AddProject>
            
            <ProjectItems/>


        </aside>
	);
};

export default SideBar;
