import { event } from "jquery";
import { useState } from "react";

const Title = ({ loadState }) => {
	const [titleContent, updateTitleContent] = useState(
		"What is The Actual Fuck?"
	);
	const [isEditing, setIsEditing] = useState(false);
    

    function handleNameUpdate(event) {
        let content = event.target.value;
        
        if (content === "") {
            updateTitleContent("What is The Actual Fuck?");
        }
        
        setIsEditing(false);
    }


	return (
		<>
			{!isEditing && (
				<h2
					onDoubleClick={() => {
						setIsEditing(true);
					}}
				>
					{!loadState ? titleContent : "Loading..."}
				</h2>
			)}

			{isEditing && (
				<input
					type="text"
					placeholder={titleContent}
					
                    // TODO Fix bug xóa trắng
                    onBlur={(event) => {
                        handleNameUpdate(event)
                    }}
					onKeyDown={(event) => {
						if (event.keyCode === 13) {
							handleNameUpdate()
						}
					}}
                    
					autoFocus
				></input>
			)}
		</>
	);
};

export default Title;
