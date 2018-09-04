import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProjectInfo from './components/ProjectInfo'
import Project from './components/Project'
import Projectd from './components/Projectd'
import ProjectEndTimeA from './components/ProjectEndTimeA'
import ProjectEndTimeD from './components/ProjectEndTimeD'
import Filter from './components/Filter'


var routes = (
  <Router>
    <div>
      <Route exact path="/" component={App} ></Route>
      <Route exact path="/project/:projectname" component={ProjectInfo} ></Route>
      <Route exact path="/sorta" component={Project} ></Route>
      <Route exact path="/sortd" component={Projectd} ></Route>
      <Route exact path="/endtimea" component={ProjectEndTimeA} ></Route>
      <Route exact path="/endtimed" component={ProjectEndTimeD} ></Route>
      <Route exact path="/filter" component={Filter} ></Route>
    </div>
  </Router>
  )

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
