import TabBarItem from '../TabBarItem/TabBarItem';
import './TabBar.css';

interface TabbarProps {
    links: { label: string; url: string }[];
}

const Tabbar = ({ links }: TabbarProps): React.ReactElement => {
    return (
        <ul className="tabbar-list">
            {links.map((link) => (
                <TabBarItem
                    key={link.label}
                    label={link.label}
                    url={link.url}
                />
            ))}
        </ul>
    );
};

export default Tabbar;
