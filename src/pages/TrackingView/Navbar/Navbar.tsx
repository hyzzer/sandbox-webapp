import React from 'react';
import './Navbar.css';
import HomeButton from '../HomeButton/HomeButton';
import TabBar from '../../../components/TabBar/TabBar';

const LeftNavbar: React.FC = () => {
    const TopTabBarlinks = [
        { label: 'X', url: '/X' },
        { label: 'H', url: '/H' },
        { label: 'O', url: '/O' },
    ];

    const BottomTabBarlinks = [
        { label: 'N', url: '/notifications' },
        { label: 'S', url: '/settings' },
        { label: 'P', url: '/profile' },
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
