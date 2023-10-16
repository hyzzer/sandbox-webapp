import React from 'react';
import TrackingView from './pages/TrackingView/TrackingView';
import Navbar from './pages/Navbar/Navbar';
import HomeView from './pages/HomeView/HomeView';
import MessagesView from './pages/MessagesView/MessagesView';
import { Route, Routes } from 'react-router-dom';

function App(): React.ReactElement {
    // const [view, setView] = useState<Tab>(Tab.HOME);

    // console.log(view);

    return (
        <div className="app-container">
            <Navbar />
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/tracking" element={<TrackingView />} />
                    <Route path="/messages" element={<MessagesView />} />
                </Routes>
            </div>
            {/* <ViewContext.Provider value={{ view, setView }}>
                <Navbar />
                <div className="content-container">
                    {view === Tab.HOME && <HomeView />}
                    {view === Tab.TRACKING && <TrackingView />}
                    {view === Tab.MESSAGES && <MessagesView />}
                </div>
            </ViewContext.Provider> */}
        </div>
    );
}

export default App;
