const Up = () => {
	return (
		<>
			<div className="col-lg-3 col-md-3 col-sm-8 col-8">
				<div className="timer bg-info" id="timer-up">
					<p>0</p>
					<button type="button" className="btn btn-dark">
						Up
					</button>
					<button type="button" className="btn btn-dark">
						Reset
					</button>
				</div>
			</div>
		</>
	);
};

export default Up;
