import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Number = () => {
	
    const number = useSelector( (store) => {
        console.log(store);
        return store.num
    })

    const dispatch = useDispatch();

    const handleGetNumber = (reset) => {
        if (reset == "reset") {
            dispatch({
                type: "GET_RESET"
            })
        } else {
            dispatch({
                type: "GET_NUMBER"
            })
        }
    }

    return (
		<>
			<h3 className="random-number">{number}</h3>
			<div>
				<button onClick={handleGetNumber} className="btn btn-dark">
					Lấy số bất kỳ
				</button>
				<button
					className="btn btn-dark"
                    onClick={() => {handleGetNumber("reset")}}
				>
					Hoàn về 0
				</button>
			</div>
		</>
	);
};

export default Number;