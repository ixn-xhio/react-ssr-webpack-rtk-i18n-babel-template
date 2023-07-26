import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './services/store';
import Home from "./pages/home";
import About from "./pages/about";
import { I18nextProvider } from 'react-i18next';
import i18n from './settings/i18n';

const lazyLoadRoutes = (Component: () => React.JSX.Element) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

const Routing = () => {
  return (
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Routes>  
            <Route path="/" element={lazyLoadRoutes(Home)} />
            <Route path="/about" element={lazyLoadRoutes(About)} />
          </Routes>
        </I18nextProvider>
    </Provider>
  );
};


export default Routing;