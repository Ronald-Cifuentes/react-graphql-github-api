import reducers from "./"

describe("<Counter />", () => {
	it("Increment", () => {
		const state = reducers({ Counter: { count: 5 } }, { type: "INCREMENT" })
		expect(state).toEqual({ Counter: { count: 6 } })
	})

	it("Decrement", () => {
		const state = reducers({ Counter: { count: 7 } }, { type: "DECREMENT" })
		expect(state).toEqual({ Counter: { count: 6 } })
	})
})
