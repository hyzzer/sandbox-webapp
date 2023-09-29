import { useViewContext } from '../../hooks/useViewContext';
import { Links } from '../../utils/Links';
import './TabBarItem.css';

type TabBarItemProps = Links;

const TabBarItem: React.FC<TabBarItemProps> = ({ tab, icon: Icon }: Links) => {
    const { setView } = useViewContext();
    const onChangeTab = (): void => {
        setView(tab);
    };
    return (
        <li className="tabbar-item">
            <button onClick={onChangeTab} className="tabbar-button">
                <Icon />
            </button>
        </li>
    );
};

export default TabBarItem;
