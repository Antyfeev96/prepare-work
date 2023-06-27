import {Avatar, Container, Data} from './styles';
import icon from 'assets/react.svg'

function UserCard() {
    const { username } = JSON.parse(localStorage.getItem('user') || "''")

    return (
        <Container>
            <Avatar src={icon}/>
            <Data>
                <div>{username}</div>
                <div>26</div>
                <div>Saint-Petersburg</div>
                <div>Frontend</div>
            </Data>
        </Container>
    );
}

export default UserCard;
