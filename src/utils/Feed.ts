interface Feed {
  getFeeds(): () => Promise<any>
}

export const Feed = {
  getFeeds: (): Promise<any> => {
    return (
      fetch('http://localhost:3001/api/v1/feeds')
        .then(response => response.json())
    )
  }
};

export default Feed;