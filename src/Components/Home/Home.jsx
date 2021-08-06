import PropTypes from "prop-types"
import "./Home.scss"

const Home = ({ history }) => {
	const userLogged = localStorage.getItem("userLogged")
	if (!userLogged) {
		history.push({
			pathname: "/"
		})
	}
	return (
		<section>
			<h1>Home</h1>
		</section>
	)
}

Home.propTypes = {
	history: PropTypes.any
}

export default Home
