
import { legacy_createStore as createStore} from "redux";
import { Reducer } from "../reducers/Reducer";

export const Store = createStore(Reducer)
