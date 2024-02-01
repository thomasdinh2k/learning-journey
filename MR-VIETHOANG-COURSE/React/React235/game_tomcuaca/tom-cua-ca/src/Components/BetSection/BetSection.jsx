import BettingFigure from "./BettingFigure";

const BetSection = () => {
	const betFigure = ["deer", "calabash", "chicken", "crab", "fish", "shrimp"];

	return (
		<section className="figure">
			{betFigure.map((figure, figureIndex) => (
				<BettingFigure key={figure} figure={figure} figureIndex={figureIndex} />
			))}
		</section>
	);
};

export default BetSection;
