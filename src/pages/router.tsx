import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Auth from './auth';
import Home from './home';
import Layout from '../components/Layout';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="auth" element={<Auth />} />
            <Route path="home" element={<Home/>}/>
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

