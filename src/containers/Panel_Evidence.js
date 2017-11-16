import React, {Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Captured from './Captured';
import Typist from 'react-typist';

class EvidencePanel extends Component {

    render() {
        let evidenceHeader;
        if(this.props.challengeIndex < 5) {
            evidenceHeader = (<h1>Challenge {this.props.challengeIndex+1}</h1>);
        } else {
            evidenceHeader = (<h1>Good Job!</h1>);
        }
        return (
            <div className="screen-container">
                <Header />
                    <Row bsClass="row no-gutters" className="text-area">
                        <Col md={8} className="no-gutters">
                            <div className="panel-text-container">
                                {evidenceHeader}
                            <Typist avgTypingDelay={20}>

                                {this.props.evidence[this.props.challengeIndex].tags.map((item)=>
                                    <div className={item.className} key={item.key}>{item.content}</div>
                                )}
                            </Typist>
                            </div>
                        </Col>
                        <Col md={4} className="no-gutters">
                            <Captured/>
                        </Col>
                    </Row>
            </div>
        );
    }
}

// activePage is defined in reducers/index.js
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside EvidencePanel
    return {
        page: state.activePage,
        evidence: state.evidence,
        challengeIndex: state.challengeIndex.active_challenge,
    };
}

// Promote Panel from a component to a container.
// It needs to know about dispatch method, make it available as a prop.
export default connect(mapStateToProps)(EvidencePanel);