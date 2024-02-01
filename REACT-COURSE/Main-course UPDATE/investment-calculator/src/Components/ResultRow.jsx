import { formatter } from "../util/investment";

const ResultRow = ({
	year,
	interest,
	valueEndOfYear,
	annualInvestment,
	initialInvestment,
    total_interest,
    invested_capital

}) => {
	return (
		<tr>
			{/* <th>{year}</th>
			<th>{formatter.format(annualInvestment)}</th>
			<th>{interest.toFixed(2)}</th>
			<th>{formatter.format(valueEndOfYear)}</th>
			<th></th> */}


			<th>{year}</th>
			<th>{formatter.format(valueEndOfYear)}</th>
			<th>{formatter.format(interest)}</th>
			<th>{formatter.format(total_interest)}</th>
			<th>{formatter.format(invested_capital)}</th>
		</tr>
	);
};

export default ResultRow;
