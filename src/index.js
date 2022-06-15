import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") 
);
root.render(
  <Auth0Provider
  domain="dev-meg5jf1y.us.auth0.com"
  clientId = "lqR2GpvNUjJ7JkANjhLguibpfUiO2ELO"
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();