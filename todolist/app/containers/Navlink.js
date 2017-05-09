import React from 'react';
import {
    Link
} from 'react-router';

class NavLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <Link {...this.props} activeClassName="active" />
            </div>
        );
    }
}
export default NavLink