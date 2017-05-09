import React, {
	Component,
	PropTypes
} from 'react';
import Didcontent from "../components/Didcontent"
import {
	connect
} from 'react-redux';
class ContainerDid extends Component {
	render() {
		return (
			<div>			
				<h2>已完成：</h2>
			didContents
				{

				this.props.didContents.map((didContent,i)=>
					
					<Didcontent
					
			getDidContent = {
				didContent
			}
					key={i}/>
					)
				}	
			</div>
		)
	}
}

ContainerDid.propTypes = {
	contents: PropTypes.array,
	doingContents: PropTypes.array,
}
const mapStateToProps = (state) => {
		return {
			didContents: state.didContents,
		}
	}
	// export default ContainerDid
export default connect(mapStateToProps)(ContainerDid)