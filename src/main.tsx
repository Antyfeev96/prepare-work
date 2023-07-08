import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './app';
import { spy } from 'mobx'

import './i18n';

spy((ev) => {
    if (ev.type === 'action') {
        console.log(ev)
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <App/>
        </Suspense>
    </React.StrictMode>,
)
