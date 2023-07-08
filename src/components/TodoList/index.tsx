import {Container, Pagi, TodoGrid} from './styles.ts';
import {MemoTodo} from './TodoItem';
import {useFetchPaginationTodosQuery} from '../../services/TodosService.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.ts';
import {getPaginationParams} from '../../store/reducers/selectors.ts';
import {setLimit, setPage} from '../../store/reducers/TodosSlice.ts';
import {useDebounce} from '../../hooks/useDebounce.ts';

const TodoList = () => {
    const dispatch = useAppDispatch()
    const {page, limit, title_like} = useAppSelector(getPaginationParams)
    const value = useDebounce(title_like)
    const {data, isSuccess, isLoading, isError} = useFetchPaginationTodosQuery({page, limit, title_like: value})
    const onChange = (page: number, pageSize: number) => {
        dispatch(setPage(page))
        dispatch(setLimit(pageSize))
    }

    return (
        <Container>
            <TodoGrid>
                {isLoading && <div>Loading...</div>}
                {isError && <div>ERROR</div>}
                {isSuccess && data?.list?.map((props) => <MemoTodo key={props.id} {...props} />)}
            </TodoGrid>
            <Pagi
                defaultCurrent={page}
                pageSize={limit}
                total={data?.totalCount}
                onChange={onChange}
            />
        </Container>
    );
};

export default TodoList;
