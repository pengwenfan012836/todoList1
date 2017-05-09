import React from 'react';


class Commet extends React.Component {
    constructor(props) {
            super(props);
        }
        // 删除新建事项
    handleDel() {
            const index = this.props.index ? this.props.index : 0;
            if (this.props.onDelItem) {
                this.props.onDelItem(index)
            }
        }
        // 新建事项to正在进行事项
    handleToDoing() {
        // 删除新建事件同时添加doing事件
        const index = this.props.index ? this.props.index : 0;
        if (this.props.onToDoing) {
            this.props.onToDoing(index)
        }

    }

    render() {
        const content = this.props.getContent ? this.props.getContent : '';
        return (
            <div className="newItem">
                    <div >
                                  <label htmlFor='contents'>
                                             <input type="checkbox"
                                    onClick={this.handleToDoing.bind(this)}
                                    name="abc"
                                    id="contents"
                                     />
                                    <span>{content}</span>
                                  </label> 
                                    
                    <span className="float-right del-button" onClick={this.handleDel.bind(this)}>删除</span>
                                    

                                </div>   
            </div>
        );
    }
}
export default Commet