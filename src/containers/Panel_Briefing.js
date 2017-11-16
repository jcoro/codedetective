import React, {Component} from 'react';
import Header from './Header';
import Typist from 'react-typist';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap'
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Captured from './Captured';

class BriefingPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typing: false,
        };
        this.start = this.start.bind(this);
    }

    start = () => {
        this.setState({typing: true});
    };

    render() {
        return (
            <div className="screen-container">
                <Header />
                <Row bsClass="row no-gutters" className="text-area">
                    <Col md={8} className="no-gutters">
                        <div className="panel-text-container">

                            <div className="text">Hello, Detective. <br /> The Capital City Police Department needs your coding expertise. <br /> Click the button below to begin your briefing.
                            </div>
                            <br/>
                            <Button onClick={this.start}>Get Briefing</Button>
                            <br/>
                            <br/>
                            {this.state.typing ?
                                <Typist cursor={{hideWhenDone: false}} avgTypingDelay={10}>
                                    <div className="text">We're hot on the trail of an international crime syndicate.
                                        "The
                                        Syndicate" as we call them, are experts in all manner of encrypted
                                        communications, and they've got agents all over the globe. We need your coding
                                        and
                                        programming expertise to crack their codes and track them down.
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="text">The EVIDENCE button to the left is where you'll find the codes
                                        we need
                                        cracked.
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="text">The CODE button to the left is where you'll be able to test
                                        your code.
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="text">The LESSON button to the left is where you'll be able to learn
                                        more
                                        skills.
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="text">The RESOURCES button to the left is where you'll be able to
                                        find links
                                        to
                                        additional resources.
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="text">Good Luck - We're counting on you.</div>
                                    <br/>
                                    <div className="text">- Sargent O'Malley | Capital City Police Department</div>
                                </Typist>
                                : ''}

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
    // Whatever is returned will show up as props inside HomePanel
    return {
        page: state.activePage,

    };
}

// Promote Panel from a component to a container.
// It needs to know about dispatch method, make it available as a prop.
export default connect(mapStateToProps)(BriefingPanel);