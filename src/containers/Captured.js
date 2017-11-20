import React, { Component } from 'react';
import {connect} from 'react-redux';
import criminal from '../assets/images/criminal.svg';
import criminalCap from '../assets/images/criminal-cap.svg';
import kingpin from '../assets/images/kingpin.svg';
import kingpinCap from '../assets/images/kingpin-cap.svg';


class Captured extends Component {

    render() {
        let capturedText;
        let totalCompleted = 0;
        for(let i = 0; i < this.props.completed.length; i++){
            if(this.props.completed[i].isCompleted){
                totalCompleted++;
            }
        }
        if (totalCompleted < 3) {
            capturedText = (<div>WANTED:<br/> {4 - totalCompleted} Syndicate Agents <br /> 1 KingPin</div>);
        } else if (totalCompleted === 3){
            capturedText = (<div>WANTED:<br/> {4 - totalCompleted} Syndicate Agent <br /> 1 KingPin</div>);
        } else if(totalCompleted === 4){
            capturedText = (<div>WANTED:<br/> 0 Syndicate Agents <br /> 1 KingPin</div>);
        } else {
            capturedText = (<div>WANTED:<br/> 0 Syndicate Agents <br /> 0 KingPin</div>);
        }

        let capturedImages = [];
        for(let i = 0; i < this.props.completed.length; i++){
            if(this.props.completed[i].id < 4){
                capturedImages.push(
                    <img src={this.props.completed[i].isCompleted ? criminalCap : criminal} key={this.props.completed[i].id} className="criminal" alt={this.props.completed[i].id} width="75" height="75"/>
                )
            } else {
                capturedImages.push(
                    <img src={this.props.completed[i].isCompleted ? kingpinCap : kingpin} key={this.props.completed[i].id} className="criminal" alt={this.props.completed[i].id} width="75" height="75"/>
                )

            }
        }

        return(
            <div className="right-side-cap">
                {capturedText}
                {capturedImages}

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

function mapStateToProps(state) {
    return {
        challengeIndex: state.challengeIndex.active_challenge,
        array: state.challengeIndex.array,
        completed: state.completed,
    };
}

export default connect(mapStateToProps)(Captured);