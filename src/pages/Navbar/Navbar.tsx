import React from 'react';
import './Navbar.css';
import HomeButton from './HomeButton/HomeButton';
import TabBar from '../../components/TabBar/TabBar';
import { Tab } from '../../utils/Tab';
import { Links } from '../../utils/Links';

const LeftNavbar: React.FC = () => {
    const TopTabBarlinks: Links[] = [
        { label: 'X', tab: Tab.HOME },
        { label: 'H', tab: Tab.TRACKING },
        { label: 'A', tab: Tab.MESSAGES },
        { label: 'E', tab: Tab.PACKAGE },
        { label: 'R', tab: Tab.ORDER },
    ];

    const BottomTabBarlinks: Links[] = [
        { label: 'S', tab: Tab.NOTIFICATIONS },
        { label: 'C', tab: Tab.SETTINGS },
        { label: 'V', tab: Tab.PROFILE },
    ];

    return (
        <nav className="navbar-container">
            <div className="home-button-container">
                <HomeButton />
            </div>
            <div className="tabbbars-container">
                <TabBar links={TopTabBarlinks} />
                <TabBar links={BottomTabBarlinks} />
            </div>
        </nav>
    );
};

export default LeftNavbar;
