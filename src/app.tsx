import React, { useState, useEffect } from "react";
import { setaccessTokeen } from "./component/authentication:/accessToken";
import { Router } from "./route";
import "./index.css";

// interface props {}

export const App: React.FC = () => {
	const [loading, setLoading] = useState(true);
	// console.log("fuck");
	useEffect(() => {
		// console.log("mounted");
		fetch("http://localhost:4001/refresh_token", {
			method: "POST",
			credentials: "include",
		}).then(async (x) => {
			const data = await x.json();
			setaccessTokeen(data.accessToken);
			console.log(data.accessToken);
			setLoading(false);
		});
	}, []);

	if (loading) {
		// console.log("hellow");
		return <>loading .....</>;
	}

	return (
		<div className="main">
			<Router />
		</div>
	);
};
