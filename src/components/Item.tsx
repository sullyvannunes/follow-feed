import React from 'react';

import '../styles/Item.css';

interface Props {
  item: {
    title: string;
    link: string;
    creator: string;
    pubDate: string;
    category: Array<string>;
    guid: string;
    description: string;
    encoded: string;
    commentRss: string;
    post_id: number;
    image: {
      url: string;
      title: string;
    }
  }
}


class Item extends React.Component {
  props!: Props;

  render(): any {
    return(
      <div className="Item">
        <img src={this.props.item.image.url} alt={`${this.props.item.image.title} logo`}/>
        <strong>{this.props.item.title}</strong>
        <p>{this.props.item.description.slice(0, 250)}</p>
      </div>
    );
  }
}

export default Item;