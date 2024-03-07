import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<div className="row">
			<div className="col-lg-12 col-md-12 col-sm-12">
				<nav>
					<div id="menu" className="collapse navbar-collapse">
						<ul>
							<Link to="/Category" className="menu-item">
								<a href="#">iPhone</a>
							</Link>
							<Link to="/Category" className="menu-item">
								<a href="#">Samsung</a>
							</Link>
							<Link to="/Category" className="menu-item">
								<a href="#">HTC</a>
							</Link>
							<Link to="/Category" className="menu-item">
								<a href="#">Nokia</a>
							</Link>
							<Link to="/Category" className="menu-item">
								<a href="#">Sony</a>
							</Link>
							<Link to="/Category" className="menu-item">
								<a href="#">Blackberry</a>
							</Link>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Menu;
