const Header = () => {
    const reactDescription = [
      "Crucial",
      "Fundamental",
      "Important",
      "Core",
      "Vital",
      "Central",
    ];
    return (
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {
            reactDescription[
              Math.floor(Math.floor(Math.random() * reactDescription.length - 1))
            ]
          }{" "}
          <strong>React</strong> concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  };

export default Header;