import React from "react";

export default class Archives extends React.Component {
  render() {
    const { params } = this.props; 
    const { articles } = params;
    const { query } = this.props.location;
    const { date,filter } = query;
    console.log(this.props);
    return (
      <div>
        <h1>Archives {articles} </h1>
        <h4>date: {date}, filter: {filter}</h4>
      </div>
    );
  }
}
