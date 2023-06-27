import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('user')
        navigate('/auth', { replace: true })
    }, [])

    return null;
};

export default Logout;
