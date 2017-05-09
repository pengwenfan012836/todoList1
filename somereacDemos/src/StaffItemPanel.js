import React from 'react';
import StaffItem from './StaffItem.js';
export default class StaffItemPanel extends React.Component {
	handleDeleteList(index) {
		if (this.props.onDeleteList) {
			this.props.onDeleteList(index)
		}
	}
	showInfo(index) {
		if (this.props.onShowInfo) {
			this.props.onShowInfo(index);

		} else {
			return
		}
	}
	render() {
		let items = [];
		if (this.props.items.length === 0) {
			items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>)
		} else {
			this.props.items.forEach((v, k) => items.push(<StaffItem 
				onDeleteList={this.handleDeleteList.bind(this)}
				onShowInfo={this.showInfo.bind(this)}
				item={v} key={k} index={k} />))
		}


		return ( < div >
			<table className='itemPanel'>
			            <thead>
			            <tr>
			                <th className='itemTd'>姓名</th>
			                <th className='itemTd'>年龄</th>
			                <th className='itemTd'>身份</th>
			                <th className='itemTd'>性别</th>
			                <th className='itemTd'>操作</th>
			                </tr>
			            </thead>
			            <tbody>
			            	{items}
			            </tbody>
			          </table> < /div>

		);
	}
}