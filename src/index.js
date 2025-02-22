import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="sonusahu15.uk.auth0.com"
    clientId="6r9WFPgyMVpNcnNhisOk0yvyUwU36zAR"
    redirectUri={window.location.origin}
  >
    
    <App />
    
  </Auth0Provider>
);
