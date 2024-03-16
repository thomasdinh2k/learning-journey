import AddProject from "../SharedComponents/AddProjectBtn";
import ProjectItems from "./ProjectItems";

const SideBar = ({handleCreateProject, projectList}) => {
	
    console.log("Test Prj", projectList);
    
    return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Dự án hiện có</h2>
            <AddProject onClick={handleCreateProject}>+ Thêm dự án mới</AddProject>
            
            <ul className="mt-8">
                {projectList.map( project => (
                    
                    <ProjectItems
                        title={project.title}
                    />
    
                ))}
            </ul>
                

        </aside>
	);
};

export default SideBar;
