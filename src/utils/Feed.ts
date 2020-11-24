interface Feed {
  getFeeds(): () => Promise<any>
}

export const Feed = {
  getFeeds: (): Promise<any> => {
    return (
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/feeds`)
        .then(response => response.json())
    )
  }
};

export default Feed;
