export default function Small({ imgArray, imageSetHandler, imageUrl }) {
  return (
    <div id="small">
      {imgArray.map((img, index) => (
        <img
          className={img === imageUrl ? "active" : ""}
          src={img}
          alt={`thumbnail-${index}`}
          onClick={() => imageSetHandler(img)}
        ></img>
      ))}
    </div>
  );
}
