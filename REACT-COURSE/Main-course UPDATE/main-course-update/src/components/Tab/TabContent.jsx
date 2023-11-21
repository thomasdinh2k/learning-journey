const TabContent = ( {activeTab, EXAMPLES} ) => {
	return (
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
						Since ternary operator noticed that the state is <span style={{color: 'orange', fontWeight:'bolder'}}>Null</span>. Hence it
						displayed nothing here until user click onto tabs
					</p>
				</>
			)}
		</div>
	);
};

export default TabContent;
