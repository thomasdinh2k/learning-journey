const Tabs = ({ children, buttons, tabContent }) => {
    return(
        <>
            <menu>
                {buttons}
            </menu>

            {tabContent}
        </>
    );
}

export default Tabs;