// import React from 'react'
// import ReactDOM from 'react-dom'
// import DataTable from './components/InfiniteScrollTable'

// const rootEl = document.getElementById('root')

// function render() {
//   ReactDOM.render(
//     <DataTable size="10"/>,
//     document.getElementById('root')
//   )
// }

// render();
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
