import {Avatar, Container, Data} from './styles';
import icon from 'assets/react.svg'
import {useTranslation} from 'react-i18next';
import {useAppSelector} from '../../hooks/redux.ts';

function UserCard() {
    const { username } = useAppSelector(state => state.userReducer)

    const { t } = useTranslation()

    return (
        <Container>
            <Avatar src={icon}/>
            <Data>
                <div>{username}</div>
                <div>26</div>
                <div>{t('home.city')}</div>
                <div>{t('home.spec')}</div>
            </Data>
        </Container>
    );
}

export default UserCard;
