import React, { Component,Fragment } from "react"; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getLeads, deleteplayer} from "../../actions/leads";
import {Button} from "reactstrap";
import PlayersForm from "./Form";
import axios from "axios";

class PlayersList extends Component {
  static propTypes ={
    players: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteplayer: PropTypes.func.isRequired,
  };
  /**
            <Button size="sm" color="info" className="m-1">Edit</Button>&nbsp;<Button onClick={this.props.deleteplayer.bind(this, player.id)}  className="m-1" size="sm" color="danger">Delete</Button>
   * 
   
  deleteplayer =item=>{
    axios.get("/api/players/",item).then(res=>this.refreshList());
  };
  * 
   * */
  componentDidMount(){
    this.props.getLeads();
  }
  render() {
    return (
      <Fragment>
        <h2 className="text-center text-warning">Players List</h2>
        <table className="table table-striped">
        <thead>
          <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Nationality</th>
          <th>Age</th>
          <th>Date Of Birth</th>
          <th>Shirt Number</th>
          <th>Position</th>
          <th>Former Club</th>
          <th>Biography</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {this.props.players.map(player=>(
          <tr key={player.id}>
          <td>{player.id}</td>
          <td>{player.name}</td>
          <td>{player.nationality}</td>
          <td>{player.age}</td>
          <td>{player.dob}</td>
          <td>{player.shirtnumber}</td>
          <td>{player.position}</td>
          <td>{player.formerclub}</td>
          <td>{player.biography}</td> 
         
          <td>
            <Button size="sm" color="info" className="m-1">Edit</Button>&nbsp;<Button onClick={this.props.deleteplayer.bind(this, player.id)}  className="m-1" size="sm" color="danger">Delete</Button>
          </td>         
          </tr>
          
        ))}
        </tbody>
        </table>

        <PlayersForm className="mt-4"/>
      </Fragment>
    );
  }
};
const mapStateToProps = state =>({
  players: state.players.players
})
export default connect(mapStateToProps, {getLeads,deleteplayer})(PlayersList);
