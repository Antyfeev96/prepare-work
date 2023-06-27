import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Auth from './auth';
import Home from './home';
import Layout from '../components/Layout';
import ProtectedRoute from './protected.tsx';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="auth" element={<Auth/>}/>
                    <Route element={<ProtectedRoute />}>
                        <Route path="home" element={<Home/>}/>
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter

