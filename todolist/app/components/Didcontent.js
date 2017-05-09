import React from 'react';


class Didcontent extends React.Component {
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
        // toDId

        render() {
                const didContents = this.props.getDidContent ? this.props.getDidContent : '';
                return (
                        <div>
                        <div >
                            <input  type="checkbox" 
                            
                            name="abc" />
                            <span>{didContents}</span>
                        </div> 
                        < /div>
        )
    }
}
export default Didcontent