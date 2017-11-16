import React, {Component} from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementChallenge } from '../actions/index';


class CheckAnswer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formValue: '',
            message: '',
            activeLesson: this.props.challengeIndex,
            challenge: this.props.challenges[this.props.challengeIndex]
        };

        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ formValue: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();
        const correctAns = this.props.challenges.list[this.props.challengeIndex].answer;
        console.log(correctAns);
        const answers = this.props.challenges.list[this.props.challengeIndex].answer_feedback;

        if ( this.state.formValue.match(new RegExp(correctAns, 'i')) ) {
            console.log("CORRECT");
            this.setState({message: answers[0]});
            this.props.incrementChallenge(this.props.challengeIndex);
        } else {
            console.log("WRONG");
            this.setState({message: answers[1]});
        }
        this.setState({ value: e.target.value });
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Enter Your Answer</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder={this.props.challenges.list[this.props.challengeIndex].challenge}
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>{this.state.message}</HelpBlock>
                </FormGroup>
                <Button type="submit">
                    Submit Answer
                </Button>
            </form>
        )
    }
}
// lessons is defined in reducers/index.js
function mapStateToProps(state) {
    // console.log(state);
    // Whatever is returned will show up as props inside CodePanel this.props

    return {
        challenges: state.challenges,
        challengeIndex: state.challengeIndex.active_challenge,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            incrementChallenge: incrementChallenge,
        }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckAnswer)