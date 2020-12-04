import React, { useState, useEffect } from "react";
//import "./App.css";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Header, Icon } from "semantic-ui-react";
import { List } from "semantic-ui-react";

function App() {
  const [values, setValue] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    axios.get("http://localhost:5000/api/values").then((res) => {
      console.log(res);
      setValue(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header as="h2">
        <Icon name="plug" />
        <Header.Content>Uptime Guarantee</Header.Content>
      </Header>

      <List>
        {values.map((value: any) => (
          <List.Item>{value.name}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
