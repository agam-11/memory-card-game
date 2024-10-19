import Card from "./Card";
import getImageData from "../helpers/getImageData";
import shuffle from "../helpers/shuffle";
import { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";

function Gameboard() {
  const [imageData, setImageData] = useState([]);
  const [clickedId, setClickedId] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getImageData(12);
      setImageData(data);
    }

    fetchData();
  }, []);

  function handleClick(id) {
    let shuffledImages = shuffle(imageData);
    setImageData(shuffledImages);

    if (!clickedId.includes(id)) {
      setClickedId([...clickedId, id]);

      setScore((score) => {
        const newScore = score + 1;
        if (newScore > highestScore) {
          setHighestScore(newScore);
        }
        return newScore;
      });
    } else {
      setScore(0);
      setClickedId([]);
    }
  }

  console.log(imageData);

  return (
    <>
      <h1>Car Memory Game</h1>
      <p>
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
      <Scoreboard score={score} bestScore={highestScore}></Scoreboard>

      {imageData.map((image) => (
        <Card
          imageUrl={image.url}
          imageText={image.title}
          key={image.id}
          handleClick={() => handleClick(image.id)}
        ></Card>
      ))}
    </>
  );
}

export default Gameboard;
