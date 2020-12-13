import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as userReducer from './reducers/userReducers';
import * as postReducer from './reducers/postReducers';

// Other constants
const userCredFromStorage = localStorage.getItem('userCred')
  ? JSON.parse(localStorage.getItem('userCred'))
  : null;

// Redux stuff
const initialState = {
  userLogin: { userCred: userCredFromStorage },
};
const reducer = combineReducers({
  userRegister: userReducer.userRegisterReducer,
  userLogin: userReducer.userLoginReducer,
  postList: postReducer.postListReducer,
  postCreate: postReducer.postCreateReducer,
  postDelete: postReducer.postDeleteReducer,
});
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
