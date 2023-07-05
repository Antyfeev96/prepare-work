import {Button, Form} from './styles.ts';
import {FormEvent} from 'react';
import {useTranslation} from 'react-i18next';
import {useCreateTaskMutation} from '../../services/TasksService.ts';

const CreateTaskForm = () => {

    const [createTask] = useCreateTaskMutation()

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target as EventTarget & {
            title: { value: string };
            description: { value: string };
            completed: { checked: boolean };
        };
        const post = {
            title: target.title.value,
            description: target.description.value,
            completed: target.completed.checked
        }
        console.log(post)
        await createTask(post)
    }

    const { t } = useTranslation()

    return (
        <Form onSubmit={onSubmit}>
            <label>
                <span>{t('createTask.title')}:</span>
                <input name="title" type="text"/>
            </label>
            <label>
                <span>{t('createTask.description')}:</span>
                <input name="description" type="text"/>
            </label>
            <label>
                <span>{t('createTask.status')}</span>
                <input type="checkbox" name="completed"/>
            </label>
            <Button type="submit">{t('createTask.submitButton')}</Button>
        </Form>
    );
};

export default CreateTaskForm;
