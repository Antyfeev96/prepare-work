import React, {Suspense} from 'react'
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client'
import {PersistGate} from 'redux-persist/integration/react'
import './i18n';
import App from './app';
import persist from './store'

const { store, persistor } = persist()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <Suspense fallback={<div>Loading...</div>}>
                    <App/>
                </Suspense>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
)
