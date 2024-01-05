import FeatureProduct from "./Body/FeatureProduct";
import LastestProduct from "./Body/LatestProduct";
import NavBar from "./Body/NavBar";
import SideBar from "./Body/SideBar";
import Slider from "./Body/Slider";

const Body = () => {
	return (
		<div id="body">
			<div className="container">
				<NavBar />
				<div className="row">
					<div id="main" className="col-lg-8 col-md-12 col-sm-12">
						<Slider />
						<FeatureProduct />
						<LastestProduct />
					</div>
					<SideBar />
				</div>
			</div>
		</div>
	);
};

export default Body;
