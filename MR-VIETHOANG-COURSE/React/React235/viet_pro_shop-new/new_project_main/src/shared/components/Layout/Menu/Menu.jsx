
import { Link } from "react-router-dom";
import MenuItem from "./Menu-item";
import { useEffect, useState } from "react";
import { getCategories } from "../../../../services/Api";

const Menu = () => {

	const [categoryList, setCategoryList] = useState([]);

	useEffect( () => {
		getCategories().then( res => setCategoryList(res.data.data.docs))
	}, [])

	return (
		<div className="row">
			<div className="col-lg-12 col-md-12 col-sm-12">
				<nav>
					<div id="menu" className="collapse navbar-collapse">
						<ul>
							{categoryList.map( (category) => {
								return (
									<MenuItem
									key={category._id}
									title={category.name}
									link={`/categories/${(category.name).toLowerCase()}/${category._id}`}
								/>
								)
							})}
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Menu;
