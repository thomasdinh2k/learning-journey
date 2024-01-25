// Sử dụng Store đã tạo
import store from "../../redux/store";
import Number from "./Number";
import { Provider } from "react-redux";

const RandomNumber = () => {

	return (
		

		<Provider store={store}>
		
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 text-center">
					<div id="main" className="random-number">
						<Number/>
					</div>
				</div>
			</div>
		</div>

		</Provider>
	);
};

export default RandomNumber;
