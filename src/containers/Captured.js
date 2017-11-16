import React, { Component } from 'react';
import {connect} from 'react-redux';
import criminal from '../assets/images/criminal.svg';
import criminalCap from '../assets/images/criminal-cap.svg';
import kingpin from '../assets/images/kingpin.svg';
import kingpinCap from '../assets/images/kingpin-cap.svg';


class Captured extends Component {

    render() {
        let capturedText;
        if (this.props.challengeIndex < 3) {
            capturedText = (<div>WANTED:<br/> {4 - this.props.challengeIndex} Syndicate Agents <br /> 1 KingPin</div>);
        } else if (this.props.challengeIndex === 3){
            capturedText = (<div>WANTED:<br/> {4 - this.props.challengeIndex} Syndicate Agent <br /> 1 KingPin</div>);
        } else if(this.props.challengeIndex === 4){
            capturedText = (<div>WANTED:<br/> 0 Syndicate Agents <br /> 1 KingPin</div>);
        } else {
            capturedText = (<div>WANTED:<br/> 0 Syndicate Agents <br /> 0 KingPin</div>);
        }
        return(
            <div className="right-side-cap">
                {capturedText}
                {this.props.array.map(i =>{
                    return (
                        <img src={i<=this.props.challengeIndex?criminalCap:criminal} key={i} className="criminal" alt={i} width="75" height="75" />
                    );
                })}
                {this.props.challengeIndex !== 5 ?
                    <img src={kingpin} className="criminal" alt="kingpin" width="75" height="75"/> :
                    <img src={kingpinCap} className="criminal" alt="kingpin" width="75" height="75"/>
                }
                <div>FOR:</div>
                <ul>
                    <li>Cyber Hacking</li>
                    <li>Money Laundering</li>
                    <li>Securities Fraud</li>
                </ul>
                <div>LOCATION: Global</div>
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

// Promote Panel from a component to a container.
// It needs to know about dispatch method, make it available as a prop.
export default connect(mapStateToProps)(Captured);