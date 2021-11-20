import React from "react";
import css from "./css/Content.module.css";
import Loader from "./Loader";
import PostItemAPI from "./PostItemAPI";
import axios from "axios";
import API_KEY from "../secret";

class ContentAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: [],
      query: "*",
    };
  }

  fetchImages() {
    axios
      .get("https://pixabay.com/api/", {
        params: {
          key: API_KEY,
          q: this.state.query,
        },
      })
      .then((response) => {
        let fetchedPosts = response.data.hits;
        console.log(fetchedPosts, `count: ${fetchedPosts.length}`);
        this.setState({
          isLoaded: true,
          posts: fetchedPosts,
        });
      });
  }

  componentDidMount() {
    this.fetchImages();
  }

  handleSearch = (event) => {
    event.preventDefault();
    let searchText = event.target.value.toLowerCase();
    this.setState(
      {
        isLoaded: false,
        query: searchText,
      },
      this.fetchImages
    );
  };

  render() {
    return (
      <div>
        <div className={css.TitleBar}>
          <h1>My Posts</h1>
          <form>
            <label htmlFor="searchInput">Search:</label>
            <input
              onChange={this.handleSearch}
              type="search"
              id="searchInput"
            />
            <h4>Posts found: {this.state.posts.length}</h4>
          </form>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? (
            <PostItemAPI posts={this.state.posts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default ContentAPI;
