import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeList from "../data/employees.json";

class EmployeeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        results: EmployeeList,
        search: "",
    }
    this.sortBy = this.sortBy.bind(this);
  }
  sortBy = (key) => {
      this.setState({
          results: EmployeeList.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
      })
      console.log("new data: ", EmployeeList)
  }

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    const searchQuery = this.state.search.trim();
    const searchResults = EmployeeList.filter((employee) => employee.position === searchQuery);
    this.setState({ 'result': searchResults });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees();
  };

  render() {
    return (
      <Container>
        <br></br>
        <Row>
          <Col size="md-12">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <EmployeeInfo 
            search={this.state.search} 
            sortBy={this.sortBy}
            />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default EmployeeContainer;
