import React from 'react'
import {savedPosts} from '../posts.json'
import css from './css/Content.module.css'
import PostItem from './PostItem'

class Content extends React.Component {
    constructor(props) {
        super(props)
        console.log(savedPosts)
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                </div>
                <div className={css.SearchResults}>
                    <PostItem posts={savedPosts} />
                </div>
            </div>
        )
    }
}

export default Content