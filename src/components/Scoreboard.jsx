/* eslint-disable react/prop-types */
function Scoreboard({ score, bestScore }) {
  return (
    <div>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore} </p>
    </div>
  );
}

export default Scoreboard;
