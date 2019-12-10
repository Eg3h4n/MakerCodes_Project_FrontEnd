import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input
} from "reactstrap";

const AddGameModal = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  //Getting games from redux store
  const games = useSelector(state => state.games);

  const [searchRes, setSearchRes] = useState(false);

  const gameSearch = async event => {
    const gamesList = games.map(game => game.title);

    const query = event.target.value;

    if (query.length > 0) {
      const result = gamesList.filter(game => {
        return game.toLowerCase().search(query.toLowerCase()) !== -1;
      });

      setSearchRes(result);
    } else {
      setSearchRes(null);
    }
  };

  const renderSearchResults = () => {
    if (searchRes.length > 0) {
      const renderedSearchResults = searchRes.map(res => {
        return (
          <div>
            <hr />
            <Button color="primary" onClick={toggleNested}>
              {res}
            </Button>
            <Modal
              isOpen={nestedModal}
              toggle={toggleNested}
              onClosed={closeAll ? toggle : undefined}
            >
              <ModalHeader>{res}</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggleNested}>
                  Add Game
                </Button>{" "}
                <Button color="secondary" onClick={toggleAll}>
                  Close All
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      });
      return renderedSearchResults;
    }
  };

  //var results = renderSearchResults();
  //console.log(results);

  return (
    <div>
      <Button color="success" onClick={toggle} className="w-100">
        Add New Game
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Search Games</ModalHeader>
        <ModalBody>
          <Form>
            <Input
              type="text"
              placeholder="Type in the game title"
              onChange={gameSearch}
            />
            {Array.isArray(searchRes) ? renderSearchResults() : ""}
          </Form>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>
            Add Game
          </Button> */}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddGameModal;
