import React, {
	Component
} from 'react'
import ReactDOM from 'react-dom'
import ContainersInput from './ContainersInput'
import ContainersList from './ContainersList'


class ContainersApp extends Component {
	render() {
		return (
			<div className='wrapper'>
				<ContainersInput />
				<ContainersList />
			</div>
		)

	}
}

export default ContainersApp