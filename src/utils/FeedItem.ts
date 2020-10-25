interface FeedItem {
	getItems(): () => Array<any>
}

const FeedItem = {
	getItems: () => {
		return(
			fetch('http://localhost:3001/api/v1/feeds')
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