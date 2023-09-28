import { useContext } from 'react';
import { ViewContext, ViewContextType } from '../context/ViewContext';

export const useViewContext = (): ViewContextType => {
    const context = useContext(ViewContext);
    if (!context) {
        throw new Error(
            'useViewContext must be used within a ViewContext Provider'
        );
    }
    return context;
};
