import React, { Component } from 'react';
//引用redux 和 store 仓库
import { Provider } from 'react-redux'
import store from './store/index'
//引用路由
import {
    BrowserRouter,
    Route,
    // Link
} from 'react-router-dom'
import Home from './home/home';
import login from './home/login/login';
class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Route path='/Home' exact component={Home}></Route>
                        <Route path='/' exact component={login}></Route>
                        {/*<ul>*/}
                            {/*<li>*/}
                                {/*<Link to="/Home">yi</Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                                {/*<Link to="/">er</Link>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                        {/*泪水teble*/}
                    </div>
                </BrowserRouter>
            </div>
        </Provider>
    );
  }
}

export default App;
