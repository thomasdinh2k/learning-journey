const Tabs = ({ children, buttons, tabContent, buttonsWrapper='menu' }) => {
    const ButtonWrapper = buttonsWrapper;
    return(
        <>
            <ButtonWrapper>
                {buttons}
            </ButtonWrapper>

            {tabContent}
        </>
    );
}

export default Tabs;