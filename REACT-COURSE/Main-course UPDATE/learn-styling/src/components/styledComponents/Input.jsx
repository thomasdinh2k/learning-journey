import styled from "styled-components";



export default function CombinedInput(
    { type, invalid, ...otherProps }) {
	
    // Create a base class
    let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase';
    let inputClasses = 'w-full px-3 py-2 leading-tight  border rounded shadow '
    
    // Add some classes when condition is met
    if (invalid) {
        labelClasses += ' text-red-400 fw-bolder' // Remember to put a ' space'
        inputClasses += ' bg-red-400 border-red-300'
    } else {
        labelClasses += ' text-stone-300'
    }


        return (
		<p>
			<label className={labelClasses}> {type} </label>
			<input className={inputClasses} {...otherProps} />
		</p>
	);
}
