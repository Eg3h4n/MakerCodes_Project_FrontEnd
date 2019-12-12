import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { updateUser } from "../actions";

class DashboardGameRemoveModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };
  }

  toggle = () => {
    if (this.state.modal === false) {
      this.setState({ modal: true });
    } else {
      this.setState({ modal: false });
    }
  };

  removeGame = () => {
    this.props.user.games.reverse();
    const remainingGames = this.props.user.games.filter(
      game => game.title !== this.props.game.title
    );

    //console.log(remainingGames);
    this.props.updateUser(
      { games: remainingGames },
      sessionStorage.getItem("Authorization")
    );

    this.setState({ modal: false });
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle} className="float-right">
          Remove
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {this.props.game.title}
          </ModalHeader>
          <ModalBody>This game will be removed from your games</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.removeGame}>
              Remove
            </Button>
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
    user: state.user
  };
};

export default connect(mapStateToProps, { updateUser })(
  DashboardGameRemoveModal
);

/* const DashboardGameRemoveModal = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle} className="float-right">
        Remove
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.game.title}</ModalHeader>
        <ModalBody>This game will be removed from your games</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Remove
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DashboardGameRemoveModal; */
