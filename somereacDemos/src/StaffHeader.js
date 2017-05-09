import React from 'react';
import ReactDOM from 'react-dom';
export default class StaffHeader extends React.Component {
    handlerSearch() {
            let bar = ReactDOM.findDOMNode(this.refs.searchBar);
            let value = bar.value;
            this.props.searchStaff(value);
        }
        // 筛选
    handleSelect() {
            let selectDom = ReactDOM.findDOMNode(this.refs.hpselect);
            let option = selectDom.options[selectDom.selectedIndex].value;
            if (this.props.onhandleSelect) {
                this.props.onhandleSelect(option)
            }

        }
        // 排序
    handlesortway() {
        let sortwayDom = ReactDOM.findDOMNode(this.refs.sortway);
        let option = sortwayDom.options[sortwayDom.selectedIndex].value;
        if (this.props.onhandlesortway) {
            this.props.onhandlesortway(option)
        }
    }

    render() {
        return (
            <div >
             			<h3 style={{textAlign:'center'}}>人员管理系统</h3>
             			<table className="optHeader">
             				<tbody>
             					<tr >
             						<td className="headerTd"><input type="text" name="" 
                                                                            ref="searchBar"
                                                                             onChange={this.handlerSearch.bind(this)}
                                                                            placeholder="search" /></td>
             						<td className="headerTd">
             							<label htmlFor='idSelect'>人员筛选</label>
             							<select  id='orderSelect' ref="hpselect" onChange={this.handleSelect.bind(this)}>
             								<option value='0'>全部</option>
                                                                                              <option value='主任'>主任</option>
                                                                                                <option value='老师'>老师</option>
                                                                                                <option value='学生'>学生</option>
                                                                                                <option value='实习'>实习</option>
             							</select>
             						</td>
             						<td>
             							<label htmlFor='orderSelect'>排列方式</label>
									<select 
                                                                                                ref="sortway" onChange={this.handlesortway.bind(this)}
                                                                                                id='orderSelect'>
         							                           <option value='0'>身份</option>
         							                           <option value='1'>年龄升</option>
         							                           <option value='2'>年龄降</option>
             							    </select>
             						</td>
             					</tr>
             				</tbody>
             			</table>
           
           		 </div>
        );
    }
}