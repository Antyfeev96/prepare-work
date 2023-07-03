import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {LoginLayout, ProtectedLayout} from '../components/Layout';
import Auth from './auth';
import Home from './home';
import CreateTaskPage from './create';
import Logout from './logout';
import TasksPage from './tasks';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route element={<ProtectedLayout />}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="create" element={<CreateTaskPage />}/>
                    <Route path="tasks" element={<TasksPage />}/>
                    <Route path="logout" element={<Logout/>}/>
                </Route>
                <Route element={<LoginLayout/>}>
                    <Route path="auth" element={<Auth/>}/>
                </Route>
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </Router>
    )
}

export default AppRouter

