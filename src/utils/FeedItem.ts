interface FeedItem {
	getItems(): () => Array<any>
}

const FeedItem = {
	getItems: () => {
		return(
			fetch(`${process.env.REACT_APP_API_URL}/api/v1/feeds`)
				.then(response => response.json())
				.then(data => {
					let items: Array<any> = data.feeds.channel.item.map((item: any) => {
						item.image = data.feeds.channel.image[2]
						return item;
					});

					return items;
				})
		)
	}
}

export default FeedItem;
