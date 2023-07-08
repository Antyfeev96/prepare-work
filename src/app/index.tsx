import './index.css'
import AppRouter from '../pages/router';
import {RootStoreContext} from "../context";
import RootStore from "../stores/root.ts";

function App() {
    return (
        <RootStoreContext.Provider value={new RootStore()}>
            <AppRouter/>
        </RootStoreContext.Provider>
    );
}

export default App;
