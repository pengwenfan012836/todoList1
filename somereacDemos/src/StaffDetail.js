import React from 'react';
// import ReactDOM from 'react-dom';
export default class StaffDetail extends React.Component {
	constructor() {
		super();
		this.state = {
			staffDetail: {
				info: {
					name: "",
					age: '',
					descrip: ''

				}
			}
		}
	}
	render() {
		let staffDetail = this.state.staffDetail;
		let staffDetail.info.name = this.props.getInfo ? this.props.getInfo.info.name : '';
		let staffDetail.info.age = this.props.getInfo ? this.props.getInfo.info.age : '';
		let staffDetail.info.descrip = this.props.getInfo ? this.props.getInfo.info.descrip : '';
		return (
			<div className="overLay">
			            <h4 style={{'text-align':'center'}}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h4>
			            <hr/>
			            <table ref="editTabel">
			              <tbody>
			                <tr>
			                  <th>姓名</th>
			                  <td><input id='staffEditName' type="text" defaultValue={staffDetail.info.name}></input></td>
			                </tr>
			                <tr>
			                  <th>年龄</th>
			                  <td><input id='staffEditAge' type="text" defaultValue={staffDetail.info.age}></input></td>
			                </tr>
			                <tr>
			                  <th>性别</th>
			                  <td>
			                    <select ref='selSex' id='staffEditSex'>
			                      <option value="男">男</option>
			                      <option value="女">女</option>
			                    </select>
			                  </td>
			                </tr>
			                <tr>
			                  <th>身份</th>
			                  <td>
			                    <select ref="selId" id='staffEditId'>
			                      <option value="主任">主任</option>
			                      <option value="老师">老师</option>
			                      <option value="学生">学生</option>
			                      <option value="实习">实习</option>
			                    </select>
			                  </td>
			                </tr>
			                <tr>
			                  <th>个人描述</th>
			                  <td><textarea id='staffEditDescrip' type="text" defaultValue={staffDetail.info.descrip}></textarea></td>
			                </tr>
			              </tbody>
			            </table>
			            <p ref='Dtips' className='tips'>修改成功</p>
			            <p ref='DtipsUnDone' className='tips'>请录入完整的人员信息</p>
			            <p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
			            <button>完成</button>
			            <button>关闭</button>
			          </div>
		)
	}
}