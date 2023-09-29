import React from 'react';
import './Navbar.css';
import HomeButton from './HomeButton/HomeButton';
import TabBar from '../../components/TabBar/TabBar';
import { Tab } from '../../utils/Tab';
import { Links } from '../../utils/Links';
import HomeIcon from '../../components/svg/HomeIcon/HomeIcon';
import BoltIcon from '../../components/svg/BoltIcon/BoltIcon';

const LeftNavbar: React.FC = () => {
    const TopTabBarlinks: Links[] = [
        { tab: Tab.HOME, icon: HomeIcon },
        { tab: Tab.TRACKING, icon: BoltIcon },
        { tab: Tab.MESSAGES, icon: HomeIcon },
        { tab: Tab.PACKAGE, icon: HomeIcon },
        { tab: Tab.ORDER, icon: HomeIcon },
    ];

    const BottomTabBarlinks: Links[] = [
        { tab: Tab.NOTIFICATIONS, icon: HomeIcon },
        { tab: Tab.SETTINGS, icon: HomeIcon },
        { tab: Tab.PROFILE, icon: HomeIcon },
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
