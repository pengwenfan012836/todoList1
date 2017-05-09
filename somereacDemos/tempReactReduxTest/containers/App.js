import React, {
	Component
} from 'react'
import Header from './Header'
import Content from './Content'

export default class App extends Component {
	static propTypes = {

	}
	render() {
		return (
			<div>
				<Header />
				<Content />
			</div>
		)
	}
}