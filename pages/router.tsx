import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Auth from './auth';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="auth" element={<Auth />} />
            <Route
                path="dashboard"
                loader={({ request }) =>
                    fetch("/api/dashboard.json", {
                        signal: request.signal,
                    })
                }
            />
        </Route>
    )
);

