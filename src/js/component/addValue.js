import React, { useState } from "react";
// import AddItem from "./addTodos";

const AddValue = () => {
	const [value, setValue] = useState("");
	const [item, setItem] = useState([]);
	const style = {
		color: "red",
		textAlign: "left"
	};
	const addTodo = e => {
		if (value) {
			setItem(item.concat(value));
		}
		setValue("");
		e.preventDefault();
	};
	console.log(item);
	return (
		<div className="content">
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
			<div className="todos">
				{item.map((e, index) => (
					<div key={index} style={style}>
						<p>{e}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AddValue;
