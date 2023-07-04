import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './app';

import './i18n';
import {Provider} from 'react-redux';
import {setupStore} from './store';

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <App/>
            </Suspense>
        </Provider>
    </React.StrictMode>,
)
