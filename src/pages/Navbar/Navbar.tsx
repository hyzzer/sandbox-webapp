import React from 'react';
import './Navbar.css';
import HomeButton from './HomeButton/HomeButton';
import TabBar from '../../components/TabBar/TabBar';
import { Tab } from '../../utils/Tab';
import { Links } from '../../utils/Links';
import HomeIcon from '../../components/svg/HomeIcon/HomeIcon';
import TrackingIcon from '../../components/svg/TrackingIcon/TrackingIcon';
import MessagesIcon from '../../components/svg/MessagesIcon/MessagesIcon';
import PackageIcon from '../../components/svg/PackageIcon/PackageIcon';
import OrderIcon from '../../components/svg/OrderIcon/OrderIcon';
import NotificationsIcon from '../../components/svg/NotificationsIcon/NotificationsIcon';
import SettingsIcon from '../../components/svg/SettingsIcon/SettingsIcon';
import ProfileButton from './ProfileButton/ProfileButton';

const Navbar: React.FC = () => {
    const TopTabBarlinks: Links[] = [
        { tab: Tab.HOME, icon: HomeIcon },
        { tab: Tab.TRACKING, icon: TrackingIcon },
        { tab: Tab.MESSAGES, icon: MessagesIcon },
        { tab: Tab.PACKAGE, icon: PackageIcon },
        { tab: Tab.ORDER, icon: OrderIcon },
    ];

    const BottomTabBarlinks: Links[] = [
        { tab: Tab.NOTIFICATIONS, icon: NotificationsIcon },
        { tab: Tab.SETTINGS, icon: SettingsIcon },
    ];

    return (
        <nav className="navbar-container">
            <div className="home-button-container">
                <HomeButton />
            </div>
            <div className="tabbbars-container">
                <TabBar links={TopTabBarlinks} />
                <div className="bottom-container">
                    <TabBar links={BottomTabBarlinks} />
                    <ProfileButton
                        imageUrl={'src/assets/smallTylerDurden.jpg'}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
