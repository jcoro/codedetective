import React, {Component} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-java.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
const codeText = "class CodeDetectiveApp {\n\tpublic static void main(String[] args) {\n\t\t// to print a String, use quotation marks.\n\t\tSystem.out.println(\"Hello, World!\"); \n\t}\n}";
const codeText2 = "class CodeDetectiveApp {\n\tpublic static void main(String[] args) {\n\t\t// Declaring and Initializing Variables.\n\t\tint myNumber;\n\t\tmyNumber = 5;\n\t\t//or...\n\t\tint myOtherNumber = 10;\n\t\tString myName=\"John\";\n\t\t// A char is a single letter\n\t\t// Strings are made up of chars\n\t\tchar firstInitial = 'J'\n\t}\n}";

const code = Prism.highlight(codeText, Prism.languages.java, 'java');
const code2 = Prism.highlight(codeText2, Prism.languages.java, 'java');


class LessonPanel1 extends Component {
    render() {
        return (
            <div className="screen-container">
                <Header />
                <Row bsClass="row no-gutters" className="text-area">
                    <Col md={8} className="no-gutters">
                        <div className="panel-text-container">
                            <h1>Getting Started</h1>
                            <div className="text"><p>On CodeDetective.org, you can use several different coding languages to test your code, but Java is taught in this Lesson page.</p></div>
                            <div className="text"><p>For a Java program to run, you'll need a <code
                                className="language-java">class</code> and a <code className="language-java">main(String[]
                                args)</code> method.</p></div>

                            <div className="text">Java code blocks are put inside curly braces like these: <code
                                className="language-java">&#123; &#125;</code>.
                            </div>

                            <div className="text">We can print something to the screen by using the <code
                                className="language-java">System.out.println();</code> method.
                            </div>

                            <pre className="line-numbers language-java">
                                <code className="language-java">
                                    <div dangerouslySetInnerHTML={{__html: code}}/>
                                </code>
                            </pre>

                            <div className="text">Java likes to know what type of information to expect. A <code
                                className="language-java">String</code> is made up of text or words like: <code
                                className="language-java">"Hello, World!"</code>. Strings are put in double quotation
                                marks.
                            </div>
                            <div className="text">Java has many ways to describe numbers. We'll be using a type of
                                number called an <code className="language-java">int</code>. These are regular counting
                                numbers, including 0 and negative numbers. -2, -1, 0, 1, 2, 3, 4 &hellip; are all <code
                                    className="language-java">int</code>s. <code className="language-java">String</code>
                                and <code className="language-java"> int</code> are called: datatypes.
                            </div>
                            <br />
                            <br />
                            <table>
                                <tbody>
                                <tr>
                                    <th colSpan="2">SOME DATATYPES</th>
                                </tr>
                                <tr>
                                    <td>Datatype</td>
                                    <td>Examples</td>
                                </tr>
                                <tr>
                                    <td>int</td>
                                    <td>0, 1, 2, 3</td>
                                </tr>
                                <tr>
                                    <td>String</td>
                                    <td>"Hello!", "Goodbye"</td>
                                </tr>
                                <tr>
                                    <td>char</td>
                                    <td>'A', 'b', 'c'</td>
                                </tr>
                                </tbody>
                            </table>
                            <br />
                            <br />
                            <h2>Variables</h2>
                            <div className="text">Variables are containers or "boxes" where we can store data. In Java,
                                every variable has a type. You declare a variable by placing the type first, followed by
                                a name of the variable, like this:
                            </div>

                            <pre className="line-numbers language-java">
                                <code className="language-java">
                                    <div dangerouslySetInnerHTML={{__html: code2}}/>
                                </code>
                            </pre>
                        </div>

                        <table>
                            <tbody>
                            <tr>
                                <th colSpan="2">OPERATORS</th>
                            </tr>
                            <tr>
                                <td>Operator</td>
                                <td>Examples</td>
                            </tr>
                            <tr>
                                <td>+ (Addition)</td>
                                <td>2 + 2 = 4</td>
                            </tr>
                            <tr>
                                <td>- (Subtraction)</td>
                                <td>3 - 2 = 1</td>
                            </tr>
                            <tr>
                                <td>* (Multiplication)</td>
                                <td>3 * 2 = 6</td>
                            </tr>
                            <tr>
                                <td>/ (Division)</td>
                                <td>6 / 3 = 2</td>
                            </tr>
                            <tr>
                                <td>% (Modulus or Remainder)</td>
                                <td>9 % 2 = 1</td>
                            </tr>
                            <tr>
                                <td>++ (Increment Operator)</td>
                                <td>num++ ( num + 1 )</td>
                            </tr>
                            <tr>
                                <td>-- (Decrement Operator)</td>
                                <td>num-- ( num - 1 )</td>
                            </tr>
                            <tr>
                                <td>+= (Assignment with Operators)</td>
                                <td>num += 5 ( num = num + 5 )</td>
                            </tr>
                            <tr>
                                <td>-= (Assignment with Operators)</td>
                                <td>num -= 5 ( num = num - 5 )</td>
                            </tr>
                            </tbody>
                        </table>
                        <br />
                        <br />
                        <div className="text">In the modulus example above, 2 goes into 9 four times with a REMAINDER of 1, so the answer is 1.</div>
                        <h2>Strings</h2>
                        <div className="text"></div>
                    </Col>
                    <Col md={4} className=" no-gutters">
                        <ul className="lesson-cont">
                            <li><a>Getting Started</a></li>
                            <li><a>Variables</a></li>
                            <li><a>Strings</a></li>
                            <li><a>If Statements</a></li>
                            <li><a>While Loops</a></li>
                            <li><a>Do While Loops</a></li>
                            <li><a>For Loops</a></li>
                            <li><a>Arrays and Matrices</a></li>
                            <li><a>Lesson 9</a></li>
                            <li><a>Lesson 10</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

// activePage is defined in reducers/index.js
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside LessonPanel
    return {
        page: state.activePage,

    };
}

// Promote Panel from a component to a container.
// It needs to know about dispatch method, make it available as a prop.
export default connect(mapStateToProps)(LessonPanel1);