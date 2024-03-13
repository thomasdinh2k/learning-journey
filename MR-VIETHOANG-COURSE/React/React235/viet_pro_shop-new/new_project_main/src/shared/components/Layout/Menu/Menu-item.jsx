import { Link } from "react-router-dom";

const MenuItem = ({title, link}) => {
	return (
		<div>
			<Link to={link} className="menu-item">
				<a href={link}>{title}</a>
			</Link>
		</div>
	);
};

export default MenuItem;
