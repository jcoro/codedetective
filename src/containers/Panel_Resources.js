import React, {Component} from 'react';
import Header from './Header';
import Typist from 'react-typist';
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
                            <Typist cursor={{hideWhenDone: false}} avgTypingDelay={10}>

                                <div className="text">Greetings, Detective:</div>
                                <br/>
                                <br/>
                                <div className="text">We're hot on the trail of an international crime syndicate. "The
                                    Syndicate" as we call them, are experts in all manner of encrypted
                                    communications, and they've got agents all over the globe. We need your coding and
                                    programming expertise to crack their codes and track them down.
                                </div>
                                <br/>
                                <br/>
                                <div className="text">The EVIDENCE button to the left is where you'll find the codes we
                                    need
                                    cracked.
                                </div>
                                <br/>
                                <br/>
                                <div className="text">The CODE button to the left is where you'll be able to test your
                                    code.
                                </div>
                                <br/>
                                <br/>
                                <div className="text">The LESSON button to the left is where you'll be able to learn
                                    more
                                    skills.
                                </div>
                                <br/>
                                <br/>
                                <div className="text">The RESOURCES button to the left is where you'll be able to find
                                    links
                                    to
                                    additional resources.
                                </div>
                                <br/>
                                <br/>
                                <div className="text">Good Luck - We're counting on you.</div>
                                <br/>
                                <div className="text">- Sargent O'Malley | Gotham Police Department</div>
                            </Typist>
                        </div>
                    </Col>
                    <Col md={4} className="side-column no-gutters">
                        Side Column
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