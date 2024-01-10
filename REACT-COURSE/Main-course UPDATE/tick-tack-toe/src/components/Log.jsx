const Log = ({ updatedTurns }) => {
	// console.log(updatedTurns);
	// console.log(updatedTurns[0].player);
	// console.log(updatedTurns[0].square);

	return (
		<>
			<h3>Turn History</h3>
			{updatedTurns.map((turn, turnIndex) => (
				<div key={turnIndex}>
					<style
						type="text/css"
						dangerouslySetInnerHTML={{
							__html:
								"\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-ffkd{background-color:#f8a102;border-color:#000000;text-align:left;vertical-align:top}\n.tg .tg-r281{background-color:#f8a102;border-color:#000000;text-align:center;vertical-align:top}\n.tg .tg-73oq{border-color:#000000;text-align:left;vertical-align:top}\n",
						}}
					/>
					<table className="tg">
						<thead>
							<tr>
								<th className="tg-r281" rowSpan={2}>
									Player
								</th>
								<th className="tg-r281" colSpan={2}>
									Move
								</th>
							</tr>
							<tr>
								<th className="tg-ffkd">Row</th>
								<th className="tg-ffkd">Column</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="tg-73oq">{turn.player}</td>
								<td className="tg-73oq">{turn.square.row + 1}</td>
								<td className="tg-73oq">{turn.square.col + 1}</td>
							</tr>
						</tbody>
					</table>
				</div>
			))}
		</>
	);
};

export default Log;
