import React from "react";
import keyConceptsImage from "./assets/images/key-concepts.png";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import Concepts from "./components/Components/Concepts";
import Header from "./components/Components/Header";



// const App = () => {
//   return (
//     <div>
//       <Header image={keyConceptsImage} />
//       {/* <Concepts conceptArray={concepts} /> */}
//       <Concepts conceptArray={Concepts} />
//     </div>
//   );
// };

const App = () => {
  return (
    <>
      {React.createElement(Header, { image: keyConceptsImage })}
      {React.createElement(Concepts, { conceptArray: Concepts })}
    </>
  );
};

export default App;
