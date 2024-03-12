import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Clock = () => {
	const {time_minute, time_second, is_playing} = useSelector( (store) => store )

	const dispatch = useDispatch();

	useEffect(() => {
		const intervalID = setInterval(() => {
			if (is_playing) {
				
                if (time_minute > 0) {
                    if(time_second > 0) {
                        dispatch({type: "second_decrement"})
                    } else {
                        dispatch({type: "reset_second"})
                        dispatch({type: "minute_decrement"})
                    }
                } else if (time_minute == 0) {
                    if (time_second > 0) {
                        dispatch({type: "second_decrement"})
                    } else {
                        dispatch({type: "Stop"})
                    }
                }
			}
		}, 1000);

		return () => {
			clearInterval(intervalID);
		};
	}, [is_playing, time_minute, time_second, dispatch]);

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
