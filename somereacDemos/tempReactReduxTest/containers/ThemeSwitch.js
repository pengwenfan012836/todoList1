import React, {
	Component,
	PropTypes
} from 'react'
import {
	connect
} from 'react-redux'
import ThemeSwitch from '../components/ThemeSwitch'
class ThemeSwitchContainer extends Component {
	static propTypes = {
		themeColor: PropTypes.string,
		onChangeColor: PropTypes.fun
	}

	handleSwitchColor(color) {
		if (this.props.onChangeColor) {
			this.props.onChangeColor(color)
		}

	}
	render() {
		return (
			<div>
	        			<ThemeSwitch 
	        			themeColor={this.props.themeColor}
	        			onChangeColor={this.handleSwitchColor.bind(this)} />
	             
	    		  </div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

		onChangeColor: (color) => {
			dispatch({
				type: 'CHANGE_COLOR',
				themeColor: color
			})
		},

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitchContainer)