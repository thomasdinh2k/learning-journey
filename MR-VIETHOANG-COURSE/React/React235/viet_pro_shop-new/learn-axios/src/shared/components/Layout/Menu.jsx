import { Link } from "react-router-dom";

const Menu = () => {
	
    
    
    return (
		<div id="menu">
			<ul>
				<Link to="/">
					<a href="#">view users</a>
				</Link>
				<Link to="/posts">
					<a href="#">view posts</a>
				</Link>
			</ul>
		</div>
	);
};

export default Menu;
