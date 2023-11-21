import Concepts from "./Concepts";
import { CORE_CONCEPTS } from "../data";

const CoreConcept = ({ activeTab }) => (
	<section id="core-concepts">
		<ul>
		{CORE_CONCEPTS.map((conceptItem) => {
			// const borderActive = conceptItem.title.toLowerCase() === activeTab;
			return (
				<Concepts
					key={conceptItem.title}
					title={conceptItem.title}
					img={conceptItem.image}
					description={conceptItem.description}
					activeTab={activeTab}
				/>
			);
		})}
	</ul>
	</section>
);

export default CoreConcept;
