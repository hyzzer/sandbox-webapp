import { Links } from '../../utils/Links';
import TabBarItem from '../TabBarItem/TabBarItem';
import './TabBar.css';

interface TabbarProps {
    links: Links[];
}

const Tabbar = ({ links }: TabbarProps): React.ReactElement => {
    return (
        <ul className="tabbar-list">
            {links.map(({ tab, icon }) => (
                <TabBarItem key={tab} tab={tab} icon={icon} />
            ))}
        </ul>
    );
};

export default Tabbar;
