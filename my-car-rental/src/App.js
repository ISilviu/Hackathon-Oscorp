import React from "react";
import "./App.css";
import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";
import Users from './components/users/User'

function App() {


  console.log()
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;