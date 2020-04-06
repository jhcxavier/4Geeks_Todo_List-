import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import AddValue from "./addValue";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>To Do List</h1>
			<AddValue />
		</div>
	);
}
