import React from "react";
import { savedPosts } from "../posts.json";
import css from "./css/Content.module.css";
import Loader from "./Loader";
import PostItem from "./PostItem";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: savedPosts,
    };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  handleSearch = (event) => {
    this.setState({
      isLoaded: false,
    });
    let searchText = event.target.value.toLowerCase();
    let filteredPosts = savedPosts.filter(
      (post) =>
        post.name.toLowerCase().includes(searchText) ||
        post.title.toLowerCase().includes(searchText)
    );
    this.setState({
      posts: filteredPosts,
      isLoaded: true,
    });
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
            <PostItem posts={this.state.posts} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

export default Content;
