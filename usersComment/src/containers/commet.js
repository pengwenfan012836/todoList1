import React, {
	Component
} from 'react'

class Commet extends Component {
	constructor() {
		super();
		this.state = {
			duration: ''
		}
	}
	componentWillMount() {
		this._calcuTIme();
	}
	_calcuTIme() {
		if (this.props.comment.pushTime) {
			// 把string的时间改成new Date类型的时间。
			const isstime = new Date(this.props.comment.pushTime);
			const now = new Date();
			let duration = (now.getTime() - isstime.getTime()) / 1000;
			if (duration > 24 * 60 * 60) {
				duration = `${parseInt(duration/(24*60*60),10)}天前`
			} else if (duration > 60 * 60) {
				duration = `${parseInt(duration/(60*60),10)}小时前`
			} else if (duration > 60) {
				duration = `${parseInt(duration/(60),10)}分钟前`
			} else {
				duration = `${parseInt(duration,10)}秒前`
			}
			this.setState({
				duration
			})

		}
	}
	handleDelete() {
		// 为什么要判断一下，因为你不知道onDeleteCom这个值是不是为空，不知道有没有东西存在
		if (this.props.onDeleteCom) {
			this.props.onDeleteCom(this.props.index)
		}
	}
	render() {
		// 获得commets对象；
		const commet = this.props.comment;
		return (

			<div>
				<div>
					<span className="userName">{commet.name} :</span>
					<span className="content">{commet.content}</span>
				</div>
				<div className="comDel">
					<span className="pushTime">{this.state.duration}</span>
					<span 
					onClick={this.handleDelete.bind(this)}
					className="deletCommet">删除</span>
				</div>
				
			</div>
		)

	}
}

export default Commet;