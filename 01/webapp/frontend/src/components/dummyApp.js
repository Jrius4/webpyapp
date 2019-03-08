import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <React.Fragment>
<DataProvider endpoint="api/players/" 
                render={data => <Table data={data} />} />
                <Form endpoint="api/players/"/>
  </React.Fragment>
  
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;