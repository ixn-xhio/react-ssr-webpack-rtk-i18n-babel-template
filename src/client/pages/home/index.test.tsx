import React from 'react';
import { render } from '@testing-library/react';
import Home from './';
import store from '../../services/store';
import { Provider } from 'react-redux';

test('renders welcome message', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>);
    
  const linkElement = getByText(/Welcome to the Home Page/i);
  expect(linkElement).toBeInTheDocument();
});