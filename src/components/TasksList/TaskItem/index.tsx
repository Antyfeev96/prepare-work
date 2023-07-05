import {Button, Container} from './styles.ts';
import {memo, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ITask, useDeleteTaskMutation, useUpdateTaskMutation} from '../../../services/TasksService.ts';

export const Task = ({ id, title, description, completed } : ITask) => {

    const { t } = useTranslation()

    const [deleteTask] = useDeleteTaskMutation()
    const [updateTask] = useUpdateTaskMutation()

    const onStatusChange = async () => {
        await updateTask({
            id,
            completed: !completed
        })
    }
    const onDelete = async () => {
        await deleteTask(id)
    }

    return (
        <Container>
            <div>{t('tasksList.task.title')}: {title}</div>
            <div>{t('tasksList.task.description')}: {description}</div>
            <div>
                <label htmlFor="">{t('tasksList.task.status')}</label>
                <input type="checkbox" checked={completed} onChange={onStatusChange}/>
            </div>
            <Button onClick={onDelete} type="button">{t('tasksList.task.deleteButton')}</Button>
        </Container>
    );
};

export const MemoTask = memo(Task);
