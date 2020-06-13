import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import client from "./apollo";

import "./index.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

if (module.hot) module.hot.accept();
