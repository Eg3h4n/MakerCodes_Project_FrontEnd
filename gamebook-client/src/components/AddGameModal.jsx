import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
import { updateUser } from "../actions";

class AddGameModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      searchRes: null
    };
  }

  toggle = () => {
    if (this.state.modal === false) {
      this.setState({ modal: true });
    } else {
      this.setState({ modal: false, searchRes: null });
    }
  };

  toggleNested = () => {
    if (this.state.nestedModal === false) {
      this.setState({ nestedModal: true });
    } else {
      this.setState({ nestedModal: false });
    }
    this.setState({ closeAll: false });
  };

  toggleAll = () => {
    if (this.state.nestedModal === false) {
      this.setState({ nestedModal: true });
    } else {
      this.setState({ nestedModal: false });
    }
    this.setState({ closeAll: true });
  };

  gameSearch = async event => {
    const gamesList = this.props.games.map(game => game.title);

    const query = event.target.value;

    if (query.length > 0) {
      const result = gamesList.filter(game => {
        return game.toLowerCase().search(query.toLowerCase()) !== -1;
      });

      this.setState({ searchRes: result });
    } else {
      this.setState({ searchRes: null });
    }
  };

  addGame = async title => {
    this.props.user.games.reverse();
    const game = this.props.games.find(game => game.title === title);
    //console.log(game);
    const usersGames = this.props.user.games.map(game => game._id);
    //console.log(usersGames);
    usersGames.push(game._id);
    //console.log(usersGames);

    await this.props.updateUser(
      { games: usersGames },
      sessionStorage.getItem("Authorization")
    );

    this.toggleAll();
  };

  renderSearchResults = () => {
    if (this.state.searchRes.length > 0) {
      const renderedSearchResults = this.state.searchRes.map(res => {
        const game = this.props.games.find(game => game.title === res);
        return (
          <div>
            <hr />
            <Button color="primary" onClick={this.toggleNested}>
              {game.title}
            </Button>
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader>{game.title}</ModalHeader>
              <ModalBody>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={game.imageURL}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{game.title}</CardTitle>
                    <CardSubtitle>{game.releaseYear}</CardSubtitle>
                    <CardText>{game.publisher}</CardText>
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => this.addGame(game.title)}
                >
                  Add Game
                </Button>{" "}
                <Button color="secondary" onClick={this.toggleAll}>
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
  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle} className="w-100">
          Add New Game
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Search Games</ModalHeader>
          <ModalBody>
            <Form>
              <Input
                type="text"
                placeholder="Type in the game title"
                onChange={this.gameSearch}
              />
              {Array.isArray(this.state.searchRes)
                ? this.renderSearchResults()
                : ""}
            </Form>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={toggle}>
              Add Game
            </Button> */}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    games: state.games
  };
};

export default connect(mapStateToProps, { updateUser })(AddGameModal);

/* const AddGameModal = props => {
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
        const game = games.find(game => game.title === res);
        return (
          <div>
            <hr />
            <Button color="primary" onClick={toggleNested}>
              {game.title}
            </Button>
            <Modal
              isOpen={nestedModal}
              toggle={toggleNested}
              onClosed={closeAll ? toggle : undefined}
            >
              <ModalHeader>{game.title}</ModalHeader>
              <ModalBody>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={game.imageURL}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{game.title}</CardTitle>
                    <CardSubtitle>{game.releaseYear}</CardSubtitle>
                    <CardText>{game.publisher}</CardText>
                  </CardBody>
                </Card>
              </ModalBody>
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
          </Button> */
/*  <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddGameModal*/
