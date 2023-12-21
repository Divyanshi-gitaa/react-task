import { compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

// rootReducer and rootSaga
import rootReducer from './src/reducer/rootReducer'
import rootSaga from './src/sagas/rootSaga'

const composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();

// Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const customizedMiddleware = getDefaultMiddleware({
      serializableCheck: false,
    });
    return [...customizedMiddleware, sagaMiddleware];
  },
  devTools: process.env.NODE_ENV !== 'production',
});

store.sagaTask = sagaMiddleware.run(rootSaga);
