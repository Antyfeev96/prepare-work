import {Button, Container} from './styles.ts';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';

export const Todo = () => {

    const { t } = useTranslation()

    return (
        <Container>
            <div>{t('todoList.todo.title')}:</div>
            <div>
                <label htmlFor="">{t('todoList.todo.status')}:</label>
                <input type="checkbox" defaultChecked={Math.random() > 0.5}/>
            </div>
            <Button>{t('todoList.todo.deleteButton')}</Button>
        </Container>
    );
};

export const MemoTodo = memo(Todo);
