import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { withFormik, Form, Field, ErrorMessage } from "formik"

// Styles
import "./SignUp.scss"

const SignUp = () => {
	const handleSended = e => {
		console.log(e)
	}

	return (
		<section className="signup">
			<section className="signup-container">
				<h2>Regístrate</h2>
				<Form className="signup-container-form">
					<Field name="name" className="input" type="text" placeholder="Nombre" />
					<ErrorMessage name="name">{message => <div className="field-error">{message}</div>}</ErrorMessage>
					<Field name="email" className="input" type="text" placeholder="Correo" />
					<ErrorMessage name="email">{message => <div className="field-error">{message}</div>}</ErrorMessage>
					<Field name="password" className="input" type="password" placeholder="Contraseña" />
					<ErrorMessage name="password">{message => <div className="field-error">{message}</div>}</ErrorMessage>
					<button className="button" type="submit" onClick={handleSended}>
						Registrarme
					</button>
				</Form>
				<Link to="/">Iniciar sesión</Link>
			</section>
		</section>
	)
}

console.log(SignUp)

export default withFormik({
	mapPropsToValues(props) {
		return {
			name: "",
			email: "",
			password: ""
		}
	},
	validate(values) {
		const errors = {}

		if (!values.name) {
			errors.name = "El Nombre es requerido"
		}

		if (!values.email) {
			errors.email = "El Email es requerido"
		}

		if (!values.password) {
			errors.password = "La Contraseña es requerida"
		} else if (values.password.length < 8) {
			errors.password = "La Contraseña debe tener almenos 8 characters"
		}
		return errors
	},
	handleSubmit(values, { resetForm, setSubmitting }) {
		setSubmitting(false)
		const { name, email, password } = values
		const db = JSON.parse(localStorage.getItem("db"))

		if (db && db.length) {
			const exist = db.filter(e => e.name === name || e.email === email)
			if (!(exist.length > 0)) {
				db.push({ name, email, password })
				localStorage.setItem("db", JSON.stringify(db))
				resetForm()
				Swal.fire({
					icon: "success",
					title: "¡Exelente!",
					text: "Se ha creado el usuario"
				})
			} else {
				Swal.fire({
					icon: "error",
					title: "Opss...",
					text: "El usuario que intentas guardar ya existe"
				})
			}
		} else {
			localStorage.setItem("db", JSON.stringify([{ name, email, password }]))
			Swal.fire({
				icon: "success",
				title: "¡Exelente!",
				text: "Se ha creado el usuario"
			})
		}
	}
})(SignUp)
