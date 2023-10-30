import React from "react"
import { useDispatch } from "react-redux"

const Control = (props) => {

    const dispatch = useDispatch()
    const onClickButtonGet = () => {
        dispatch({ type: "ACTION" })
    }
    const onClickButtonReset = ()=>{
        dispatch({type:"RESET"})
    }

    return (
        <>
            <button onClick={onClickButtonGet} className="btn btn-dark">Get number</button>
            <button onClick={onClickButtonReset} className="btn btn-dark">Reset</button>
        </>
    )
}

export default Control