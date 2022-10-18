import { useEffect, useState } from "react";
import GameList from "../containers/GameList";
import Categories from "../containers/Categories";
import Header from "../containers/Header";
import GameModal from "../containers/GameModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { game } from "../lib/comeon.game-1.0.min";

function HomePage() {
  const [selectedCat, setSelectedCat] = useState();
  const [show, setShow] = useState(false);
  const [selectedGame, setSelectedGame] = useState();
  const [seearchGameText, setSearchGameText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const playGame = (game) => {
    setSelectedGame(game);
    setShow(true);
  };

  return (
    <>
      <Header />
      <Container>
        <h1>Comeon Games</h1>
        <Row>
          <Col md={8}>
            <GameList
              selectedCat={selectedCat}
              playGame={playGame}
              seearchGameText={seearchGameText}
              setSearchGameText={setSearchGameText}
            ></GameList>
          </Col>
          <Col md={3}>
            <Categories
              setSelectedCat={setSelectedCat}
              setSearchGameText={setSearchGameText}
              seearchGameText={seearchGameText}
            ></Categories>
          </Col>
        </Row>

        <GameModal
          animation={false}
          selectedGame={selectedGame}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        ></GameModal>
      </Container>
    </>
  );
}

export default HomePage;
