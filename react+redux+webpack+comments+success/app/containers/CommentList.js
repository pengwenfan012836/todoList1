import React, {
	Component,
	PropTypes
} from 'react'
import {
	connect
} from 'react-redux'
import CommentList from '../components/CommentList'
import {
	initComments,
	deleteComment
} from '../reducers/comments'

// CommentListContainer
// 一个 Smart 组件，负责评论列表数据的加载、初始化、删除评论
// 沟通 CommentList 和 state
class CommentListContainer extends Component {

	componentWillMount() {
		// componentWillMount 生命周期中初始化评论
		this._loadComments()
	}

	_loadComments() {
		// 从 LocalStorage 中加载评论
		let comments = localStorage.getItem('comments')
		comments = comments ? JSON.parse(comments) : []
			// this.props.initComments 是 connect 传进来的,
			//通过看前面的底层逻辑代码应该就清楚，这里的props从哪里来的conect是一个高阶组件
			//它里面就包含有我的这个类。
			// 可以帮我们把数据初始化到 state 里面去
			// 这个地方实际上已经触发了dispatch，监听系统，然后后面的重新渲染。
		this.props.initComments(comments)
	}

	handleDeleteComment(index) {
		const {
			comments
		} = this.props
			// props 是不能变的，所以这里新建一个删除了特定下标的评论列表
			// 这一步的目的是为了下面保存到localStorage，真正起及时
			//删除作用的是下下买了的if语句
		const newComments = [
				...comments.slice(0, index),
				...comments.slice(index + 1)
			]
			// 保存最新的评论列表到 LocalStorage
		localStorage.setItem('comments', JSON.stringify(newComments))
		if (this.props.onDeleteComment) {
			// this.props.onDeleteComment 是 connect 传进来的
			// 会 dispatch 一个 action 去删除评论
			this.props.onDeleteComment(index)
		}
	}

	render() {
		return (
			<CommentList
        comments={this.props.comments}
        onDeleteComment={this.handleDeleteComment.bind(this)} />
		)
	}
}
CommentListContainer.propTypes = {
	comments: PropTypes.array,
	initComments: PropTypes.func,
	onDeleteComment: PropTypes.func
}

// 评论列表从 state.comments 中获取
const mapStateToProps = (state) => {
	return {
		comments: state.comments
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// 提供给 CommentListContainer
		// 当从 LocalStorage 加载评论列表以后就会通过这个方法
		// 把评论列表初始化到 state 当中
		initComments: (comments) => {
			dispatch(initComments(comments))
		},
		// 删除评论
		onDeleteComment: (commentIndex) => {
			dispatch(deleteComment(commentIndex))
		}
	}
}

// 将 CommentListContainer connect 到 store
// 会把 comments、initComments、onDeleteComment 传给 CommentListContainer
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentListContainer)