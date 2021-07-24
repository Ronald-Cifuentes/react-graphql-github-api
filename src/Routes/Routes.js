import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../Layouts/Home"
import Page1 from "../Layouts/Page1"
import Page2 from "../Layouts/Page2"
import Page3 from "../Layouts/Page3"
import Page4 from "../Layouts/Page4"

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/page4">
					<Page4 />
				</Route>
				<Route exact path="/page3">
					<Page3 />
				</Route>
				<Route exact path="/page2">
					<Page2 />
				</Route>
				<Route exact path="/page1">
					<Page1 />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}

export default Routes
