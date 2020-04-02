import React from 'react';

import Routes from './routes';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './Pages/styles/global';

function App() {
  return (
      <>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000}/>
      </>
  );
}

export default App;

