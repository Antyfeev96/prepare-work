import {Button, Form} from './styles.ts';
import {FormEvent} from 'react';

const CreateTaskForm = () => {

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <Form onSubmit={onSubmit}>
            <label>
                <span>Название:</span>
                <input name="title" type="text"/>
            </label>
            <label>
                <span>Описание:</span>
                <input name="description" type="text"/>
            </label>
            <label>
                <span>Статус выполнения</span>
                <input type="checkbox" name="completed"/>
            </label>
            <Button type="submit">Создать задачу</Button>
        </Form>
    );
};

export default CreateTaskForm;
