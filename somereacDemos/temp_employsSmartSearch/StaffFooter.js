import React from 'react';
import ReactDOM from 'react-dom';
export default class StaffFooter extends React.Component {
	handlerAddClick(evt) {
		evt.preventDefault();
		// <!-- alert('') -->
		// 获得真实的dom
		let item = {};
		let addForm = ReactDOM.findDOMNode(this.refs.addForm);
		let sex = addForm.querySelector('#staffAddSex');
		let id = addForm.querySelector('#staffAddId');

		item.name = addForm.querySelector('#staffAddName').value.trim();
		item.age = addForm.querySelector('#staffAddAge').value.trim();
		item.descrip = addForm.querySelector('#staffAddDescrip').value.trim();
		item.sex = sex.options[sex.selectedIndex].value;
		item.id = id.options[id.selectedIndex].value;

		/*
		 *表单验证
		 */
		// 不能为空
		if (item.name === '' || item.age === '' || item.descrip === '') {
			let tipsUnDone = ReactDOM.findDOMNode(this.refs.tipsUnDone);
			tipsUnDone.style.display = 'block';
			// 要让它等会消失，可以使用一个setTimeout语句。
			setTimeout(() => tipsUnDone.style.display = 'none', 1000)
			return
		}
		// 不能舒服非法数字
		let numReg = /^\d+$/;
		if (!numReg.test(item.age) || parseInt(item.age, 10) > 150) {
			let tips = ReactDOM.findDOMNode(this.refs.tipsUnAge);
			tips.style.display = 'block';
			setTimeout(function() {
				tips.style.display = 'none';
			}, 1000);
			return;
		}

		this.props.addStaffItem(item);
		addForm.reset();

		// 输入正确值之后添加
		let tips = ReactDOM.findDOMNode(this.refs.tips);
		tips.style.display = 'block';
		setTimeout(function() {
			tips.style.display = 'none';
		}, 1000);
		return;

	}
	render() {
		return (
			<div>
				<h4 style={{textAlign:"center"}}>人员新增</h4> < hr / >
				<form ref='addForm' className="addForm">
           			<div>
					<label htmlFor='staffAddName' style={{'display': 'block'}}>姓名</label>
					<input ref='addName' id='staffAddName' type='text' placeholder='Your Name'/>
           			</div>
           			<div>
           			  <label htmlFor='staffAddAge' style={{'display': 'block'}}>年龄</label>
           			  <input ref='addAge' id='staffAddAge' type='text' placeholder='Your Age(0-150)'/>
           			</div>
           			<div>
           			<label htmlFor='staffAddSex' style={{'display': 'block'}}>性别</label>
           			<select ref='addSex' id='staffAddSex'>
           			  <option value='男'>男</option>
           			  <option value='女'>女</option>
           			</select>
           			</div>
           			<div>
           			  <label htmlFor='staffAddId' style={{'display': 'block'}}>身份</label>
           			  <select ref='addId' id='staffAddId'>
           			    <option value='主任'>主任</option>
           			    <option value='老师'>老师</option>
           			    <option value='学生'>学生</option>
           			    <option value='实习'>实习</option>
           			  </select>
           			</div>
           			<div>
           				<label htmlFor='staffAddDescrip' style={{'display': 'block'}}>个人描述</label>
           				  <textarea ref='addDescrip' id='staffAddDescrip' type='text'></textarea>
           			</div>
           			<div>
           				<p ref="tips" className='tips' >提交成功</p>
           				   <p ref='tipsUnDone' className='tips'>请录入完整的人员信息</p>
           				   <p ref='tipsUnAge' className='tips'>请录入正确的年龄</p>
           				<button onClick={this.handlerAddClick.bind(this)}>提交</button>
           			</div>
           			</form>
          			</div>
		)
	}
}