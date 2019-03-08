import React, { Component } from 'react';
import { Form, FormGroup,Col,Input,Label,Button } from "reactstrap";
import PropTypes from 'prop-types';

class Playerform extends Component {

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
        <div>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
            <Label for="name" sm={2}>Name</Label>
          <Col sm={8}>
            <Input type="text" onChange={this.handleChange} name="name" id="name" required value={name} placeholder="player name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="name" sm={2}>Nationality</Label>
          <Col sm={10}>
            <Input type="text" name="nationality" id="nationality" placeholder="player nationality" value={nationality} required onChange={this.handleChange}  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="name" sm={2}>Age</Label>
          <Col sm={10}>
            <Input type="number" name="age" id="age" placeholder="player age" value={age} required onChange={this.handleChange}   />
          </Col>
        </FormGroup>
        
        
        <FormGroup row>
          <Label for="name" sm={2}>Date Of Birth</Label>
          <Col sm={10}>
            <Input type="date" name="dob" id="dob" placeholder="player Date Of Birth"  value={dob} required onChange={this.handleChange}   />
          </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="shirtnumber" sm={2}>Shirt Number</Label>
          <Col sm={6}>
            <Input type="text" name="shirtnumber" id="shirtnumber" placeholder="player shirtnumber"  value={shirtnumber} required onChange={this.handleChange}   />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="position" sm={2}>Position</Label>
          <Col sm={10}>
            <Input type="text" name="position" id="position" placeholder="player position"  value={position} required onChange={this.handleChange}   />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="formerclub" sm={2}>Former Club</Label>
          <Col sm={10}>
            <Input type="text" name="formerclub" id="formerclub" placeholder="player former Club" value={formerclub} required onChange={this.handleChange}  />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="biography" sm={2}>Biography</Label>
          <Col sm={10}>
            <Input type="textarea" name="biography" id="biography" placeholder="player biography" />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </FormGroup>
            </Form>
        </div>
         );
    }
}
 
export default Playerform;