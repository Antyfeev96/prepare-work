import {Button, Container} from './styles.ts';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';

export const Task = () => {

    const { t } = useTranslation()

    return (
        <Container>
            <div>{t('tasksList.task.title')}</div>
            <div>{t('tasksList.task.description')}</div>
            <div>
                <label htmlFor="">{t('tasksList.task.status')}:</label>
                <input type="checkbox" defaultChecked={Math.random() > 0.5}/>
            </div>
            <Button>{t('tasksList.task.deleteButton')}</Button>
        </Container>
    );
};

export const MemoTask = memo(Task);
