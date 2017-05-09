import React, {
	Component,
	PropTypes
} from 'react'
import {
	connect
} from 'react-redux'
import {
	Header
} from '../components/Header'
class HeaderContainer extends Component {
	static propTypes = {
		themeColor: PropTypes.string
	}
	constructor() {
		super()
		this.state = {
			themeColor: ''
		}
	}

	render() {
		return (
			<div>
				<Header themeColor={this.props.themeColor} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}


export default connect(mapStateToProps)(HeaderContainer)