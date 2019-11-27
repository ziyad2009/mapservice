import React from 'react'
import {render} from 'react-dom'

class PostListItem extends React.Component {
    createMarkup() {
        return {
            __html: '<img style="height:157px; width:173px;" src="http://graph.facebook.com/v2.5/' + this.props.post.profile_number + '/picture?height=200&height=200"></img>'
        };
    };
    render() {
        return (
            <li className="mdl-list__item">
                <div className="mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__media">
                        <div dangerouslySetInnerHTML={this.createMarkup()}/>
                    </div>
                    <div className="mdl-card__supporting-text">
                        {this.props.post.from}
                    </div>
                    <div className="mdl-card__supporting-text">
                        {this.props.post.post}
                    </div>
                </div>
            </li>
        )
    }
}

export default PostListItem