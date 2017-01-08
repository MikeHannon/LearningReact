import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import Home from './components/Home'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

// Router now reads from the beginning of the route rather than from the end of our local file.
// This wouldn't be a problem if I were serving this file from localhost rather than running it as a file as we are currently
// But currentDirectory is the temp fix:
let currentDirectory = "/Users/MikeHannon/Documents/React/project1/public/index.html"

ReactDOM.render(
     <Router history={browserHistory}>

         <Route path={currentDirectory} component={Main}>
             <IndexRoute component={Home} />
         </Route>
     </Router>, document.getElementById('app')
 );

// require this file in your server (so it loads your models)
