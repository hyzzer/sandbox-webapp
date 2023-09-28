import { Links } from '../../utils/Links';
import TabBarItem from '../TabBarItem/TabBarItem';
import './TabBar.css';

interface TabbarProps {
    links: Links[];
}

const Tabbar = ({ links }: TabbarProps): React.ReactElement => {
    return (
        <ul className="tabbar-list">
            {links.map((link) => (
                <TabBarItem
                    key={link.label}
                    label={link.label}
                    tab={link.tab}
                />
            ))}
        </ul>
    );
};

export default Tabbar;
