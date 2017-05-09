import React, {
	Component
} from 'react'
import ComponentList from './componentList'
import ComponentInput from './componentInput'
class ComponentApp extends Component {
	constructor() {
		super();
		this.state = {
			commets: [],
		}
	}
	componentWillMount() {
		// 这里要判断一下localStorage里面有没有存东西，为空的话会报错。
		// 当渲染页面之前localStorage里面的内容需要先辈提取出来渲染
		// localStorage.clear()
		if (localStorage.getItem("commets")) {
			const commets = JSON.parse(localStorage.getItem("commets"));
			this.setState({
				commets
			})
		}


	}
	handleSubmit(commet) {
			// 判断是否没有输入合法的内容
			if (!commet) {
				return alert("请输入用户名和评论！");
			}
			if (!commet.name) {
				return alert("请输入用户名！");
			}
			if (!commet.content) {
				return alert("请输入评论内容！");
			}
			const commets = this.state.commets;
			// 把commet放在componentApp里面
			commets.push(commet);
			localStorage.setItem('commets', JSON.stringify(commets))
			this.setState({
				commets
			})


		}
		//删除评论
	handleDeleCom(index) {
		const commets = this.state.commets;
		commets.splice(index, 1);
		localStorage.setItem('commets', JSON.stringify(commets))
		this.setState({
			commets
		})
	}
	render() {
		return (
			<div className="domain">
				

				 	<ComponentInput onSubmit={this.handleSubmit.bind(this)}/>
				 	 < ComponentList  
				 	 onDeleteCom={this.handleDeleCom.bind(this)}
				 	 onGetCommets={this.state.commets}/ >
				
				
			</div>
		)

	}
}
export default ComponentApp;