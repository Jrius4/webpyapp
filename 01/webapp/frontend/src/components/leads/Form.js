import React, { Component } from "react";

class PlayersForm extends Component {
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
  handleSubmit=e=>{
    e.preventDefault();
    const name = e.target.elements.name.value;
    const nationality = e.target.elements.nationality.value;
    const age = e.target.elements.age.value;
    const dob = e.target.elements.dob.value;
    const shirtnumber = e.target.elements.shirtnumber.value;
    const position = e.target.elements.position.value;
    const formerclub = e.target.elements.formerclub.value;
    const biography = e.target.elements.biography.value;

    console.log(name, nationality, age, dob, shirtnumber, position, formerclub, biography);
  };

  render() {
    const { name, nationality, age, dob, shirtnumber, position, formerclub, biography } = this.state;
    return (
      <div>
        <h2 className="text-info text-center">Add Player Form</h2>
        <form onSubmit={this.handleSubmit}>

        <div className="form-group">
            <label className="label col-sm-6">Name</label>
            
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                required
              />
          
          </div>
          <div className="form-group">
            <label className="label col-sm-6">Nationality</label>
           
              <input
                className="form-control"
                type="text"
                name="nationality"
                onChange={this.handleChange}
                value={nationality}
                required
              />
           
          </div>
          <div className="form-group">
            <label className="label col-sm-6">Age</label>
            
              <input
                className="form-control"
                type="number"
                name="age"
                onChange={this.handleChange}
                value={age}
                required
              />
           
          </div>
          <div className="form-group">
            <label className="label col-sm-6">Date Of Birth</label>
            
              <input
                className="input"
                type="date"
                name="dob"
                onChange={this.handleChange}
                value={dob}
                required
              />
           
          </div>
          <div className="form-group">
            <label className="label col-sm-6">Shirt Number</label>
          
              <input
                className="input"
                type="text"
                name="shirtnumber"
                onChange={this.handleChange}
                value={shirtnumber}
                required
              />
           
          </div>
          <div className="form-group">
            <label className="label col-sm-6">Position</label>
           
              <input
                className="form-control"
                type="text"
                name="position"
                onChange={this.handleChange}
                value={position}
                required
              />
          
          </div>
          <div className="form-group">
            <label className="label col-sm-6"  col-sm-6>Former club</label>
           
              <input
                className="form-control"
                type="text"
                name="formerclub"
                onChange={this.handleChange}
                value={formerclub}
                required
              />
          
          </div>
          <div className="form-group">
            <label className="label col-sm-6"  col-sm-6>biography</label>
           
              <textarea
                className="form-control"
                type="textarea"
                name="biography"
                onChange={this.handleChange}
                value={biography}
                required
              />
           
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayersForm;
