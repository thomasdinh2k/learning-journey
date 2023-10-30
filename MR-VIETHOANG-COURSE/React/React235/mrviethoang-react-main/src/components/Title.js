import React from "react";

function Title({ sttTitle, txtTitle, setSttTitle, updateSttTitle }) {
  
  const txtTitle = () => {
    return <h4 onDoubleClick={updateSttTitle}>{title}</h4>
  }
  
  const frmTitle = () => {
    return (
      <input id="txt" onBlur={setSttTitle} type="text" value={txtTitle} />
    );
  };
  const showTitle = () => {
    if (sttTitle === true) {
      return txtTitle();
    } else {
      return frmTitle();
    }
  };

  React.useEffect(() => {
    if (!sttTitle) {
      document.getElementById("txt").focus();
    }
  }, [sttTitle]);
  return <>{showTitle()}</>;
}

export default Title;
