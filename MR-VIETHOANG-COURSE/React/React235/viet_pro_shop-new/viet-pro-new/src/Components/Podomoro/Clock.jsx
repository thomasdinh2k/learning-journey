import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Clock = () => {
	const dispatch = useDispatch();
    
    // const timeInSecond = useSelector (
    //     (store) => {
    //         return store.podoReducer.time_in_second
    //     }
    // )
    
    const { time_in_second, is_running } = useSelector(
        (store) => {
            return store.podoReducer
        }
    )

    useEffect(() => {
        let timer;
        if (is_running && time_in_second > 0) {
            timer = setInterval(() => {
                dispatch({ type: "DECREMENT_TIMER" });
            }, 1000);
        } else if (time_in_second === 0) {
            dispatch({ type: "GET_STOP_CLOCK" });
        }

        return () => clearInterval(timer);
    }, [is_running, time_in_second, dispatch]);


    return (
		<main>
			<div className="pomodoro">
				<h1 className="pomodoro__time"> {time_in_second} </h1>
			</div>
		</main>
	);
};

export default Clock;
