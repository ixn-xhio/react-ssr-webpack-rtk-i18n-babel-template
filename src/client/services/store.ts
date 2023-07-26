import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const preloadedState = typeof window !== 'undefined' ? (window as any).__PRELOADED_STATE__ : {};

// Elimina la variable global del estado inicial, ya que ya no es necesaria
if (typeof window !== 'undefined') {
  delete (window as any).__PRELOADED_STATE__;
}
const store = configureStore({
  preloadedState,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
  }).concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store;