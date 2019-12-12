import React from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { updateUser } from "../actions";
import DashboardAccountEditModalForm from "./DashboardAccountEditModalForm";

class DashboardAccountEditModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.updateForm = React.createRef();
  }

  toggle = () => {
    if (this.state.modal === false) {
      this.setState({ modal: true });
    } else {
      this.setState({ modal: false });
    }
  };

  /* removeGame = () => {
    const remainingGames = this.props.user.games.filter(
      game => game.title !== this.props.game.title
    );

    console.log(remainingGames);
    this.props.updateUser(
      { games: remainingGames },
      sessionStorage.getItem("Authorization")
    );

    this.setState({ modal: false });
  }; */

  onFormSubmit = async formValues => {
    await this.props.updateUser(
      {
        avatarURL: formValues.avatarURL,
        username: formValues.username,
        name: formValues.name,
        surname: formValues.surname,
        email: formValues.email,
        password: formValues.password
      },
      sessionStorage.getItem("Authorization")
    );
  };

  updateInfo = () => {
    this.updateForm.current.submit();
    this.setState({ modal: false });
  };

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>
          Edit
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Form</ModalHeader>
          <ModalBody>
            <DashboardAccountEditModalForm
              ref={this.updateForm}
              user={this.props.user}
              onSubmit={this.onFormSubmit}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.updateInfo}>
              Update
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
  DashboardAccountEditModal
);
