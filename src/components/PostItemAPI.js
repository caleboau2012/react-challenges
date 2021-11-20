import css from "./css/Content.module.css";

const PostItemAPI = (props) =>
  props.posts.map(({ id, tags, type, webformatURL, user }) => (
    <div key={id} className={css.SearchItem}>
      <p>Artwork Type: {type}</p>
      <p>Artist: {user}</p>
      <img src={webformatURL} alt={user} />
      <p>{tags}</p>
    </div>
  ));

export default PostItemAPI;
