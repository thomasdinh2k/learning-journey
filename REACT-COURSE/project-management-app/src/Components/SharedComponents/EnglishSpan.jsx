const EnglishSpan = (props) => {
    
    let className = "font-semibold text-gray-900 dark:text-white text-blue-600/25 dark:text-blue-500/25 italic text-sm tracking-wide uppercase"
    return(
        <span className={props.className || className}>{props.children}</span>
    );
}

export default EnglishSpan;