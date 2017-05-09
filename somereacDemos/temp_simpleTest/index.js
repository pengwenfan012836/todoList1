import React from 'react'
import ReactDOM from 'react-dom'
import {
	createStore
} from 'redux'
import {
	Provider
} from 'react-redux'
import {
	themeReducer
} from './reducers/changeColor'
import App from './containers/App'


const store = createStore(themeReducer)

// 把 Provider 作为组件树的根节点
ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
)