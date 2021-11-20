import React, { useEffect, useState } from "react";
import css from "./css/Content.module.css";
import Loader from "./Loader";
import PostItemAPI from "./PostItemAPI";
import axios from "axios";
import API_KEY from "../secret";

const ContentAPIHooks = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState("*");

  const fetchImages = () =>
    axios
      .get("https://pixabay.com/api/", {
        params: {
          key: API_KEY,
          q: query,
        },
      })
      .then((response) => {
        let fetchedPosts = response.data.hits;
        console.log(fetchedPosts, `count: ${fetchedPosts.length}`);
        setIsLoaded(true);
        setPosts(fetchedPosts);
      });

  const handleSearch = (event) => {
    event.preventDefault();
    let searchText = event.target.value.toLowerCase();
    setIsLoaded(false);
    setQuery(searchText);
  };

  useEffect(fetchImages, [query]);

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
        {isLoaded ? <PostItemAPI posts={posts} /> : <Loader />}
      </div>
    </div>
  );
};

export default ContentAPIHooks;
