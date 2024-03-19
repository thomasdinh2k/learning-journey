// src/utils/generateId.js
const generateId = ( optional_param ) => {

    const now = new Date();
	const day = String(now.getDate()).padStart(2, "0");
	const month = String(now.getMonth() + 1).padStart(2, "0"); // January is 0!
	const year = now.getFullYear();
	const randomPart = Math.random().toString(36).substr(2, 9); // Generates a random string

		return `${optional_param ?? ''}${day}.${month}.${year}-taskID.${randomPart}`;
};

export default generateId;
