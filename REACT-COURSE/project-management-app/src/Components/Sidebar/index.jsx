import Button from "../SharedComponents/Button";
import ProjectItems from "./ProjectItems";

const SideBar = ({handleCreateProject, projectList, setProjectState, currentProjectId}) => {
	

    return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Dự án hiện có</h2>
            <Button onClick={handleCreateProject}>+ Thêm dự án mới</Button>
            
            <ul className="mt-8">
                {projectList.map( project => (
                    
                    <ProjectItems
                        title={project.title}
                        id={project.id}
                        setProjectState={setProjectState}
                        currentProjectId={currentProjectId}
                    />
    
                ))}
            </ul>
                

        </aside>
	);
};

export default SideBar;
