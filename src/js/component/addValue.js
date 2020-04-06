import React, { useState } from "react";
// import AddItem from "./addTodos";

const AddValue = () => {
	const [value, setValue] = useState("");
	const [item, setItem] = useState([]);

	const addTodo = e => {
		if (value) {
			setItem(item.concat(value));
		}
		setValue("");
		e.preventDefault();
	};
	console.log(item);
	return (
		<div>
			<form onSubmit={addTodo}>
				<input
					type="text"
					value={value}
					onChange={e => {
						setValue(e.target.value);
					}}
				/>
				<button type="submit">ADD</button>
			</form>
			<div>
				{item.map((e, index) => (
					<p key={index}>{e}</p>
				))}
			</div>
		</div>
	);
};

export default AddValue;
