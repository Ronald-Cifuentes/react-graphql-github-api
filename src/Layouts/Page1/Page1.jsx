import PropTypes from "prop-types"
import Nav from "@/Navigations"
import "./Page1.css"
import connect from "../../Redux"

const Page1 = ({ count, Increment, Decrement }) => {
	return (
		<div className="page1">
			<Nav />
			<div className="page1-content">
				<h1>Page 1</h1>
				<h2>Contador: {count}</h2>
				<button className="btn-blue" onClick={Increment}>
					{" "}
					+{" "}
				</button>
				<button className="btn-red" onClick={Decrement}>
					{" "}
					-{" "}
				</button>
			</div>
		</div>
	)
}

Page1.propTypes = {
	count: PropTypes.any,
	Increment: PropTypes.func,
	Decrement: PropTypes.func
}

export default connect(Page1)
