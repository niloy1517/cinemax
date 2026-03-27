import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './app/store.js'
import TMDBMoiveFilterProvider from './context/TMDBMoiveFilterProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TMDBMoiveFilterProvider>
          <App />
        </TMDBMoiveFilterProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
