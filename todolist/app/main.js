import React from 'react';
import ReactDOM from 'react-dom';
// 添加路由
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';
// 添加redux框架
import {
    createStore
} from 'redux';
// 添加react-redux库
import {
    Provider
} from 'react-redux';
import reducer from './reducers/reducers'
import ContainerHome from './containers/ContainerHome'
import ContainerAll from './containers/ContainerAll'
import ContainerNewItem from './containers/ContainerNewItem'
import ContainerDoing from './containers/ContainerDoing'
import ContainerDid from './containers/ContainerDid'
import './main.css'

// 创建一个store
const store = createStore(reducer)
    // 简历路由
ReactDOM.render(
    <Provider store={store}>
            <Router history={browserHistory}>
                <Route path='/' component={ContainerAll}>
                            <IndexRoute component={ContainerHome}/>
                            <Route path="/newitem" component={ContainerNewItem}/>
                            <Route path="/doimg" component={ContainerDoing}/>
                            <Route path="/did" component={ContainerDid}/>
                </Route>
            </Router>
        </Provider>,

    document.body.appendChild(document.createElement('div')))