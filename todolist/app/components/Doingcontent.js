import React from 'react';


class Doingcontent extends React.Component {
        constructor(props) {
                super(props);
            }
            //     // 删除新建事项
            // handleDel() {
            //         const index = this.props.index ? this.props.index : 0;
            //         if (this.props.onDelItem) {
            //             this.props.onDelItem(index)
            //         }
            //     }
            //     // 新建事项to正在进行事项
            // handleToDoing() {
            //     // 删除新建事件同时添加doing事件
            //     this.handleDel()

        // }

        handleToDid() {
            // 删除新建事件同时添加doing事件
            const index = this.props.index ? this.props.index : 0;
            if (this.props.onToDid) {
                this.props.onToDid(index)
            }

        }
        render() {
                const doingcontent = this.props.getDoingContent ? this.props.getDoingContent : '';
                return (
                        <div>
                        <div >
                            <input  type="checkbox" 
                              onClick={this.handleToDid.bind(this)}
                            name="abc" />
                        
                            <span>{doingcontent}</span>
                        </div> 
                        < /div>
        )
    }
}
export default Doingcontent