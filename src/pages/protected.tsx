import {
    Navigate,
    Outlet,
} from 'react-router-dom';


interface Props {
    redirectPath?: string
}

const ProtectedRoute = ({ redirectPath = '/auth' }: Props) => {
    const user =  JSON.parse(localStorage.getItem('user') || "''")

    if (!user) {
        console.log(user)
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute
