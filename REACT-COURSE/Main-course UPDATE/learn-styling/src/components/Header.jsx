/* eslint-disable no-unused-vars */
import logo from "../assets/logo.png";
// import headerStyle from "../header.module.css";

// Define styled component


export default function Header() {
	return (
		<header className="flex flex-col items-center mt-8 mb-16">
			<img src={logo} alt="A canvas" className="mb-8 md:mb-16 w-44 h-44 object-contain"/>
			<h1 className="pb-2 md:text-4xl text-xl font-semibold tracking-wider text-center uppercase text-amber-800 font-title">ReactArt</h1>
			<p className="text-stone-500">A community of artists and art-lovers.</p>
		</header>
	);
}
