import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['user', 'auth'],
    },
    reducers
  );

  return persistedReducers;
};
