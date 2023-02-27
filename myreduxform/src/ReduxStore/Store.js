import { applyMiddleware, legacy_createStore as createStore} from "redux";
import { userReducer } from "../Reducers/userReducer";
import logger from "redux-logger"
export const store = createStore(userReducer, applyMiddleware(logger))

