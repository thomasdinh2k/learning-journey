import Concepts from "./Concepts";
import { CORE_CONCEPTS } from "../../data";
import Section from "../Section";

const CoreConcept = ({ activeTab, setActiveTab }) => (
	<Section id="core-concepts">
		<ul>
			{CORE_CONCEPTS.map((conceptItem) => {
				return (
					<Concepts
						key={conceptItem.title}
						title={conceptItem.title}
						img={conceptItem.image}
						description={conceptItem.description}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				);
			})}
		</ul>
	</Section>
);

export default CoreConcept;
