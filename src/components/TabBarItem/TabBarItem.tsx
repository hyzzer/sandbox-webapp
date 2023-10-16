import { useEffect, useState } from 'react';
import { Links } from '../../utils/Links';
import './TabBarItem.css';
import { Link, useLocation } from 'react-router-dom';

type TabBarItemProps = Links;

const TabBarItem: React.FC<TabBarItemProps> = ({ tab, icon: Icon }: Links) => {
    const [className, setClassName] = useState<string>('tabbar-item');

    const location = useLocation();

    useEffect(() => {
        setClassName(
            location.pathname === (tab as string)
                ? 'tabbar-item selected'
                : 'tabbar-item'
        );
    }, [location, tab]);

    return (
        <li className={className}>
            <Link to={tab} className="tabbar-button">
                <Icon />
            </Link>
        </li>
    );
};

export default TabBarItem;
