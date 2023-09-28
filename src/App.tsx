import React, { useState } from 'react';
import TrackingView from './pages/TrackingView/TrackingView';
import Navbar from './pages/Navbar/Navbar';
import { ViewContext } from './context/ViewContext';
import { Tab } from './utils/Tab';
import HomeView from './pages/HomeView/HomeView';

function App(): React.ReactElement {
    const [view, setView] = useState<Tab>(Tab.HOME);

    console.log(view);

    return (
        <div className="app-container">
            <ViewContext.Provider value={{ view, setView }}>
                <Navbar />
                <div className="content-container">
                    {view === Tab.HOME && <HomeView />}
                    {view === Tab.TRACKING && <TrackingView />}
                </div>
            </ViewContext.Provider>
        </div>
    );
}

export default App;
