import {Component} from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
	render() {
		console.log("SearchBox render method ran");

		return (
			<input
				type="search"
				placeholder={this.props.placeholder}
				className={`search-box ${this.props.className}`}
				onChange={this.props.onChangeHandler}
			/>
		);
	}
}

export default SearchBox;
