
export default function convertTimeStamp(inputDateTimeStr) {
	// Create a new Date object from the input string
	const dateObj = new Date(inputDateTimeStr);

	// Format the date and time parts
	const year = dateObj.getFullYear();
	const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
	const day = String(dateObj.getDate()).padStart(2, "0");
	const hours = String(dateObj.getHours()).padStart(2, "0");
	const minutes = String(dateObj.getMinutes()).padStart(2, "0");
	const seconds = String(dateObj.getSeconds()).padStart(2, "0");

	// Combine the parts into the desired format
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}