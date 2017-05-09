import React from 'react';
import ReactDOM from 'react-dom';
import StaffHeader from './StaffHeader.js';
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import STAFF from './STAFF';
// import StaffDetai from './StaffDetail';
import './style.css'
//import StaffDetail from './StaffDetail.js';

class App extends React.Component {
		constructor() {
				super();
				this.state = {
					staff: new STAFF(),
					person: {}
				};

			}
			//增加项
		addStaffItem(item) {
				this.setState({
					staff: this.state.staff.addStaffItem(item)
				});
			}
			/*
			 * 搜索
			 */
		searchStaff(word) {
			this.setState({
				staff: this.state.staff.searchStaff(word)
			});
		}

		// 删掉项目
		handleDeleteList(index) {
				this.setState({
					staff: this.state.staff.deleteStaff(index)
				});
			}
			// 展示个人信息
		showInfo(index) {
				this.setState({
					person: this.state.staff.showStaff(index)
				});
			}
			// 筛选
		selectStaff(option) {
				this.setState({
					staff: this.state.staff.selectStaff(option)
				});
			}
			// 排序
		handlesortway(option) {
			this.setState({
				staff: this.state.staff.sortwayStaff(option)
			});
		}
		render() {
				return (<div className='appstyle' >
			<StaffHeader 
			onhandleSelect={this.selectStaff.bind(this)}
			onhandlesortway={this.handlesortway.bind(this)}
			searchStaff={this.searchStaff.bind(this)}/> < StaffItemPanel 
			onShowInfo={this.showInfo.bind(this)}
			onDeleteList={this.handleDeleteList.bind(this)}
			items={this.state.staff.staff} / >
			<StaffFooter addStaffItem={this.addStaffItem.bind(this)}/> 
			
			< /div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));