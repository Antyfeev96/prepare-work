import {Button, Container} from './styles.ts';
import {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Todo} from "../../../stores/todos.ts";

export const TodoItem: FC<Todo> = ({ title, completed }) => {

    const { t } = useTranslation()

    return (
        <Container>
            <div>{t('todoList.todo.title')}: {title}</div>
            <div>
                <label htmlFor="">{t('todoList.todo.status')}:</label>
                <input type="checkbox" checked={completed}/>
            </div>
            <Button>{t('todoList.todo.deleteButton')}</Button>
        </Container>
    );
};

export const MemoTodo = memo(TodoItem);
