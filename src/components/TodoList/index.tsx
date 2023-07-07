import {Container, TodoGrid} from './styles.ts';
import {MemoTodo} from './TodoItem';
import {PagiTodo, useFetchPaginationTodosQuery} from '../../services/TodosService.ts';
import {useState} from 'react';
import {skipToken} from '@reduxjs/toolkit/query';
import {Pagination} from 'antd';

const TodoList = () => {
    const [page, setPage] = useState(1)
    const [limit] = useState(10)

    const { data, isSuccess } = useFetchPaginationTodosQuery(page ? { page, limit } : skipToken)
    const onChange = (page: number) => {
        setPage(page)
    }

    return (
        <Container>
            <TodoGrid>
                {isSuccess && data?.list?.map((props) => <MemoTodo key={props.id} {...props} />)}
            </TodoGrid>
            <Pagination
                defaultCurrent={page}
                pageSize={limit}
                total={data?.totalCount}
                onChange={(page) => onChange(page)}
            />
        </Container>
    );
};

export default TodoList;
