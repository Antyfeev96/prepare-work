import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/redux.ts';
import {logout} from '../../store/reducers/UserSlice.ts';

const Logout = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(logout())
        navigate('/auth', {replace: true})
    }, [])

    return null;
};

export default Logout;
