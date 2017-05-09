import React from 'react';
export default class StaffItem extends React.Component {
    handleDelete() {
        if (this.props.onDeleteList) {
            this.props.onDeleteList(this.props.index);

        } else {
            return
        }
    }
    showInfo() {
        if (this.props.onShowInfo) {
            this.props.onShowInfo(this.props.index);

        } else {
            return
        }
    }
    render() {
        let item = this.props.item;

        return (
            <tr>
            		<td className='itemTd'>{item.info.name}</td>
            	               <td className='itemTd'>{item.info.age}</td>
            	               <td className='itemTd'>{item.info.id}</td>
            	               <td className='itemTd'>{item.info.sex}</td>
            	               <td className='itemTd'>
            	                   <a className="itemBtn" onClick={this.handleDelete.bind(this)}>删除</a>
            	                   <a className="itemBtn" onClick={this.showInfo.bind(this)}>详情</a>
            	                   </td>
           		 </tr>
        );
    }
}