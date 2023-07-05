import {Button, Form} from './styles.ts';
import {FormEvent} from 'react';
import {useTranslation} from 'react-i18next';
import {useCreateTodoMutation} from '../../services/TodosService.ts';

const CreateTodoForm = () => {

    const [createTodo] = useCreateTodoMutation()

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target as EventTarget & {
            title: { value: string };
            description: { value: string };
            completed: { checked: boolean };
        };
        const todo = {
            title: target.title.value,
            description: target.description.value,
            completed: target.completed.checked
        }
        await createTodo(todo)
    }

    const { t } = useTranslation()

    return (
        <Form onSubmit={onSubmit}>
            <label>
                <span>{t('createTodo.title')}:</span>
                <input name="title" type="text"/>
            </label>
            <label>
                <span>{t('createTodo.description')}:</span>
                <input name="description" type="text"/>
            </label>
            <label>
                <span>{t('createTodo.status')}</span>
                <input type="checkbox" name="completed"/>
            </label>
            <Button type="submit">{t('createTodo.submitButton')}</Button>
        </Form>
    );
};

export default CreateTodoForm;
