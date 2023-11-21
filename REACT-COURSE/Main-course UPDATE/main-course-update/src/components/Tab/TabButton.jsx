const TabButton = ({ children, setActiveTab, activeTab }) => {
  return (
    <div>
      <li>
        <button
          className={ activeTab === children.toLowerCase() ? "active" : ""}
          
          onClick={() => {
            
            setActiveTab(children.toLowerCase());
            console.log(`activeTab is now set to ${children.toLowerCase()}`);
          }}
        >
          {children}
        </button>
      </li>
    </div>
  );
};

export default TabButton;
