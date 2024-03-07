// NotFound.jsx
import React from 'react';
import MyNavbar from '../Components/MyNavbar';

function NotFound() {
  return (
    <div>
        <MyNavbar />
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;