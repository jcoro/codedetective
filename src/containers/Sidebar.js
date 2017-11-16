import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectPage} from '../actions/index';
import {bindActionCreators} from 'redux';
const FontAwesome = require('react-fontawesome');

class Sidebar extends Component {
    renderList() {
        return this.props.pages.map((item) =>
            <Link to={item.link} key={item.id}>
                <li onClick={() => this.props.selectPage(this.props.pages, item.id)}

                    className={this.props.activePage && item.id === this.props.activePage.id ? 'active menu-option' : 'menu-option'}>

                        <FontAwesome name={item.icon}/>
                        <div className="menu-text">{item.name}</div>
                </li>
            </Link>
        );
    }

    render() {
        return (

            <div className="sidebar">
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside Sidebar
    // state.pages is defined in reducers/index.js
    return {
        pages: state.pages,
        activePage:state.activePage,
    };
}

// Anything returned will show up as props in Sidebar - this.props.selectPage
function mapDispatchToProps(dispatch) {
    // When selectPage is called, result is passed to all reducers.
    return bindActionCreators({selectPage: selectPage}, dispatch)
}


// Promote Sidebar from a component to a container.
// It needs to know about dispatch method, make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);