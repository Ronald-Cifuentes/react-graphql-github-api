import { connect } from "react-redux"
import { Increment, Decrement } from "./Actions"

const mapStateToProps = state => ({
	count: state.Counter.count
})

const mapDispatchToProps = {
	Increment,
	Decrement
}

export default connect(mapStateToProps, mapDispatchToProps)
