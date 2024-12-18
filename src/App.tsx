import Counter from "./Counter";
import { useAppSelector } from "./hooks";

export default function App() {
	// Getting the state (counter array) from the store
	const counters = useAppSelector((state) => state.counterReducer);

	// Total value of all counters
	const total = counters.reduce(
		(sum, currentObject) => sum + currentObject.count,
		0,
	);

	return (
		<>
			{/* Displaying all counters */}
			{counters.map((counterObject) => (
				<Counter
					key={counterObject.id}
					id={counterObject.id}
					count={counterObject.count}
				/>
			))}

			<h1 className="flex justify-center mt-10 text-xl">Total is {total}</h1>
		</>
	);
}
