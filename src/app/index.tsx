import './index.css'
import {router} from '../pages/router';
import {RouterProvider} from 'react-router-dom';

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
