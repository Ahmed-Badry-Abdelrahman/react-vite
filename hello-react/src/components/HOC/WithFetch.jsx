import React from "react";
// import axios from "axios";
const withFetch = (WrappedComponent) => {
  class withFetch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }
    componentDidMount() {
      try {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => this.setState({ data: data }));
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }

    render() {
      return (
        <React.Fragment>
          {this.state.data.length > 0 && (
            <WrappedComponent data={this.state.data} />
          )}
        </React.Fragment>
      );
    }
  }
  return withFetch;
};

export default withFetch;
