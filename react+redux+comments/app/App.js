import React from 'react'
import ReactDOM from 'react-dom'
// import {
// 	createStore
// } from 'redux'
import {
	Provider
} from 'react-redux'
// import redures from './Redures/Reducers'
import ContainersApp from './Containers/ContainersApp'
import './index.css'


// const store = createStore(redures);

ReactDOM.render(

	<Provider >
		<ContainersApp />
	</Provider>, document.getElementById('root')
)