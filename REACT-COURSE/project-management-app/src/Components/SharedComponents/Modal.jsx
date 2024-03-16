import { createPortal } from "react-dom";

const Modal = ({children}) => {
    return(
        createPortal( 
        
        <dialog>
            {children}
        </dialog>
        
        
        ,document.getElementById('modal-root'))
    );
}

export default Modal;