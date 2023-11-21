import { CORE_CONCEPTS, EXAMPLES } from "../../data";
import TabButton from "./TabButton";
import Section from "../Section";
import Tabs from "./Tabs";
import TabContent from "./TabContent";

const Example = ({ activeTab, setActiveTab }) => {
	return (
		<Section title="Examples" id="examples">
			<Tabs
				// Handling multiple JSX slot
				buttons={CORE_CONCEPTS.map((conceptItem) => {
					return (
						<TabButton
							key={conceptItem.title}
							setActiveTab={setActiveTab}
							activeTab={activeTab}
						>
							{conceptItem.title}
						</TabButton>
					);
				})}
				tabContent={<TabContent activeTab={activeTab} EXAMPLES={EXAMPLES} />}
			></Tabs>
		</Section>
	);
};

export default Example;
