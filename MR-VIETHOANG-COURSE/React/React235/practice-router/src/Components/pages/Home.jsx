import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div id="body">
				<h2 className="text-center">Courses</h2>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-12">
							<img className="img-fluid mb-4" src="images/slide-1.jpg" />
							<h4>
								<Link to="/article">Lorem Asu Mala</Link>
							</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Curabitur ultricies gravida nulla fermentum suscipit.
							</p>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<img className="img-fluid mb-4" src="images/slide-2.jpg" />
							<h4>
								<Link to="/article">Lorem Asu Mala</Link>
							</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Curabitur ultricies gravida nulla fermentum suscipit.
							</p>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<img className="img-fluid mb-4" src="images/slide-3.jpg" />
							<h4>
								<Link to="/article">Lorem Asu Mala</Link>
							</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Curabitur ultricies gravida nulla fermentum suscipit.
							</p>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<img className="img-fluid mb-4" src="images/slide-4.jpg" />
							<h4>
								<Link to="/article">Lorem Asu Mala</Link>
							</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Curabitur ultricies gravida nulla fermentum suscipit.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
