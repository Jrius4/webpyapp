import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';
import key from 'weak-key';


const PlayerTable=({playerdata})=>!playerdata ? (
    <p>Nothing to show</p>

):(
<div className="container-fluid col-lg-12">
<h2 className="subtitle">
        Showing <strong>{playerdata.length} players</strong>
      </h2>
        <Table className="table table-striped">
        <thead className="thead-dark">
            <tr>{Object.entries(playerdata[0]).map(el=><th key={key(el)}>{el[0]}</th>)}</tr>
            </thead>
            <tbody>
                {playerdata.map(el=>(
                    <tr key={el.id}>
                        {Object.entries(el).map(el=><td key={key(el)}>{el[1]}</td>)}
                    </tr>
                ))}
            </tbody>
        </Table>
        
</div>
);
PlayerTable.propTypes={
    playerdata: PropTypes.array.isRequired
};
 
export default PlayerTable;