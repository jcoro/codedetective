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

const codeText3 ="public class StringLesson {\n\n\tpublic static void main(String[] args) {\n\n\t\tString myString = \"Hello, I am a String!\";\n\n\t\tint num = myString.length(); // num is 21\n\n\t\tint index = myString.charAt(0); // index is H\n\n\t\t// We can combine Strings like this:\n\t\tString longString = myString + \" I am now LONGER\";\n\t\t// Don't forget the space!\n\n\t\tSystem.out.println(longString);\n\t\t// Prints: Hello, I am a String! I am now LONGER\n\n\t\t// We can build Strings with a StringBuilder\n\t\tStringBuilder builder = new StringBuilder();\n\n\t\t// The .append(char c) method takes a char and adds it\n\n\t\tbuilder.append('a');\n\t\tbuilder.append('b');\n\t\tbuilder.append(myString.charAt(2));\n\n\t\t// We can convert the builder to a String and print it\n\t\tSystem.out.println(builder.toString());\n\n\t\t// .indexOf() returns the first index or the char\n\t\tint stringIndex = myString.indexOf('l');\n\n\t\t// .lastIndexOf() returns the last index of the char\n\t\tint lastStringIndex = myString.lastIndexOf('l');\n\n\t\tSystem.out.println(stringIndex);\n\t\tSystem.out.println(lastStringIndex);\n\t}\n\n}";

const codeText4 = "public class LoopsLesson {\n\n\tpublic static void main(String[] args) {\n\n\t\tint number1 = 1;\n\t\tint number2 = 2;\n\t\tint number3 = 3;\n\t\tString word = \"Hello\";\n\n\t\t// If something is true...\n\t\tif (number1 < 3){\n\t\t\t// Run what's in the curly braces\n\t\t\tSystem.out.println(\"Yup, number1 is less than 3\");\n\t\t} else if (number1 > 3) {\n\t\t\tSystem.out.println(\"Nope, number1 is NOT less than 3\");\n\t\t} else {\n\t\t\tSystem.out.println(\"Hmm, number1 must be EXACTLY 3\");\n\t\t}\n\n\t\twhile (number2 < 5) {\n\t\t\t// do this!\n\t\t\tSystem.out.println(\"Number 2: \" + number2);\n\t\t\tnumber2++;\n\t\t}\n\n\t\tdo {\n\t\t\tSystem.out.println(\"I always run at least once!\");\n\t\t} while (number3 > 5);\n\n\t\t// A loop has 3 parts:\n\t\t// 1. Loop variable initialization\n\t\t// 2. Conditional Statement\n\t\t// 3. Loop variable update\n\t\tfor (int i = 0; i < word.length(); i++){\n\t\t\tSystem.out.println(word.charAt(i));\n\t\t}\n\n\t}\n\n\n}\n";

const codeText5 = "public class ArrayLesson {\n\n\tpublic static void main(String[] args) {\n\n\t\t// We can create an array like this:\n\t\tint[] myArray = {1, 2, 3, 4, 5, 6};\n\n\t\t// Or, like this (it's six items long, but empty).\n\t\tint[] myEmptyArray = new int[6];\n\n\t\t// Matrices are defined: [columns][rows]\n\t\tint[][] myMatrix = new int[4][6];\n\n\t\tSystem.out.println(myMatrix.length); // 4 (Rows)\n\t\tSystem.out.println(myMatrix[0].length); // 6 (Columns)\n\n\t\t// Looping through a matrix and filling it:\n\t\tint count = 1;\n\t\tfor (int row = 0; row < myMatrix.length; row++){\n\t\t\tfor (int col = 0; col < myMatrix[row].length; col++){\n\t\t\t\tmyMatrix[row][col] = count;\n\t\t\t\tcount++;\n\t\t\t}\n\t\t}\n\n\t\t// Looping through a matrix and printing it\n\t\t// Note the leading space if the number is\n\t\t// less than 10.\n\t\tfor (int row = 0; row < myMatrix.length; row++){\n\t\t\tfor (int col = 0; col < myMatrix[row].length; col++){\n\t\t\t\tif (myMatrix[row][col] < 10){\n\t\t\t\t\tSystem.out.print(\" \" + myMatrix[row][col] + \" \");\n\t\t\t\t} else {\n\t\t\t\t\tSystem.out.print(myMatrix[row][col] + \" \");\n\t\t\t\t}\n\n\t\t\t}\n\t\t\tSystem.out.println();\n\t\t}\n\n\t}\n\n\n}";

