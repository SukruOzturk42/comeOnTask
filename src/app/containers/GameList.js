import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GameList(props) {
  const { selectedCat, seearchGameText, setSearchGameText } = props;
  const [games, setGames] = useState([]);
  const [tempGames, setTempGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/games")
      .then((res) => res.json())
      .then((result) => {
        setGames(result);
        setTempGames(result);
      });
  }, []);

  useEffect(() => {
    setSearchGameText("");
    if (selectedCat || selectedCat === 0) {
      const filteredGames = tempGames.filter((item) => {
        const ids = item.categoryIds;
        return ids.includes(selectedCat);
      });
      setGames(filteredGames);
    }
  }, [selectedCat]);

  useEffect(() => {
    if (seearchGameText || seearchGameText !== "") {
      const filteredGames = tempGames.filter((item) => {
        const code = item.code;
        const description = item.description.trim();
        const name = item.name.trim();
        return (
          code.includes(seearchGameText) ||
          description.includes(seearchGameText) ||
          name.includes(seearchGameText)
        );
      });
      setGames(filteredGames);
    }
  }, [seearchGameText]);

  return (
    <>
      <Row>
        {games.map((game) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={require("../" + game.icon)} />
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>{game.description}</Card.Text>
                <Button variant="primary" onClick={() => props.playGame(game)}>
                  Play
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GameList;
