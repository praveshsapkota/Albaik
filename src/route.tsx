import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Chicken } from "./component/iteams/Chicken/chicken";
import { Home } from "./component/home";
import { Burger } from "./component/iteams/Burgers/burger";
import { Mojito } from "./component/iteams/mojito/mojito";
import { Crushers } from "./component/iteams/crushers/crushers";
import { ChickenNuggets } from "./component/iteams/ChickenNuggets/chickenNuggets";
import { Coffie } from "./component/iteams/Coffie/coffie";
import { HomeFood } from "./component/iteams/food/HomeFood";
// import { Logout } from "./pages/Logout";

export const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Home />
			<Switch>
				<Route exact path="/" component={HomeFood} />
				<Route exact path="/chicken" component={Chicken} />
				<Route exact path="/coffie" component={Coffie} />
				<Route exact path="/chickenNuggets" component={ChickenNuggets} />
				<Route exact path="/crushers" component={Crushers} />
				<Route exact path="/mojito" component={Mojito} />
				<Route exact path="/burger" component={Burger} />

				{/* <Route exact path="/" component={HomeScreen} />
				<Route exact path="/register" component={RegisterScreen} />
				<Route exact path="/logout" component={Logout} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/bye" component={} />
				<Route exact path="/cart" component={CartScreen} />
				<Route exact path="/login" component={LoginScreen} />
				<Route exact path="/login" component={LoginScreen} /> */}
			</Switch>
		</BrowserRouter>
	);
};

// const App: React.FC = () => {
// 	const { data, loading } =useHellowQuery()
// 	if (loading) {
// 		return <div>loading...</div>;
// 	}
// 	return <div className="App">{JSON.stringify(data)}</div>;
// };

// export default App;

// const App: React.FC = () => {
// 	const { data, loading } = useHellowQuery();
// 	try {
// 		if (loading) {
// 			return <div>loading...</div>;
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// 	return <div className="App">{JSON.stringify(data?.user)}</div>;
// };
