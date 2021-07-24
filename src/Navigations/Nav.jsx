import { Link } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
	return (
		<header>
			<div className="nav-container">
				<nav className="nav-checkbox">
					<a href="#" className="logo">
						logo
					</a>
					<label className="tab-nav-label">
						Menu
						<input id="tab-nav" type="checkbox" className="tab-nav" name="tabs" />
					</label>
					<ul className="tab-content">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/page1">Page1</Link>
						</li>
						<li>
							<Link to="/page2">Page2</Link>
						</li>
						<li>
							<Link to="/page3">Page3</Link>
						</li>
						<li>
							<Link to="/page4">Page4</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Nav
