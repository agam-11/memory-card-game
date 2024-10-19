import "../styles/Card.css";

/* eslint-disable react/prop-types */
function Card({ imageUrl, imageText, handleClick }) {
  return (
    <button onClick={handleClick}>
      <img src={imageUrl}></img>
      <h5>{imageText}</h5>
    </button>
  );
}

export default Card;
