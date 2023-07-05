import {Button, Container} from './styles.ts';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {ITodo, useDeleteTodoMutation, useUpdateTodoMutation} from '../../../services/TodosService.ts';

export const Todo = ({ id, title, description, completed } : ITodo) => {

    const { t } = useTranslation()

    const [deleteTodo] = useDeleteTodoMutation()
    const [updateTodo] = useUpdateTodoMutation()

    const onStatusChange = async () => {
        await updateTodo({
            id,
            completed: !completed
        })
    }
    const onDelete = async () => {
        await deleteTodo(id)
    }

    return (
        <Container>
            <div>{t('todoList.todo.title')}: {title}</div>
            <div>{t('todoList.todo.description')}: {description}</div>
            <div>
                <label htmlFor="">{t('todoList.todo.status')}</label>
                <input type="checkbox" checked={completed} onChange={onStatusChange}/>
            </div>
            <Button onClick={onDelete} type="button">{t('todoList.todo.deleteButton')}</Button>
        </Container>
    );
};

export const MemoTodo = memo(Todo);
