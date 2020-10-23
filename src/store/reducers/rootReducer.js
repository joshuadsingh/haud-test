import userReducer from './userReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  user: userReducer,
  firestore: firestoreReducer
});

export default rootReducer