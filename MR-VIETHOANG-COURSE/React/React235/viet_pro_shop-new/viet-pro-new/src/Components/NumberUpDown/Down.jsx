const Down = () => {
	return (
		<>
			<div className="col-lg-3 col-md-3 col-sm-8 col-8">
				<div className="timer bg-danger" id="timer-down">
					<p>10</p>
					<button type="button" className="btn btn-dark">
						Down
					</button>
					<button type="button" className="btn btn-dark">
						Reset
					</button>
				</div>
			</div>
		</>
	);
};

export default Down;
