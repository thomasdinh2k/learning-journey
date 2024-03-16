import { useRef, useState } from "react";
import Input from "./Components/InputField";
import generateId from "../../utils/generateId";

const ProjectForm = ( {setProjectState} ) => {
	// const [inputData, setInputData] = useState({
	// 	title: "",
	// 	description: "",
	// 	deadline: "",
	// });

	const enteredTitle = useRef("");
	const enteredDesc = useRef("");
	const enteredDeadline = useRef(null);

	const onSave = () => {
		
		const dataID = generateId();
		
		var data = {
			id: dataID,
			title: enteredTitle.current.value,
			description: enteredDesc.current.value,
			deadline: enteredDeadline.current.value
		}

		setProjectState( prevState => (
			{...prevState, 
				projects: [...prevState.projects, data]
			}
		))
	}

	return (
		<div className="w-[35rem] mt-16">
			<menu className="flex items-center justify-end gap-4 my-4">
				<li>
					<button className="text-stone-800 hover:text-stone-950">
						Cancel
					</button>
				</li>
				<li>
					<button 
						onClick={onSave}
						className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
						Save
					</button>
				</li>
			</menu>
			<div>
				<Input
					label="Tiêu đề"
					ref={enteredTitle}
					
				/>
				<Input 
					label="Chú thích" 
					ref={enteredDesc}
					textarea />
				<Input 
					label="Deadline"
					type="date"
					ref={enteredDeadline}
					/>
			</div>
		</div>
	);
};

export default ProjectForm;
