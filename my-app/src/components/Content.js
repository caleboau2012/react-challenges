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
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoaded: true }), 2000);
  }

  render() {
    return (
      <div>
        <div className={css.TitleBar}>
          <h1>My Posts</h1>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? <PostItem posts={savedPosts} /> : <Loader />}
        </div>
      </div>
    );
  }
}

export default Content;
