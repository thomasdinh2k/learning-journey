const BettingFigure = ({ figure, figureIndex }) => {
	return (
		<>
			<div className="figure__item" data-id={figureIndex}>
				<div className="figure__item--group">
					<img src={`img/${figure}.png`} />
					<label>Đặt cược: 0</label>
				</div>
			</div>
		</>
	);
};

export default BettingFigure;
