// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// )

// index.js (or index.jsx)

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'; // Replace with your main App component file

const root = createRoot(document.getElementById('root'));

root.render(
	<Auth0Provider
		domain="dev-fwon7wnuhniijeqg.us.auth0.com" // Replace with your Auth0 domain
		clientId="WNPzuj10uY6hM3y8NZG1dh5wjwOHYMgU" // Replace with your Auth0 client ID
		authorizationParams={{
			redirect_uri: window.location.origin
		}}
	>
		<App />
	</Auth0Provider>
);
