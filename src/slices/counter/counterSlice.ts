import { createSlice } from "@reduxjs/toolkit";

interface Counter {
	id: number;
	count: number;
}

const initialState: Counter[] = [
	{
		id: 1,
		count: 3,
	},

	{
		id: 2,
		count: 1,
	},
];

const counterSlice = createSlice({
	name: "counter",
	initialState: initialState, // Or just initialState is okay too

	reducers: {
		increment: (state, action) => {
			const indexOfCounter = state.findIndex(
				(counterObject) => counterObject.id === action.payload,
			);

			state[indexOfCounter].count++;
		},

		decrement: (state, action) => {
			const indexOfCounter = state.findIndex(
				(counterObject) => counterObject.id === action.payload,
			);

			state[indexOfCounter].count--;
		},

		reset: (state, action) => {
			const indexOfCounter = state.findIndex(
				(counterObject) => counterObject.id === action.payload,
			);

			state[indexOfCounter].count = 0;
		},
	},
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice;
