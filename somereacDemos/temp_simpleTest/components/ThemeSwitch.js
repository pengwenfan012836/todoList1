import React, {
	Component,
	PropTypes
} from 'react'

export default class ThemeSwitch extends Component {
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
	        <button
	                 style={{ color: this.props.themeColor}}
	                 onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
	               <button
	                 style={{ color:  this.props.themeColor}}
	                 onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
	             
	      </div>
		)
	}
}