import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';

import Commet from "../components/Commet"
import {
	init_item,
	del_item,
	to_doing,
	to_did

} from '../reducers/reducers'

class ContainerNewItem extends Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this._getContents();
	}
	_getContents() {
			// 初始化contents,doingContents
			const contents = localStorage.getItem('contents') ? JSON.parse(localStorage.getItem('contents')) : []
			const doingContents = localStorage.getItem('doingContents') ? JSON.parse(localStorage.getItem('doingContents')) : []
			const didContents = localStorage.getItem('didContents') ? JSON.parse(localStorage.getItem('didContents')) : []

			// 这里暂时给didContents一个空对象
			this.props.init_item(contents, doingContents, didContents)
		}
		// 删除
	handleDel(itemIndex) {
			// 删除content，并保持此时contents的localstorage
			let contents = this.props.contents ? this.props.contents : [];
			contents = [
				...contents.slice(0, itemIndex),
				...contents.slice(itemIndex + 1)
			];
			localStorage.setItem('contents', JSON.stringify(contents));

			const del_item = this.props.del_item ? this.props.del_item : {};
			del_item(itemIndex);


		}
		// toDoing
	handleToDoing(itemIndex) {
		// 添加content到doing，并保持此时contents的localstorage
		// const doingContents = this.props.doingContents ? this.props.doingContents : [];
		// const contents = this.props.contents ? this.props.contents : [];
		// doingContents.push(contents.splice(itemIndex, 1))

		let contents = this.props.contents ? this.props.contents : [];
		const content = contents[itemIndex]
		contents = [
			...contents.slice(0, itemIndex),
			...contents.slice(itemIndex + 1)
		];
		localStorage.setItem('contents', JSON.stringify(contents));

		// 保存to_doing到localStorage
		let doingContents = this.props.doingContents ? this.props.doingContents : [];
		doingContents = [...doingContents,
			content
		];
		localStorage.setItem('doingContents', JSON.stringify(doingContents));
		const to_doing = this.props.to_doing ? this.props.to_doing : {};
		to_doing(itemIndex);
	}

	render() {
		return (
			<div>			
				<h2>新建事项：</h2>
				{
					this.props.contents.map((content,i)=>
						<Commet 
						onToDoing={this.handleToDoing.bind(this)}
						onDelItem={this.handleDel.bind(this)}
						getContent={content}
						key={i}
						index = {
							i
						}
			/>
					)		
				}

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		contents: state.contents,
		doingContents: state.doingContents,
		didContents: state.didContents,

	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		init_item: (contents, doingContents, didContents) => {
			dispatch(init_item(contents, doingContents, didContents))
		},
		del_item: (itemIndex) => {
			dispatch(del_item(itemIndex))
		},
		to_doing: (itemIndex) => {
			dispatch(to_doing(itemIndex))
		}

	}
}


// export default ContainerHome
export default connect(mapStateToProps, mapDispatchToProps)(ContainerNewItem)