import { StrictMode } from "react"
import ReactDom from "react-dom"
import { Provider } from "react-redux"

import Routes from "./Routes"
import storeInstance from "./Redux/Store"
import "./index.scss"

ReactDom.render(
	<StrictMode>
		<Provider store={storeInstance}>
			<Routes />
		</Provider>
	</StrictMode>,
	document.getElementById("root")
)
