import React from "react";
import ConceptItem from "./ConceptItem";
import Container from "../UI/Container";

const Concepts = (props) => {
  // Using dynamic placeholder
  return (
    <Container id="concepts">
      {props.conceptArray.map(function (item) {
        return (
          <ConceptItem
            title={item.title}
            image={item.image}
            description={item.description}
          />
        );
      })}
    </Container>
  );
};

export default Concepts;
