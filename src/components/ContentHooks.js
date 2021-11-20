import React, { useEffect, useState } from "react";
import { savedPosts } from "../posts.json";
import css from "./css/Content.module.css";
import Loader from "./Loader";
import PostItem from "./PostItem";

const ContentHooks = (props) => {
  let [isLoaded, setIsLoaded] = useState(false);
  let [posts, setPosts] = useState(savedPosts);

  useEffect(() => {
    console.log("Setting timeout");
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, [posts]);

  const handleSearch = (event) => {
    setIsLoaded(false);
    let searchText = event.target.value.toLowerCase();
    let filteredPosts = savedPosts.filter(
      (post) =>
        post.name.toLowerCase().includes(searchText) ||
        post.title.toLowerCase().includes(searchText)
    );
    setPosts(filteredPosts);
  };

  return (
    <div>
      <div className={css.TitleBar}>
        <h1>My Posts</h1>
        <form>
          <label htmlFor="searchInput">Search:</label>
          <input onChange={handleSearch} type="search" id="searchInput" />
          <h4>Posts found: {posts.length}</h4>
        </form>
      </div>
      <div className={css.SearchResults}>
        {isLoaded ? <PostItem posts={posts} /> : <Loader />}
      </div>
    </div>
  );
};

export default ContentHooks;
