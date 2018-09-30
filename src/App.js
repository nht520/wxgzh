import React, { Component } from 'react';
import Header from './common/header/header';
//引用redux 和 store 仓库
import { Provider } from 'react-redux'
import store from './store/index'
//引用路由
import { BrowserRouter,Route } from 'react-router-dom'
import Home from './home/home';
class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={Home}>
                        </Route>
                    </div>
                </BrowserRouter>
            </div>
        </Provider>
    );
  }
}

export default App;
