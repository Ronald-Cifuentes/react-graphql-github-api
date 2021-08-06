import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { withFormik, Form, Field, ErrorMessage } from "formik"
import Swal from "sweetalert2"

// Styles
import "./Login.scss"

// Component
import logo from "./github-logo-white.svg"

const Login = ({ history }) => {
	const userLogged = JSON.parse(localStorage.getItem("userLogged"))
	if (userLogged) {
		history.push({
			pathname: "/home"
		})
	}

	return (
		<section className="login">
			<section className="login-container">
				<div className="container-header-img">
					<img src={logo} alt="" className="header-img" />
				</div>
				<h2>Inicia sesión</h2>
				<Form className="login-container-form">
					<Field name="user" className="input" type="text" placeholder="Usuario" />
					<ErrorMessage name="user">{message => <div className="field-error">{message}</div>}</ErrorMessage>
					<Field name="password" className="input" type="password" placeholder="Contraseña" />
					<ErrorMessage name="password">{message => <div className="field-error">{message}</div>}</ErrorMessage>
					<button className="button" type="submit">
						Iniciar sesión
					</button>
					<div className="login-container-remember-me">
						<label>
							<input type="checkbox" id="cbox1" value="first_checkbox" /> Recuérdame
						</label>
						<Link to="/toDo1">Olvidé mi contraseña</Link>
					</div>
				</Form>
				<p className="login-container-register">
					No tienes ninguna cuenta <Link to="/signup"> Regístrate</Link>
				</p>
			</section>
		</section>
	)
}

Login.propTypes = {
	history: PropTypes.any
}

export default withFormik({
	mapPropsToValues(props) {
		return {
			user: "",
			password: ""
		}
	},
	validate(values) {
		const errors = {}

		if (!values.user) {
			errors.user = "El Usuario es requerido"
		}

		if (!values.password) {
			errors.password = "La Contraseña es requerida"
		}
		return errors
	},
	handleSubmit(values, { props, resetForm, setSubmitting }) {
		setSubmitting(false)
		const { user, password } = values

		const db = JSON.parse(localStorage.getItem("db"))

		if (db && db.length) {
			const exist = db.filter(e => (e.name === user || e.email === user) && e.password === password)
			if (exist.length > 0) {
				localStorage.setItem("userLogged", JSON.stringify({ user, password }))
				resetForm()
				props.history.push({
					pathname: "/home"
				})
			} else {
				Swal.fire({
					icon: "error",
					title: "Opss...",
					text: "Este usuario aun no se ha registrado"
				})
			}
		} else {
			Swal.fire({
				icon: "error",
				title: "Opss...",
				text: "Para poder acceder debe registrar almenos un usuario"
			})
		}
	}
})(Login)
