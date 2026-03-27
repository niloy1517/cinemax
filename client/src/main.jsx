import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './Context/Context.jsx'
import { Provider } from 'react-redux'
import store, { persistor } from './app/store.js'
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(
  <Context>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Context>,
)
