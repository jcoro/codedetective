import React, {Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class ResourcesPanel extends Component {
    render() {
        return (
            <div className="screen-container">
                <Header />
                <Row bsClass="row no-gutters" className="text-area">

                    <Col md={8} className="no-gutters">
                        <div className="panel-text-container">

                                <div className="text"><a href="https://docs.oracle.com/javase/8/docs/" target="_blank" rel="noopener noreferrer">Java Documentation</a></div>
                            <br/>
                            <br/>
                            <div className="text"><a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Python Documentation</a></div>
                                <br/>
                                <br/>
                            <div className="text"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" target="_blank" rel="noopener noreferrer">JavaScript Documentation</a></div>
                            <br/>
                            <br/>
                        </div>
                    </Col>
                    <Col md={4} className="no-gutters">
                        <ul className="lesson-cont">
                            <li>Technologies used on CodeDetective.org:</li>
                            <li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
                            <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></li>
                            <li><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a></li>
                            <li><a href="https://www.hackerrank.com/api" target="_blank" rel="noopener noreferrer">HackerRank API</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

// activePage is defined in reducers/index.js
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside ResourcesPanel
    return {
        page: state.activePage,

    };
}

// Promote Panel from a component to a container.
// It needs to know about dispatch method, make it available as a prop.
export default connect(mapStateToProps)(ResourcesPanel);