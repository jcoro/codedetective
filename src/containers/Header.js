import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Progress from './Progress';

class Header extends Component {

    render() {

        return (
            <Row bsClass="row no-gutters">
                <Col md={8} className="no-gutters">
                    <div className="header">
                        <div className="stats">
                            <div className="separator left-side">
                            </div>
                            <div
                                className="title">{this.props.activePage ? this.props.activePage.name : "Briefing"}</div>
                            <div className="separator right-side">
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="no-gutters">
                    <div className="header">
                        <Progress/>
                    </div>
                </Col>
            </Row>
        );
    }
}
;

// activePage is defined in reducers/index.js
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside Header this.props.page
    return {
        pages: state.pages,
        activePage: state.activePage,
        challenges: state.challenges,
        challengeIndex: state.challengeIndex.active_challenge,
    };
}

// Promote Panel from a component to a container.
// It needs to know about dispatch method, make it available as a prop.
export default connect(mapStateToProps)(Header);