const EnglishSpan = (props) => {
    
    let className = "font-semibold italic text-sm tracking-wide uppercase text-blue-600/50 dark:text-blue-500/50"
    return(
        <span className={props.className || className}>{props.children}</span>
    );
}

export default EnglishSpan;