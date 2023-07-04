import {Avatar, Container, Data} from './styles';
import icon from 'assets/react.svg'
import {useTranslation} from 'react-i18next';

function UserCard() {
    const { username } = JSON.parse(localStorage.getItem('user') || "null")

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
