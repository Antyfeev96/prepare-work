import {createContext, useContext} from "react";
import RootStore from "../stores/root.ts";

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStores = () => {
    const context = useContext(RootStoreContext);

    if (context === null) {
        throw new Error('Root context error')
    }

    return context
}
