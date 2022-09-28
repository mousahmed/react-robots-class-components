import {Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		console.log("constructor method ran");
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		console.log("componentDidMount method ran");
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) =>
				this.setState(
					() => {
						return {
							monsters: users,
						};
					},
					() => {
						console.log(this.state.monsters);
					}
				)
			);
	}
	onSearchChange = (event) => {
		const searchField = event.target.value.toLowerCase();

		this.setState(() => {
			return {
				searchField,
			};
		});
	};

	render() {
		console.log("render method ran");
		const {monsters, searchField} = this.state;
		const {onSearchChange} = this;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<h1 className="app-title">Monsters Rolodex</h1>
				<SearchBox
					onChangeHandler={onSearchChange}
					placeholder="Search monsters"
					className="search-box"
				/>

				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
