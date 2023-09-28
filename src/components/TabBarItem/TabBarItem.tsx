import './TabBarItem.css';

type TabBarItemProps = {
    label: string;
    url: string;
};

const TabBarItem: React.FC<TabBarItemProps> = ({
    label,
    url,
}: TabBarItemProps) => {
    return (
        <li className="tabbar-item">
            <a href={url} className="tabbar-link">
                {label}
            </a>
        </li>
    );
};

export default TabBarItem;
