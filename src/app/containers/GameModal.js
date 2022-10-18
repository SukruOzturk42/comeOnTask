import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { game } from "../lib/comeon.game-1.0.min";

function GameModal(props) {
  const { selectedGame, show, handleClose, handleShow } = props;

  useEffect(() => {
    if (show && selectedGame !== undefined) {
      window.comeon.game.launch(selectedGame?.code);
    }
  }, [selectedGame, show]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size={"lg"}
    >
      <Modal.Header closeButton>
        <Modal.Title>{selectedGame?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id={"game-launch"}></div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GameModal;
