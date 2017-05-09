import React, {
	Component,
	PropTypes
} from 'react';
import Doingcontent from "../components/Doingcontent"
import {
	connect
} from 'react-redux';
import {
	init_item,
	to_did

} from '../reducers/reducers'
class ContainerDoing extends Component {
	constructor(props) {
		super(props)
	}
	handleToDid(itemIndex) {
		// 添加content到doing，并保持此时contents的localstorage
		// const doingContents = this.props.doingContents ? this.props.doingContents : [];
		// const contents = this.props.contents ? this.props.contents : [];
		// doingContents.push(contents.splice(itemIndex, 1))
		console.log(itemIndex)

		let doingContents = this.props.doingContents ? this.props.doingContents : [];
		const didContent = doingContents[itemIndex]
		doingContents = [
			...doingContents.slice(0, itemIndex),
			...doingContents.slice(itemIndex + 1)
		];
		localStorage.setItem('doingContents', JSON.stringify(doingContents));

		// 保存to_doing到localStorage
		let didContents = this.props.didContents ? this.props.didContents : [];
		didContents = [...didContents,
			didContent
		];
		localStorage.setItem('didContents', JSON.stringify(didContents));
		const to_did = this.props.to_did ? this.props.to_did : {};
		to_did(itemIndex);
	}


	render() {
		return (
			<div>			
				<h2>正在进行：</h2>
				{
				this.props.doingContents.map((doingContent,i)=>
					
					<Doingcontent
					onToDid={this.handleToDid.bind(this)}
					getDoingContent={doingContent}
					key={i}/>
					)
				}	
			</div>
		)
	}
}

ContainerDoing.propTypes = {
	contents: PropTypes.array,
	doingContents: PropTypes.array,
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
		to_did: (itemIndex) => {
			dispatch(to_did(itemIndex))
		},

	}
}


// export default ContainerHome
export default connect(mapStateToProps, mapDispatchToProps)(ContainerDoing)