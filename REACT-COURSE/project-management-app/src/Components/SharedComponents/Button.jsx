const Button = ({children, ...props}) => {
    
    let cssClasses = "px-4 py-3 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"

    return(
        <button className={props.className || cssClasses}
        {...props}
        
        >{children}</button>
    );
}

export default Button;