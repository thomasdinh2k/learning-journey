const Concepts = (props) => {
	return (
		// <li className="border-active">
		<li className={props.activeTab === props.title.toLowerCase() ? "border-active" : ""}>
			<img src={props.img} alt={props.description} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
};

export default Concepts;
