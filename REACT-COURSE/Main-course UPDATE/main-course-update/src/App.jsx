/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";
import { useState } from "react";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";

const App = () => {
  const [activeTab, setActiveTab] = useState();
  return (
    <div>
      <Header />
      <section id="core-concepts">
        <div className="">
          <ul className={!activeTab && "border-active"}>
          {/* <ul className={activeTab ? "" : "border-active"}> */}
            {CORE_CONCEPTS.map((conceptItem) => {
              console.log(conceptItem.title.toLowerCase());
              const borderActive = conceptItem.title.toLowerCase() == activeTab;

              return (
                <CoreConcepts
                  key={conceptItem.title}
                  title={conceptItem.title}
                  img={conceptItem.image}
                  description={conceptItem.description}
                  activeTab={borderActive}
                />
              );
            })}
          </ul>
        </div>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton activeTab={activeTab} setActiveTab={setActiveTab}>
            Components
          </TabButton>
          <TabButton activeTab={activeTab} setActiveTab={setActiveTab}>
            JSX
          </TabButton>
          <TabButton activeTab={activeTab} setActiveTab={setActiveTab}>
            Props
          </TabButton>
          <TabButton activeTab={activeTab} setActiveTab={setActiveTab}>
            State
          </TabButton>
          <TabButton activeTab={activeTab} setActiveTab={setActiveTab}>
            Redux
          </TabButton>
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
      <main></main>
    </div>
  );
};

export default App;
