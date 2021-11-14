import css from './css/Content.module.css'

const PostItem = (props) => (
    props.posts.map(({title, name, image, description}) => (
        <div key={title} className={css.SearchItem}>
            <p>{title}</p>
            <p>{name}</p>
            <img src={image} alt={title}/>
            <p>{description}</p>
        </div>
    ))
)

export default PostItem