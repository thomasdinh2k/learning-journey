import './SimpleCard.css';

const SimpleCard = (props) => {
return (
  <>
  {props.contentArray.map( (item) => {
    return (
      <>
      <img src={item.image} alt={item.title}></img>
      <div className="text-container">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      </>
    );

  })}
  </>
);


  //   return (
//     <>
//   <img
//     src={props.image}
//     alt={props.title}
//   ></img>
//   <div className="text-container">
//     <h2>{props.title}</h2>
//     <p>{props.description}</p>
//   </div>
// </> );
};

export default SimpleCard;
