/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

const App = () => {
  return (
    <div>
      <Header />
      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => {
            return (
              <CoreConcepts
                key={conceptItem.title}
                title={conceptItem.title}
                img={conceptItem.image}
                description={conceptItem.description}
              />
            );
          })}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton>Component</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton>
          <TabButton>Redux</TabButton>


        
        </menu>
      </section>
      <main></main>
    </div>
  );
};

export default App;
