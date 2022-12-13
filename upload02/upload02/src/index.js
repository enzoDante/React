import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProviderTheme from './components/estiloGeral/theme';
import UserProvider from './components/useConfig/Userprovider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <ProviderTheme>
      <App />
    </ProviderTheme>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
