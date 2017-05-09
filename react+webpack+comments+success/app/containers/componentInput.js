import React, {
	Component
} from 'react'

class ComponentInput extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			content: ''
		}
	}
	componentWillMount() {
		// 这加载页面之前先从内存里获得name；
		if (localStorage.getItem('name')) {
			const name = localStorage.getItem('name');
			this.setState({
				name
			})
		}

	}
	componentDidMount() {
		this.refs.textFocu.focus()
	}
	storageName(e) {
		// 这里用于保存name到localStorage里面
		const name = e.target.value;
		localStorage.setItem('name', name);

	}
	getName(e) {
		const name = e.target.value;
		this.setState({
			name
		})
	}

	getContent(e) {
		const content = e.target.value;
		this.setState({
			content
		})
	}
	handleSubmit() {
		const commet = {
			name: this.state.name,
			content: this.state.content,
			pushTime: new Date()
		}

		this.setState({
			commet
		})
		this.props.onSubmit(commet);
	}
	render() {
		return (
			<div className="com-input">
				<label htmlFor="User">用户：</label><input 
				value={this.state.name} 
				onBlur={this.storageName.bind(this)}
				onChange={this.getName.bind(this)}
				className="user" id="User" name="" /><br></br>
				<label htmlFor="Content">评论：</label><textarea 
				ref="textFocu"
				value={this.state.content} 
				onChange={this.getContent.bind(this)}
				rows="10" cols="70" className="textarea" id="Content"></textarea>
 				<label htmlFor="Btuuon"></label>
 				< button 

 				onClick={this.handleSubmit.bind(this)}
 				className="button" id="Btuuon" > 提f交 < /button>
			</div>
		)

	}
}

export default ComponentInput;