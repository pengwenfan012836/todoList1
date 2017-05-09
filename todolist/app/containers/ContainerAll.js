import React, {
	Component,
	PropTypes
} from 'react';
import NavLink from './Navlink';
import {
	connect
} from 'react-redux';
import {
	add_item,
	init_item
} from '../reducers/reducers'

class ContainerAll extends Component {
	constructor(props) {
		super(props)
		this.state={
			search:1
		}
	}
	onSubmitContents() {
		const content = this.refs.content.value;
		if (!content) return alert('请输入内容')
		if (content.length > 20) return alert('请输入不超过20的字符')

		const contents = localStorage.getItem('contents') ? JSON.parse(localStorage.getItem('contents')) : [];
		contents.push(content)
			// 添加content	
		localStorage.setItem('contents', JSON.stringify(contents));
		if (this.props.add_item) {
			this.props.add_item(content)
		}
	}

	// Search
	onSearch() {
		// console.log(this.refs.content.value)
		const content = this.refs.content.value.trim()
		if (!content) return alert('请输入内容')
		if (content.length > 20) return alert('请输入不超过20的字符')

		let contents = this.props.contents ? this.props.contents : [];
		let doingContents = this.props.doingContents ? this.props.doingContents : [];
		let didContents = this.props.didContents ? this.props.didContents : [];
		const allConents = [...contents, ...doingContents, ...didContents]

		// if (doingContents.join('').indexOf(content) > -1) {
		// 	for(i in doingContents){

		// 	}
		// }


	}

	render() {
		// doingitems

		const newsNum = (this.props.contents).length
		const doingNum = (this.props.doingContents).length
		const didNum = (this.props.didContents).length
		const allNum = newsNum + doingNum + didNum
		return (
			<div className='withborder'>
				<ul className="beiwang">
					<li className='memorandum'>备忘</li>
					<li><input 
					ref='content'
					placeholder="新建事项(20字以内)" className='submit' /></li>
					<li className='add'>
					<button onClick={this.onSubmitContents.bind(this)}>添加</button>
					<button onClick={this.onSearch.bind(this)}>搜索</button>
					</li>
					
				</ul>
				<div className="clear"></div>
				 <ul role='nav' className="linklItems">
						<li><NavLink to="/" onlyActiveOnIndex={true}>全部<span>({allNum})</span></NavLink></li>
						<li><NavLink to="/newitem" >新建事项<span>({newsNum})</span></NavLink></li>
						<li><NavLink to="/doimg" >正在进行<span>({doingNum})</span></NavLink></li>
						<li><NavLink to="/did" >已完成<span>({didNum})</span></NavLink></li>
				</ul>
				<div className="clear"></div>
				{this.props.children}

			</div>
		)
	}
}
ContainerAll.propTypes = {
	contents: PropTypes.array,
}
const mapStateToProps = (state) => {
	return {
		contents: state.contents,
		doingContents: state.doingContents,
		didContents: state.didContents
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		add_item: (content) => {
			dispatch(add_item(content))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerAll)