import React, {
	Component,
	PropTypes
} from 'react'
import Comment from './Comment'

class CommentList extends Component {

	handleDeleteComment(index) {
		if (this.props.onDeleteComment) {
			this.props.onDeleteComment(index)
		}
	}

	render() {
		return (
			<div>
        {this.props.comments.map((comment, i) =>
          <Comment
            comment={comment}
            key={i}
            index={i}
            onDeleteComment={this.handleDeleteComment.bind(this)} />
        )}
      </div>
		)
	}
}
CommentList.propTypes = {
	comments: PropTypes.array,
	onDeleteComment: PropTypes.func
}

CommentList.defaultProps = {
	comments: []
}


export default CommentList