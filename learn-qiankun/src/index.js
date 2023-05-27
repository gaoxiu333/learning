import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 注册 主应用
registerMicroFactory()
function registerMicroFactory() {
  registerMicroApps([
    {
      name: 'Micro React',
      entry: 'http://localhost:3000/',
      container: '#reactContainer',
      activeRule: '/react'
    },
    // {
    //   name: 'vue app',
    //   entry: '//localhost:7000',
    //   container: '#vueContainer',
    //   activeRule: '/vue'
    // },
    // {
    //   name: 'normal app',
    //   entry: '//localhost:7000',
    //   container: '#normalContainer',
    //   activeRule: '/normal'
    // }
  ])
  start()
}
