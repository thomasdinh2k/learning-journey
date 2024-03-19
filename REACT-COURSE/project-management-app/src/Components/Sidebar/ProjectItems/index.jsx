const ProjectItems = ({ title, setProjectState, id, currentProjectId }) => {
	const onSelectProject = (projectId) => {
		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: projectId,
		}));
	};

	let cssClasses = `w-full text-left px-2 py-1 rounded-sm my-1 `;

	if (currentProjectId == id) {
		cssClasses += "text-amber-400  bg-stone-700";
	} else {
		cssClasses += `hover:text-stone-200 hover:bg-stone-700`;
	}

	return (
		<li>
			<button onClick={() => onSelectProject(id)} className={cssClasses}>
				{title}
			</button>
		</li>
	);
};

export default ProjectItems;
