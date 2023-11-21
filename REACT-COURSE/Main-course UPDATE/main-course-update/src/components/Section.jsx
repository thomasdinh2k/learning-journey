const Section = ({ children, ...restProps }) => {
    return(
        <section id={restProps.id}>
        {/* <section id="examples"> */}
            <h2>{restProps.title}</h2>
            {children}
        </section>
    );
}

export default Section;