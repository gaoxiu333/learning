import './public-path.ts'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './learn.css'

let root: any
function render(props: any) {
  console.log('render', props)
  const { container } = props;

  root = ReactDOM.createRoot(container ? container.getElementById('root') : document.getElementById('root') as HTMLElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  root.unmount
}
// @ts-expect-error
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('____bootstrap')
}
export async function mount(props: any) {
  console.log('________mount props', props)
  render(props)
}
export async function unmount(props: any) {
  // const { container } = props
  console.log('_______unmount')
  root && root.unmount()
}
