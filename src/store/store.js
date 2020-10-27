import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import {
    reduxFirestore,
    getFirestore 
} from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import fbConfig from "../config/fbConfig";


const store = createStore(
  rootReducer,
    composeWithDevTools(
      applyMiddleware(logger, thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(fbConfig)
    )
)

export default store