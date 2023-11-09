import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <nav>
          <div id="menu" className="collapse navbar-collapse">
            <ul>
              <li className="menu-item">
                <Link to="category ">iPhone</Link>
              </li>
              <li className="menu-item">
                <Link to="category ">Samsung</Link>
              </li>
              <li className="menu-item">
                <Link to="category ">HTC</Link>
              </li>
              <li className="menu-item">
                <Link to="category ">Nokia</Link>
              </li>
              <li className="menu-item">
                <Link to="category ">Sony</Link>
              </li>
              <li className="menu-item">
                <Link to="category ">Blackberry</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
