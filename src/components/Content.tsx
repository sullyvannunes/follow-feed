import React from "react";

import FeedItem from "../utils/FeedItem";
import Item from "./Item";
import { Grid, Cell } from 'react-foundation';

import '../styles/Content.css';
import 'foundation-sites/dist/css/foundation.min.css';

interface State {
	items: Array<any>
}

class Content extends React.Component {
	state: State

	constructor(props: any) {
		super(props);

		this.getItemComponents = this.getItemComponents.bind(this);

		this.state = {
			items: []
		};
	}

	componentDidMount(): any {
		FeedItem.getItems()
			.then(items => {
				this.setState({
					items: items
				});
			});
	}

	getItemComponents(): Array<object> {
		let grids: Array<object> = [];

		for(let i: number = 0; i < this.state.items.length; i += 4) {
			grids.push(
				this.state.items.slice(i, i + 4).map((item, index) => {
					return (
						<Cell small={12} medium={6} large={3}>
							<Item key={index} item={item} /> 
						</Cell>
					);
				})
			);
		}

		return grids.map((item, index) => {
			return(
				<Grid key={index}>
					{ item }
				</Grid>
			);
		});
	}

	render(): any {
		const items = this.getItemComponents();

		return(
			<div className="Content">
				{items}
			</div>
		);
	}
}

export default Content;
