import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseChallenge } from '../actions/index';

class Progress extends Component {
    constructor(props) {
        super(props);
        this.chooseChallenge = this.chooseChallenge.bind(this);
    }

    chooseChallenge(index) {
        this.props.chooseChallenge(index);
    }

    render() {

        return(
            <div className="progress_container">
                <div className="progress_stage">
                    <div>Challenge: </div>
                    {this.props.array.map(i =>{
                        return (
                            <div key={i}>
                                <a onClick={()=>this.chooseChallenge(i)}>
                                    <div className="prog_div_1">
                                        <div className={this.props.challengeIndex === i ? "prog_div_2 active" : "prog_div_2"}>
                                            <span data-index={i}>{i+1}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        );
                    })}

                </div>
            </div>
        );
    }
}

// activePage is defined in reducers/index.js
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside EvidencePanel
    return {
        challengeIndex: state.challengeIndex.active_challenge,
        array: state.challengeIndex.array,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            chooseChallenge: chooseChallenge,
        }, dispatch)
}

// Promote Panel from a component to a container.

export default connect(mapStateToProps, mapDispatchToProps)(Progress);