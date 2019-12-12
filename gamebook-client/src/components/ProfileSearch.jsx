import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../actions";
import { push } from "connected-react-router";
import { Search, Label } from "semantic-ui-react";
import _ from "lodash";

const initialState = { isLoading: false, results: [], value: "" };

class ProfileSearch extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }
  //state = initialState;

  profileSearch = async event => {
    const usersList = this.props.allUsers.map(user => user.username);

    const query = event.target.value;

    if (query.length > 0) {
      const result = usersList.filter(user => {
        return user.toLowerCase().search(user.toLowerCase()) !== -1;
      });

      this.setState({ results: result });
    } else {
      this.setState({ results: null });
    }
  };

  componentDidMount() {
    this.props.getAllUsers(sessionStorage.getItem("Authorization"));
  }

  resultRenderer = ({ username }) => (
    <Label
      content={username}
      onClick={() => this.props.push(`/profile/${username}`)}
    />
  );
  /*
  searchFunc = async event => {
    this.setState({
      query: event.target.value
    });

    if (this.state.query.length > 0) {
      const results = this.state.users.filter(user => {
        return user.username.toLowerCase() === this.state.query.toLowerCase();
      });

      this.setState({
        results: results
      });
      console.log(results);
    } */

  //console.log(props);

  /* const query = event.target.value; */

  /*  const result = await axios.get(`http://localhost:3000/profile/${query}`, {
      headers: { Authorization: sessionStorage.getItem("Authorization") }
    }); */

  /* if (result) {
      this.props.push(`/profile/${query}`);
    } */

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.username });
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.username);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.allUsers, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    //console.log(this.state);
    return (
      <div className="mx-5">
        <Search
          placeholder="Profile Search"
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true
          })}
          results={results}
          value={value}
          resultRenderer={this.resultRenderer}
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allUsers: state.allUsers
  };
};

export default connect(mapStateToProps, { getAllUsers, push })(ProfileSearch);
