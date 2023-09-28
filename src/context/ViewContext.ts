import { createContext } from 'react';
import { Tab } from '../utils/Tab';

export type ViewContextType = {
    view: Tab;
    setView: React.Dispatch<React.SetStateAction<Tab>>;
};

export const ViewContext = createContext<ViewContextType | undefined>(
    undefined
);
