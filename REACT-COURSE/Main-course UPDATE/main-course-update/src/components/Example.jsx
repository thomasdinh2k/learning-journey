import { CORE_CONCEPTS, EXAMPLES } from "../data";
import TabButton from "./TabButton";

const Example = ({ activeTab, setActiveTab }) => {
	return (
		<section id="examples">
			<h2>Examples</h2>
			<menu>
				{CORE_CONCEPTS.map((conceptItem) => {
					return (
						<TabButton key={conceptItem.title} setActiveTab={setActiveTab} activeTab={activeTab}>
							{conceptItem.title}
						</TabButton>
					);
				})}
			</menu>

			<div id="tab-content">
				{activeTab ? (
					<>
						<h3>{EXAMPLES[activeTab].title}</h3>
						<p>{EXAMPLES[activeTab].description}</p>
						<pre>
							<code>{EXAMPLES[activeTab].code}</code>
						</pre>
					</>
				) : (
					<>
						<h2>Please select a topic!</h2>
						<p>
							Since ternary operator noticed that the state is Null. Hence it
							displayed nothing here until user click onto tabs
						</p>
					</>
				)}
			</div>
		</section>
	);
};

export default Example;
