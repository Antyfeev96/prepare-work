import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {LoginLayout, ProtectedLayout} from '../components/Layout';
import Auth from './auth';
import Home from './home';
import CreateTodoPage from './create';
import TodosPage from './todos';
import Logout from './logout';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route element={<ProtectedLayout/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="create" element={<CreateTodoPage/>}/>
                    <Route path="todos" element={<TodosPage/>}/>
                    <Route path="logout" element={<Logout/>}/>
                </Route>
                <Route element={<LoginLayout/>}>
                    <Route path="auth" element={<Auth/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter

