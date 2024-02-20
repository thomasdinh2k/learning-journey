/* eslint-disable no-unused-vars */
import logo from "../assets/logo.png";
import headerStyle from "../header.module.css";

export default function Header() {
	return (
		<header>
			<img src={logo} alt="A canvas" />
			<h1>ReactArt</h1>
			<p className={headerStyle.paragraph}>
				A community of artists and art-lovers.
			</p>
		</header>
	);
}

// This is a comment
// TODO This is a TODO comment
