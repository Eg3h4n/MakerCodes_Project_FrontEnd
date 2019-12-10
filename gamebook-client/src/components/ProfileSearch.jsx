import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { push } from "connected-react-router";
import { Search, Label } from "semantic-ui-react";
import _ from "lodash";

const resultRenderer = ({ username }) => <Label content={username} />;

const initialState = { isLoading: false, results: [], value: "" };

class ProfileSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false, results: [], value: "", allUsers: [] };
  }
  //state = initialState;

  getAllUsers = async () => {
    const allUsers = await axios.get("http://localhost:3000/profile", {
      headers: { Authorization: sessionStorage.getItem("Authorization") }
    });

    this.setState({
      allUsers: allUsers.data
    });
  };

  async componentDidMount() {
    this.getAllUsers();
  }
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
        results: _.filter(this.state.allUsers, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    console.log(this.state);
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
          resultRenderer={resultRenderer}
          {...this.props}
        />
      </div>
    );
  }
}

export default connect(null, { push })(ProfileSearch);
