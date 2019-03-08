import React, { Component } from "react";
import PropTypes from "prop-types";
class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    name: "",
    nationality: "",
    age: "",
    dob: "",
    shirtnumber: "",
    position: "",
    formerclub: "",
    biography: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, nationality, age, dob, shirtnumber, position, formerclub, biography} = this.state;
    const player = { name, nationality, age, dob, shirtnumber, position, formerclub, biography};
    const conf = {
      method: "post",
      body: JSON.stringify(player),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };
  render() {
    const { name, nationality, age, dob, shirtnumber, position, formerclub, biography } = this.state;
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>

        <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nationality</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="nationality"
                onChange={this.handleChange}
                value={nationality}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Age</label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="age"
                onChange={this.handleChange}
                value={age}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Date Of Birth</label>
            <div className="control">
              <input
                className="input"
                type="date"
                name="dob"
                onChange={this.handleChange}
                value={dob}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Shirt Number</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="shirtnumber"
                onChange={this.handleChange}
                value={shirtnumber}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Position</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="position"
                onChange={this.handleChange}
                value={position}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Former club</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="formerclub"
                onChange={this.handleChange}
                value={formerclub}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">biography</label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                name="biography"
                onChange={this.handleChange}
                value={biography}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;