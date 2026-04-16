import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Pomodoro from "../Pomodoro";
import MotivationalQuote from "../MotivationalQuote";
import HappitTrackerDashboardCard from "../HappitTrackerDashboardCard";
import "./Dashboard.css";

export default function Dashboard(){
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="dashboard-container">
            <Header 
                className="dashboard-header" 
                notification={12} 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen} 
            />
            <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''} ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
                <Sidebar />
            </aside>
            
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            
            <main className="dashboard-main">
                <div className="dashboard-component" style={{ gridRow: '1 / 4', gridColumn: '1 / 4' }}>
                    Todo List
                </div>
                <div className="dashboard-component" style={{ gridRow: '1 / 3', gridColumn: '4 / 6' }}>
                    <HappitTrackerDashboardCard />
                </div>
                <div className="dashboard-component" style={{ gridRow: '4 / 6', gridColumn: '1 / 3' }}>
                    <Pomodoro />
                </div>
                <div className="dashboard-component" style={{ gridRow: '4 / 5', gridColumn: '3 / 4' }}>
                    Weather
                </div>
                <div className="dashboard-component" style={{ gridRow: '5 / 6', gridColumn: '3 / 4' }}>
                    Temperature & DateTime
                </div>
                <div className="dashboard-component" style={{ gridRow: '3 / 5', gridColumn: '4 / 6' }}>
                    Progress Overview
                </div>
                <div className="dashboard-component" style={{ gridRow: '5 / 6', gridColumn: '4 / 6' }}>
                    <MotivationalQuote />
                </div>
            </main>
            
            <footer className="dashboard-footer">
                <Footer />
            </footer>
        </div>
    );
}