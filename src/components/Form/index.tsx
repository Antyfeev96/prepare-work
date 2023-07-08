import {Button, Form} from './styles.ts';
import {FormEvent} from 'react';
import {useTranslation} from 'react-i18next';

const CreateTodoForm = () => {

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const { t } = useTranslation()

    return (
        <Form onSubmit={onSubmit}>
            <label>
                <span>{t('createTodo.title')}:</span>
                <input name="title" type="text"/>
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
