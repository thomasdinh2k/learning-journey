import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { minDecrement, secondDecrement, setAmountMins, setAmountSec } from "../../redux/PodoReducer";

const Clock = ( {isPlaying, setIsPlaying} ) => {
	const {minute: time_minute, second:time_second, } = useSelector( (store) => store )

	const dispatch = useDispatch();

	
	
	
	useEffect(() => {
		const intervalID = setInterval(() => {
			if (isPlaying) {
				
                if (time_minute > 0) {
                    if(time_second > 0) {
                        dispatch(secondDecrement())
                    } else {
                        dispatch(setAmountSec(59))
                        dispatch(minDecrement())
                    }
                } else if (time_minute == 0) {
                    if (time_second > 0) {
                        dispatch({type: "second_decrement"})
                    } else {
                        setIsPlaying(false);
                    }
                }
			}
		}, 1000);

		return () => {
			clearInterval(intervalID);
		};
	}, [isPlaying, setIsPlaying, time_minute, time_second, dispatch]);

	return (
		<main>
			<div className="pomodoro">
				<h1 className="pomodoro__time">
					{time_minute}:{time_second <10 ? `0${time_second}` : time_second}
				</h1>
			</div>
		</main>
	);
};

export default Clock;
