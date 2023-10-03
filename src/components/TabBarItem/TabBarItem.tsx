import { useEffect, useState } from 'react';
import { useViewContext } from '../../hooks/useViewContext';
import { Links } from '../../utils/Links';
import './TabBarItem.css';

type TabBarItemProps = Links;

const TabBarItem: React.FC<TabBarItemProps> = ({ tab, icon: Icon }: Links) => {
    const { view, setView } = useViewContext();
    const [classname, setClassname] = useState<string>('tabbar-item');
    const onChangeTab = (): void => {
        setView(tab);
    };

    useEffect(() => {
        setClassname(view === tab ? 'tabbar-item selected' : 'tabbar-item');
    }, [tab, view]);
    return (
        <li className={classname}>
            <button onClick={onChangeTab} className="tabbar-button">
                <Icon />
            </button>
        </li>
    );
};

export default TabBarItem;
