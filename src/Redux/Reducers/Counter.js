import { INCREMENT, DECREMENT } from "../ActionTypes"
const initialState = {
	count: 0
}

export default (state = initialState, { type }) => {
	switch (type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 }
		case DECREMENT:
			return { ...state, count: state.count - 1 }
		default:
			return state
	}
}
