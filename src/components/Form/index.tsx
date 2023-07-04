import {Button, Form} from './styles.ts';
import {FormEvent} from 'react';
import {useTranslation} from 'react-i18next';

const CreateTaskForm = () => {

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
