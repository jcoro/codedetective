import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import TopNav from '../components/TopNav';
import Sidebar from './Sidebar';
import BriefingPanel from './Panel_Briefing';
import EvidencePanel from './Panel_Evidence';
import CodePanel from './Panel_Code';
import LessonPanel1 from './Panel_Lesson';
import ResourcesPanel from './Panel_Resources';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import '../assets/css/index.css';
import '../assets/css/prism.css';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <BriefingPanel />
    },
    {
        path: '/evidence',
        main: () => <EvidencePanel />
    },
    {
        path: '/code',
        main: () => <CodePanel />
    },
    {
        path: '/lesson1',
        main: () => <LessonPanel1 />
    },
    {
        path: '/resources',
        main: () => <ResourcesPanel />
    }
];

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Row bsClass="row no-gutters">

                        <Col md={1} className="side-column no-gutters">
                            <div className="logo-container">
                                <img src={logo} className="App-logo" alt="logo"/>
                            </div>

                            <Sidebar/>

                        </Col>
                        <Col md={11} className="main-column">
                            <div className="App-header">

                                <Row>
                                    <Col md={8}>
                                        <h1 className="App-title">CodeDetective.org</h1>
                                        <h3 className="App-title">An educational coding game</h3>
                                    </Col>
                                    <Col md={4}>
                                        <TopNav/>
                                    </Col>
                                </Row>
                            </div>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                        </Col>
                    </Row>
                </Router>

            </div>
        );
    }
}

export default App;
