import { createStore } from "redux";
import rootReducer from "./redux/actions/reducers/main";

const store = createStore(
    rootReducer
)
export default store;

