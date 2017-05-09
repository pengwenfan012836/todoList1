import React, {
	Component
} from 'react'
import Commet from './commet'
class ComponentList extends Component {
	static defaultProps = {
		onGetCommets: ''
	}
	handleDeleteCom(index) {
		if (this.props.onDeleteCom) {
			this.props.onDeleteCom(index);
}
	}
	render() {


		return (
			<div  className="commets">
				        {this.props.onGetCommets.map((comment, i) =>
				          <Commet comment={comment} 
				          onDeleteCom={this.handleDeleteCom.bind(this)}
				          index={i}
				          key={i} />
				   
				        )}
   				  </div>
		)



	}
}

export default ComponentList;