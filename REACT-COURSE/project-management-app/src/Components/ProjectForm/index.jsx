import { useRef, useState } from "react";
import Input from "./Components/InputField";
import generateId from "../../utils/generateId";
import Modal from "../SharedComponents/Modal";

const ProjectForm = ({ setProjectState }) => {
	const dialogRef = useRef();
	const enteredTitle = useRef("");
	const enteredDesc = useRef("");
	const enteredDeadline = useRef(null);

	const onSave = () => {
		const dataID = generateId();

		var data = {
			id: dataID,
			title: enteredTitle.current.value,
			description: enteredDesc.current.value,
			deadline: enteredDeadline.current.value,
			tasks: []
		};

		// Validate User Input
		if (
			data.title.trim() === "" ||
			data.description.trim() === "" ||
			data.deadline.trim() === ""
		) {
			dialogRef.current.open();
			return;
		}

		setProjectState((prevState) => ({
			...prevState,
			selectedProjectId: dataID,
			projects: [...prevState.projects, data],
		}));
	};

	const onCancel = () => {
		setProjectState( (prevState) => (
			{...prevState, selectedProjectId: undefined}
		) )
	}

	return (
		<>
			<Modal ref={dialogRef} buttonLabel="Okay">
				<h2 className="text-xl font-bold text-stone-700 my-4">
					Dữ liệu nhập vào thiếu, hoặc không hợp lệ
				</h2>
				<p className="text-stone-600 mb-4">
					Oops! Bạn nên check lại dữ liệu cần nhập
				</p>
				<p className="text-stone-600 mb-4">
					Chắc chắn rằng bạn không để xót trường dữ liệu nào
				</p>
			</Modal>
			<div className="w-[35rem] mt-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
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
					<Input label="Tiêu đề" ref={enteredTitle} placeholder="Dự án..." />
					<Input label="Chú thích" ref={enteredDesc} textarea />
					<Input label="Deadline" type="date"  ref={enteredDeadline} />
				</div>
			</div>
		</>
	);
};

export default ProjectForm;
