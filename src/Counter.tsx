import { useAppDispatch } from "./hooks";
import { decrement, increment, reset } from "./slices/counter/counterSlice";

export default function Counter({ id, count }: { id: number; count: number }) {
	// Getting the state (counter array) from the store
	const dispatch = useAppDispatch();

	function handleIncrement() {
		dispatch(increment(id));
	}
	function handleDecrement() {
		dispatch(decrement(id));
	}
	function handleReset() {
		dispatch(reset(id));
	}

	return (
		<div className="flex flex-col items-center gap-4 p-4">
			<div className="text-4xl font-bold">{count}</div>
			<div className="flex gap-2">
				<button
					type="button"
					onClick={handleDecrement}
					className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
				>
					-
				</button>
				<button
					type="button"
					onClick={handleReset}
					className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
				>
					Reset
				</button>
				<button
					type="button"
					onClick={handleIncrement}
					className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
				>
					+
				</button>
			</div>
		</div>
	);
}
