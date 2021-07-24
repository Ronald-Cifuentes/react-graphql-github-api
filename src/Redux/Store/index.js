import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import RootReducer from "../Reducers"

// Middlewares
import thunk from "redux-thunk"

const storeInstance = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default storeInstance