const code = Prism.highlight(codeText, Prism.languages.java, 'java');
const code2 = Prism.highlight(codeText2, Prism.languages.java, 'java');
const code3 = Prism.highlight(codeText3, Prism.languages.java, 'java');
const code4 = Prism.highlight(codeText4, Prism.languages.java, 'java');
const code5 = Prism.highlight(codeText5, Prism.languages.java, 'java');


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
                        <br/>
                        <br/>
                        <h2>Strings</h2>
                        <div className="text">In Java, words and groups of words are called Strings and are members of the  <code className="language-java"> String </code> class.</div>
                        <div className="text">Strings are made up of letters and spaces which Java calls: <code className="language-java">char</code>s for characters.</div>

                        <pre className="line-numbers language-java">
                                <code className="language-java">
                                    <div dangerouslySetInnerHTML={{__html: code3}}/>
                                </code>
                            </pre>
                        <br/>
                        <br/>
                        <h2>Conditionals and Loops</h2>
                        <div className="text">One of the most powerful things about computers is that we can make them do things over and over again. For this, we can use loops. There are several kinds of loops.</div>
                        <pre className="line-numbers language-java">
                                <code className="language-java">
                                    <div dangerouslySetInnerHTML={{__html: code4}}/>
                                </code>
                            </pre>
                        <br/>
                        <br/>
                        <h2>Arrays and Matrices</h2>
                        <div className="text">Sometimes, it's handy to group things together - like when you put groceries in a bag. In Java, we can group things together by putting them in Arrays.</div>
                        <br/>
                        <br/>
                        <div className="text">Arrays make it easier to loop through lists of things. For example, Strings are actually arrays of chars and we've seen how to loop through Strings.</div>
                        <br/>
                        <br/>
                        <div className="text">We can even have Arrays of Arrays (called two-dimensional arrays or matrices). We can think of these as tables with rows and columns.</div>
                        <br/>
                        <br/>
                        <div className="text">The following table has 6 colums and 4 rows.</div>
                        <table>
                            <tbody>
                            <tr>
                                <td>[0][0]</td>
                                <td>[0][1]</td>
                                <td>[0][2]</td>
                                <td>[0][3]</td>
                                <td>[0][4]</td>
                                <td>[0][5]</td>
                            </tr>
                            <tr>
                                <td>[1][0]</td>
                                <td>[1][1]</td>
                                <td>[1][2]</td>
                                <td>[1][3]</td>
                                <td>[1][4]</td>
                                <td>[1][5]</td>
                            </tr>
                            <tr>
                                <td>[2][0]</td>
                                <td>[2][1]</td>
                                <td>[2][2]</td>
                                <td>[2][3]</td>
                                <td>[2][4]</td>
                                <td>[2][5]</td>
                            </tr>
                            <tr>
                                <td>[3][0]</td>
                                <td>[3][1]</td>
                                <td>[3][2]</td>
                                <td>[3][3]</td>
                                <td>[3][4]</td>
                                <td>[3][5]</td>
                            </tr>
                            </tbody>
                        </table>
                        <pre className="line-numbers language-java">
                                <code className="language-java">
                                    <div dangerouslySetInnerHTML={{__html: code5}}/>
                                </code>
                            </pre>
                    </Col>
                    <Col md={4} className=" no-gutters">
                        <ul className="lesson-cont">
                            <li><a>Getting Started</a></li>
                            <li><a>Variables</a></li>
                            <li><a>Strings</a></li>
                            <li><a>Loops and Conditionals</a></li>
                            <li><a>Arrays and Matrices</a></li>
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