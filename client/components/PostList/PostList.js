import React from 'react'
import {render} from 'react-dom'
import PostListItem from '../PostListItem'

class PostList extends React.Component {

    scrollToBottom() {
        const scrollHeight = this.postList.scrollHeight;
        const height = this.postList.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.postList.scrollTop = maxScrollTop > 0
            ? maxScrollTop
            : 0;
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    render() {
        const list = (this.props.user_posts.posts.map((post, index) => <PostListItem key={index.toString()} post={post}/>))
        return (
            <ul
                className="mdl-list mdl-message-list"
                ref={(ul) => {
                this.postList = ul;
            }}>
                {list}
            </ul>
        )
    }
}
export default PostList