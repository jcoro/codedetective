import React, {Component} from 'react';
import Header from './Header';
import LanguagePicker from '../components/LanguagePicker';
import CheckAnswer from '../containers/CheckAnswer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {fetchPostsIfNeeded} from '../actions/index';
import {updateToNewCode} from '../actions/index';
import {changeLanguage} from '../actions/index';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/javascript';
import 'brace/mode/io';
import 'brace/theme/monokai';
import 'brace/theme/github';


class CodePanel extends Component {

    constructor(props) {
        super(props);

        this.updateCode = this.updateCode.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showAnswer = this.showAnswer.bind(this);
        this.showHint = this.showHint.bind(this);
        this.showDefault = this.showDefault.bind(this);
    }

    showAnswer(event) {
        event.preventDefault();
        let answer = this.props.code.defaults[this.props.languageIndex][this.props.challengeIndex].code;
        this.props.updateToNewCode(answer);
    };

    showHint(event) {
        event.preventDefault();
        let hint = this.props.code.defaults[this.props.languageIndex][this.props.challengeIndex].code_hint;
        this.props.updateToNewCode(hint);
    };

    showDefault(event) {
        event.preventDefault();
        let default_code = this.props.code.defaults[this.props.languageIndex][this.props.challengeIndex].default_code;
        this.props.updateToNewCode(default_code);
    };

    handleChange = (value) => {
        // If the user has already changed the code, userSubmitted will not
        // be null, and the code will remain when the user changes language.

        let code = this.props.code.userSubmitted ?
            this.props.code.userSubmitted :
            this.props.code.defaults[this.props.languageCodes.indexOf(value)][this.props.challengeIndex].default_code;

        this.props.changeLanguage(value);
        this.props.updateToNewCode(code);
    };

    updateCode(newCode) {
        this.props.updateToNewCode(newCode);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchPostsIfNeeded();
    }

    render() {

        return (

            <div className="screen-container">
                <Header />
                <Row bsClass="row no-gutters" className="text-area">
                    <Col md={12} className="no-gutters">
                        <div className="panel-text-container">
                            <div>{this.props.handleChange}</div>
                            <LanguagePicker value={this.props.languageCodes.selectedLanguage}
                                            onChange={this.handleChange}
                                            options={this.props.languageCodes}/>
                            <div className="show-code"><Button onClick={this.showHint}>Show Hint</Button></div>
                            <div className="show-code"><Button onClick={this.showAnswer}>Show Answer</Button></div>
                            <div className="show-code"><Button onClick={this.showDefault}>Show Default</Button></div>
                            <div>Code Editor:</div>
                            <form onSubmit={this.onFormSubmit}>
                                <AceEditor
                                    showPrintMargin={false}
                                    mode={this.props.selectedLanguage.toLowerCase()}
                                    theme="monokai"
                                    onChange={this.updateCode}
                                    name="editor"
                                    value={this.props.code.userSubmitted ? this.props.code.userSubmitted : this.props.code.defaults[this.props.languageIndex][this.props.challengeIndex].default_code}
                                    editorProps={{$blockScrolling: Infinity}}
                                    fontSize="16px"
                                    width="100%"
                                    height="500px"
                                    wrapEnabled={true}
                                />

                                <Button type="submit" className=" codeSubmit">Compile Code</Button>
                            </form>
                        </div>

                        <div className="panel-text-container">

                            <div>Output:</div>
                            <div className="output">
                                {(this.props.compiledCodeObj.isFetching)
                                    ?
                                    <div>Please Wait. Your Code is Compiling...</div>
                                    :
                                    <div>{this.props.compiledCodeObj.compiledCode}</div>
                                }
                            </div>
                            <CheckAnswer />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

// lessons is defined in reducers/index.js
function mapStateToProps(state) {
//console.log(state.languageCodes.selectedLanguage);
    // Whatever is returned will show up as props inside CodePanel this.props

    return {
        challenges: state.challenges,
        code: state.code,
        challengeIndex: state.challengeIndex.active_challenge,
        compiledCodeObj: {
            compiledCode: state.compiledCodeObj.compiledCode.toString(),
            isFetching: state.compiledCodeObj.isFetching
        },
        languageCodes: state.languageCodes.codes,
        selectedLanguage: state.languageCodes.selectedLanguage,
        languageIndex: state.languageCodes.codes.indexOf(state.languageCodes.selectedLanguage)
    };
}

// Anything returned will show up as props in Panel - this.props.blah
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchPostsIfNeeded: fetchPostsIfNeeded,
            updateToNewCode: updateToNewCode,
            changeLanguage: changeLanguage,
        }, dispatch)
}

// Promote Panel from a component to a container.

export default connect(mapStateToProps, mapDispatchToProps)(CodePanel);