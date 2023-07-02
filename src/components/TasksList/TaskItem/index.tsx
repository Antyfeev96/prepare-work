import {Button, Container} from './styles.ts';
import {memo} from 'react';

export const Task = () => {
    return (
        <Container>
            <div>Название</div>
            <div>Описание</div>
            <div>
                <label htmlFor="">Статус:</label>
                <input type="checkbox" defaultChecked={Math.random() > 0.5}/>
            </div>
            <Button>Удалить задачу</Button>
        </Container>
    );
};

export const MemoTask = memo(Task);
