
const Number = ( { number, handleGetNumber }) => {
	

	return (
		<>
			<h3 className="random-number">{number}</h3>
			<div>
				<button className="btn btn-dark" onClick={handleGetNumber}>
					Lấy số bất kỳ
				</button>
				<button className="btn btn-dark" onClick={() => handleGetNumber("Reset")}>Hoàn về 0</button>
			</div>
		</>
	);
};

export default Number;
