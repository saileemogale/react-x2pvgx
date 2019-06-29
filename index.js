// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//         <AppD />
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById('root'));


import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import App from './containers/app'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import store from './store'
import { history } from "./history";

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Hello />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));