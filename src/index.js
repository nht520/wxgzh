import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//引用style全局样式
import './style.js';
//引用公用接口文件
import './statics/config.js'
//引用阿里粑粑图标
import './statics/iconfont/iconfont'

ReactDOM.render(<App />, document.getElementById('root'));
