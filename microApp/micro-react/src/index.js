import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let root
function render(props) {
  const { container } = props
  root = ReactDOM.createRoot(container ? container.querySelecttor('#root') : document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
if(!window.__POWERED_BY_QIANKUN__){
  render({})
}

export async function bootstrap(){
  console.log("______bootstrap")
}
export async function mount(props){
  console.log('______mount',props)
  render(props)
}
export async function unmount(props){
  console.log('_____unmount',props)
  root && root.unmount()
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
