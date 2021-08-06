import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Components
import Login from "../Components/Login"
import SignUp from "../Components/SignUp"
import Home from "../Components/Home"
import NotFound from "../Components/NotFound"

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/home" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

export default Routes
